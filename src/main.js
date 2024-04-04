"use strict";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
//* = = = =

import { getPhoto } from './js/pixabay-api'
import { symbolTemplate } from './js/render-functions';

export const form = document.querySelector('.search-form');
export const imgGallery = document.querySelector('.gallery');
const loader = document.querySelector('.block');

export let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
	// do something…
});

gallery.on('error.simplelightbox', function (e) {
	console.log(e); // some usefull information
});

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    loader.classList.remove("hidden");
    const userSearch = form.elements.query.value.trim();
    imgGallery.innerHTML = '<div class="loader"></div>';

    if (userSearch === '') {
         iziToast.error({
        color: 'red',
        position: 'topRight',
        message: `Fill in the input!`,
         });
        loader.classList.add("hidden");
    } else {
        try { const data = await getPhoto(userSearch)
            if (data.total === 0) {
                iziToast.error({
                    color: 'red',
                    position: 'topRight',
                    message: `"Sorry, there are no images matching your search query. Please try again!"`,
                });
                e.target.reset();
                loader.classList.add("hidden");
            } else {
                addImg();
                const markup = symbolTemplate(data.hits);
                console.log(markup);
                imgGallery.insertAdjacentHTML("beforeend", markup);
                gallery.refresh();
                e.target.reset();
                loader.classList.add("hidden");
            }
        } catch (error) {
            iziToast.error({
                maxWidth: '432px',
                height: '48px',
                color: 'red',
                position: 'topRight',
                message: "Sorry, a technical error has occurred!",
            });
            loader.classList.add("hidden");
        }
    }
     imgGallery.innerHTML = "";
});


// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     loader.classList.remove("hidden");
//     const userSearch = form.elements.query.value.trim();
//     imgGallery.innerHTML = '<div class="loader"></div>';

//     if (userSearch === '') {
//          iziToast.error({
//         color: 'red',
//         position: 'topRight',
//         message: `Fill in the input!`,
//          });
//         loader.classList.add("hidden");
//     } else {
//         getPhoto(userSearch).then(data => {
//             if (data.total === 0) {
//                 iziToast.error({
//                     color: 'red',
//                     position: 'topRight',
//                     message: `"Sorry, there are no images matching your search query. Please try again!"`,
//                 });
//                 e.target.reset();
//                 loader.classList.add("hidden");
//             } else {
//                 const markup = symbolTemplate(data.hits);
//                 console.log(markup);
//                 imgGallery.insertAdjacentHTML("beforeend", markup);
//                 gallery.refresh();
//                 e.target.reset();
//                 loader.classList.add("hidden");
//             }
//         })
//         .catch(error => {
//             iziToast.error({
//                 maxWidth: '432px',
//                 height: '48px',
//                 color: 'red',
//                 position: 'topRight',
//                 message: "Sorry, a technical error has occurred!",
//             });
//             loader.classList.add("hidden");
//         });
//     }
//      imgGallery.innerHTML = "";
// });

