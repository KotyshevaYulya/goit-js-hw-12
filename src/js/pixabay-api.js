"use strict";

import { symbolTemplate } from './render-functions';
import { form, gallery } from '../main';
import axios from 'axios';

// const instance = axios.create({
//     baseURL: "https://pixabay.com/api/?key=",
//     headers: {
//         key: '43135550-1722255432324a30f15700264',
//     },
//     params: {
//         q: userSearch,
//         image_type: "photo",
//         orientation: "horizontal",
//         safesearch: true,
//     }
// });

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

