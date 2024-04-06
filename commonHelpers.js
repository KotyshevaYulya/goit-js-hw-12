import{a as v,S as q,i as l}from"./assets/vendor-6e0bf343.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();function b(r){return r.map(e=>`<li class = "gallery-item">
         <a class="gallery-link" href="${e.largeImageURL}">
         <img
         loading="lazy"
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
         </li>`).join("")}async function g(r,e){const i="https://pixabay.com/api/?key=",n={key:"43135550-1722255432324a30f15700264",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e};return(await v.get(i,{params:n})).data}const p=document.querySelector(".search-form"),f=document.querySelector(".gallery"),m=document.querySelector(".js-btn-load"),y=document.querySelector(".block");let a=1,L=0;const P=15;let c="",d=new q(".gallery a");d.on("show.simplelightbox",function(){});d.on("error.simplelightbox",function(r){console.log(r)});m.addEventListener("click",M);p.addEventListener("submit",async r=>{if(r.preventDefault(),S(),c=p.elements.query.value.trim(),f.innerHTML="",a=1,!c)l.error({color:"red",position:"topRight",message:"Fill in the input!"}),s(),h();else try{const e=await g(c,a);e.total!==0?(L=Math.ceil(e.totalHits/P),w(e.hits),s(),d.refresh(),r.target.reset(),x()):(l.error({color:"red",position:"topRight",message:'"Sorry, there are no images matching your search query. Please try again!"'}),r.target.reset(),s(),h())}catch{l.error({maxWidth:"432px",height:"48px",color:"red",position:"topRight",message:"Sorry, a technical error has occurred!"}),s()}});function w(r){const e=b(r);f.insertAdjacentHTML("beforeend",e)}async function M(){S(),a+=1;const r=await g(c,a);w(r.hits),x(),s();const i=document.querySelector(".gallery li").getBoundingClientRect().height;window.scrollBy({top:i,left:i,behavior:"smooth"}),d.refresh()}function x(){a>=L?(l.error({maxWidth:"432px",height:"48px",color:"aquamarine",position:"topRight",message:"We're sorry, but you've reached the end of search results."}),h()):R()}function S(){y.classList.remove("hidden")}function s(){y.classList.add("hidden")}function R(){m.classList.remove("hidden")}function h(){m.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
