"use strict";

import { getPhoto } from './pixabay-api';
import { form, imgGallery, gallery } from '../main';

export function symbolTemplate(objects) { 
    return objects
        .map(object => `<li class = "gallery-item">
         <a class="gallery-link" href="${object.largeImageURL}">
         <img
         class = "gallery-image"
         src="${object.webformatURL}" 
         alt="${object.tags}" 
         width="1280"
         height="152"">
           <ul class="gallery-description">
             <li>
             <h3>Likes</h3>
             <p>${object.likes}</p>
             </li>
             <li>
             <h3>Views</h3>
             <p>${object.views}
             </p>
             </li>
             <li>
             <h3>Comments</h3>
             <p>${object.comments}</p>
             </li>
             <li>
             <h3>Downloads</h3>
             <p>${object.downloads}</p>
             </li>
             </ul>       
         </li>`)
      .join("");
};

