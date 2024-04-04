import{a as u,S as m,i as c}from"./assets/vendor-6e0bf343.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function p(o){return o.map(r=>`<li class = "gallery-item">
         <a class="gallery-link" href="${r.largeImageURL}">
         <img
         class = "gallery-image"
         src="${r.webformatURL}" 
         alt="${r.tags}" 
         width="1280"
         height="152"">
           <ul class="gallery-description">
             <li>
             <h3>Likes</h3>
             <p>${r.likes}</p>
             </li>
             <li>
             <h3>Views</h3>
             <p>${r.views}
             </p>
             </li>
             <li>
             <h3>Comments</h3>
             <p>${r.comments}</p>
             </li>
             <li>
             <h3>Downloads</h3>
             <p>${r.downloads}</p>
             </li>
             </ul>       
         </li>`).join("")}function f(o){const r="43135550-1722255432324a30f15700264",s="https://pixabay.com",i="/api/?key=",e=new URLSearchParams({q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),t=`${s}${i}${r}&${e}`;return u.get(t).then(a=>a.data)}const h=document.querySelector(".search-form"),l=document.querySelector(".gallery"),n=document.querySelector(".block");let d=new m(".gallery a");d.on("show.simplelightbox",function(){});d.on("error.simplelightbox",function(o){console.log(o)});h.addEventListener("submit",async o=>{o.preventDefault(),n.classList.remove("hidden");const r=h.elements.query.value.trim();if(r==="")c.error({color:"red",position:"topRight",message:"Fill in the input!"}),n.classList.add("hidden"),l.innerHTML="";else try{const s=await f(r);if(s.total===0)c.error({color:"red",position:"topRight",message:'"Sorry, there are no images matching your search query. Please try again!"'}),o.target.reset(),n.classList.add("hidden"),l.innerHTML="";else{l.innerHTML="";const i=p(s.hits);l.insertAdjacentHTML("beforeend",i),n.classList.add("hidden"),d.refresh(),o.target.reset()}}catch{c.error({maxWidth:"432px",height:"48px",color:"red",position:"topRight",message:"Sorry, a technical error has occurred!"}),n.classList.add("hidden")}});
//# sourceMappingURL=commonHelpers.js.map
