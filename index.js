import{a as u,S as d,i as l}from"./assets/vendor-Bz4lgVUE.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const f="https://pixabay.com/api/",p="50294923-8c76cd495fb5b8c97be727835";function m(r){const o={key:p,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0};return u.get(f,{params:o}).then(i=>i.data)}function g(r){return r.map(({webformatURL:o,largeImageURL:i,tags:s,likes:e,views:t,comments:n,downloads:c})=>`
    <li class="photo-card">
      <a href="${i}" target="_blank">
        <img src="${o}" alt="${s}" loading="lazy" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${e}</p>
        <p><b>Views:</b> ${t}</p>
        <p><b>Comments:</b> ${n}</p>
        <p><b>Downloads:</b> ${c}</p>
      </div>
    </li>
    `).join("")}function h(r,o,i){r.innerHTML=g(o),i.refresh()}function y(r){r.innerHTML=""}function b(r){r.classList.remove("is-hidden")}function L(r){r.classList.add("is-hidden")}const a={formEl:document.querySelector(".form"),galleryEl:document.querySelector(".gallery"),loader:document.querySelector(".loader-container")},S=new d(".gallery a",{captionsData:"alt",captionDelay:250});a.formEl.addEventListener("submit",r=>{r.preventDefault();const o=r.target.elements["search-text"].value.trim();if(!o){l.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(a.loader),m(o).then(i=>{if(i.hits.length===0){l.error({message:"Sorry, there are no images matching your search query.",position:"topRight"}),y(a.galleryEl);return}h(a.galleryEl,i.hits,S)}).catch(i=>{l.error({message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(i)}).finally(()=>{L(a.loader)}),r.target.reset()});
//# sourceMappingURL=index.js.map
