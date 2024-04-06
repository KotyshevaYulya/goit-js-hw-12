"use strict";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { getPhoto } from './js/pixabay-api'
import { symbolTemplate } from './js/render-functions';

//* = = = = = = = = = = = = = = = = = = = =

export const form = document.querySelector('.search-form');
export const imgGallery = document.querySelector('.gallery');
const load = document.querySelector('.js-btn-load');
const loader = document.querySelector('.block');
let currentPage = 1;
let maxPage = 0;
const perPage = 15;
export let userSearch = ''; 
export let gallery = new SimpleLightbox('.gallery a');

gallery.on('show.simplelightbox', function () {
	// do something…
});

gallery.on('error.simplelightbox', function (e) {
	console.log(e); // some usefull information
});

//* = = = = = = = = = = = = = = = = = = = =

load.addEventListener('click', onLoadMoreClick);

form.addEventListener("submit", async e => {
    e.preventDefault();

    showLoader();
    userSearch = form.elements.query.value.trim();
    imgGallery.innerHTML = "";
    currentPage = 1;
 
    if (!userSearch) {
         iziToast.error({
        color: 'red',
        position: 'topRight',
        message: `Fill in the input!`,
         });
        hideLoader();
        hideLoadMore(); 
    } else {
        try {
            const data = await getPhoto(userSearch, currentPage)
            if (data.total !== 0) {
                maxPage = Math.ceil(data.totalHits / perPage); 
                renderArticles(data.hits);
                hideLoader();
                gallery.refresh();
                e.target.reset();
                checkBtnStstus(); 
            } else {
                 iziToast.error({
                    color: 'red',
                    position: 'topRight',
                    message: `"Sorry, there are no images matching your search query. Please try again!"`,
                });
                e.target.reset();
                hideLoader();
                hideLoadMore(); 
            }
        } catch (error) {
            iziToast.error({
                maxWidth: '432px',
                height: '48px',
                color: 'red',
                position: 'topRight',
                message: "Sorry, a technical error has occurred!",
            });
            hideLoader();
        }
    }
    
});

function renderArticles(arr) {
    const markup = symbolTemplate(arr);
    imgGallery.insertAdjacentHTML("beforeend", markup);
}


async function onLoadMoreClick() {
    showLoader();
    currentPage += 1;
    const data = await getPhoto(userSearch, currentPage);
    renderArticles(data.hits);
    checkBtnStstus(); 
    hideLoader();
//=========
    const tryGallery = document.querySelector('.gallery li');
    const rect = tryGallery.getBoundingClientRect().height;
    window.scrollBy({
        top: rect,
        left: rect,
        behavior : "smooth",
    });
    gallery.refresh();
}

function checkBtnStstus() {
    if (currentPage >= maxPage) {
        iziToast.error({
                maxWidth: '432px',
                height: '48px',
                color: 'aquamarine',
                position: 'topRight',
                message: "We're sorry, but you've reached the end of search results.",
            });
        hideLoadMore();
    } else {
        showLoadMore();
    }
}

//*=============================
function showLoader() {
    loader.classList.remove("hidden");
};

function hideLoader() {
    loader.classList.add("hidden");
}


function showLoadMore() {
    load.classList.remove('hidden');
};

function hideLoadMore() {
    load.classList.add('hidden');
}

