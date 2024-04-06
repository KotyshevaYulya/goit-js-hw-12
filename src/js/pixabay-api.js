"use strict";

import { symbolTemplate } from './render-functions';
import { form, gallery, userSearch } from '../main';
import axios from 'axios';

export async function getPhoto(userSearch, currentPage) {
    const url = "https://pixabay.com/api/?key="; 
    const params = {
        key: '43135550-1722255432324a30f15700264',
        q: userSearch,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        per_page: 15,
        page: currentPage,
        
    };
    const res = await axios.get(url, { params });
    return res.data;
} 

  