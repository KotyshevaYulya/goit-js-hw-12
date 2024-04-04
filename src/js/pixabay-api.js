"use strict";

import { symbolTemplate } from './render-functions';
import { form, gallery } from '../main';
import axios from 'axios';

export function getPhoto(userSearch) {
    const key = '43135550-1722255432324a30f15700264';
    const BASE_URL = "https://pixabay.com"; 
    const END_POINT = "/api/?key="; 
    const params = new URLSearchParams({
        q: userSearch,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });

    const url = `${BASE_URL}${END_POINT}${key}&${params}`;
    
     return axios.get(url).then(res => res.data); 
} 


// const form = document.querySelector('.search-form');
// const gallery = document.querySelector('.gallery');

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const userSearch = form.elements.query.value;
//     if (userSearch === '') {
//          iziToast.error({
//         color: 'red',
//         position: 'topRight',
//         message: `Будь ласка введіть дані!`,
//       });
//     } else {
//         getPhoto(userSearch).then(data => {
//             if (data.total === 0) {
//                 iziToast.error({
//                     color: 'red',
//                     position: 'topRight',
//                     message: `"Sorry, there are no images matching your search query. Please try again!"`,
//                 });
//             } else {
//                 gallery.innerHTML = "";
//                 const markup = symbolTemplate(data.hits);
//                 gallery.insertAdjacentHTML("beforeend", markup);

//                 const galleryBig = new SimpleLightbox('.gallery a', {
//                     captionsData: 'alt',
//                     captionDelay: 250,
//                 });

//             }
//         });
//     }
//     e.target.reset();
// });
//!

// function symbolTemplate(objects) { 
//     return objects
//         .map(object => `<li class = "gallery-item">
//          <a class="gallery-link" href="${object.largeImageURL}">
//          <img
//          class = "gallery-image"
//          src="${object.webformatURL}" 
//          alt="${object.tags}" 
//          width="1280"
//          height="152"">
//            <ul class="gallery-description">
//              <li>
//              <h3>Likes</h3>
//              <p>${object.likes}</p>
//              </li>
//              <li>
//              <h3>Views</h3>
//              <p>${object.views}
//              </p>
//              </li>
//              <li>
//              <h3>Comments</h3>
//              <p>${object.comments}</p>
//              </li>
//              <li>
//              <h3>Downloads</h3>
//              <p>${object.downloads}</p>
//              </li>
//              </ul>       
//          </li>`)
//         .join("");
// };

