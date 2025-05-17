import{a as u,S as p,i as l}from"./assets/vendor-Bz4lgVUE.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const d="https://pixabay.com/api/",f="50294923-8c76cd495fb5b8c97be727835";function m(i){const t={key:f,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return u.get(d,{params:t}).then(o=>o.data)}function g(i){return i.map(({webformatURL:t,largeImageURL:o,tags:a,likes:e,views:r,comments:s,downloads:c})=>`
    <li class="photo-card">
      <a href="${o}" target="_blank">
        <img src="${t}" alt="${a}" loading="lazy" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${e}</p>
        <p><b>Views:</b> ${r}</p>
        <p><b>Comments:</b> ${s}</p>
        <p><b>Downloads:</b> ${c}</p>
      </div>
    </li>
    `).join("")}const n={formEl:document.querySelector(".form"),galleryEl:document.querySelector(".gallery"),loader:document.querySelector(".loader-container")},h=new p(".gallery a",{captionsData:"alt",captionDelay:250});n.formEl.addEventListener("submit",i=>{i.preventDefault();const t=i.target.elements["search-text"].value.trim();if(!t){l.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}n.loader.classList.remove("is-hidden"),m(t).then(o=>{if(o.hits.length===0){l.error({message:"Sorry, there are no images matching your search query.",position:"topRight"}),n.galleryEl.innerHTML="";return}const a=g(o.hits);n.galleryEl.innerHTML=a,h.refresh()}).catch(o=>{l.error({message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(o)}).finally(()=>{n.loader.classList.add("is-hidden")}),i.target.reset()});
//# sourceMappingURL=index.js.map
