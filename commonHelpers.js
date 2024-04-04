import{a as m,S as p,i as c}from"./assets/vendor-6e0bf343.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function o(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(r){if(r.ep)return;r.ep=!0;const t=o(r);fetch(r.href,t)}})();function f(s){return s.map(e=>`<li class = "gallery-item">
         <a class="gallery-link" href="${e.largeImageURL}">
         <img
         class = "gallery-image"
         src="${e.webformatURL}" 
         alt="${e.tags}" 
         width="1280"
         height="152"">
           <ul class="gallery-description">
             <li>
             <h3>Likes</h3>
             <p>${e.likes}</p>
             </li>
             <li>
             <h3>Views</h3>
             <p>${e.views}
             </p>
             </li>
             <li>
             <h3>Comments</h3>
             <p>${e.comments}</p>
             </li>
             <li>
             <h3>Downloads</h3>
             <p>${e.downloads}</p>
             </li>
             </ul>       
         </li>`).join("")}async function g(s){const e="https://pixabay.com/api/?key=",o={key:"43135550-1722255432324a30f15700264",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await m.get(e,{params:o})).data}const h=document.querySelector(".search-form"),a=document.querySelector(".gallery"),i=document.querySelector(".block");let d,u=new p(".gallery a");u.on("show.simplelightbox",function(){});u.on("error.simplelightbox",function(s){console.log(s)});h.addEventListener("submit",async s=>{if(s.preventDefault(),i.classList.remove("hidden"),d=h.elements.query.value.trim(),d==="")c.error({color:"red",position:"topRight",message:"Fill in the input!"}),i.classList.add("hidden"),a.innerHTML="";else try{const e=await g(d);if(e.total===0)c.error({color:"red",position:"topRight",message:'"Sorry, there are no images matching your search query. Please try again!"'}),s.target.reset(),i.classList.add("hidden"),a.innerHTML="";else{a.innerHTML="";const o=f(e.hits);a.insertAdjacentHTML("beforeend",o),i.classList.add("hidden"),u.refresh(),s.target.reset()}}catch{c.error({maxWidth:"432px",height:"48px",color:"red",position:"topRight",message:"Sorry, a technical error has occurred!"}),i.classList.add("hidden")}});
//# sourceMappingURL=commonHelpers.js.map
