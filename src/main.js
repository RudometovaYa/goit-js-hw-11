import './css/styles.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

import { fetchImages } from './js/pixabay-api.js';
import {
  createMarkup,
  renderGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  formEl: document.querySelector('.form'),
  galleryEl: document.querySelector('.gallery'),
  loader: document.querySelector('.loader-container'),
};
/* ініціалізуємо  */
const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();
  const userValue = e.target.elements['search-text'].value.trim();

  if (!userValue) {
    iziToast.warning({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
    return;
  }
  showLoader(refs.loader);

  fetchImages(userValue)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message: 'Sorry, there are no images matching your search query.',
          position: 'topRight',
        });
        clearGallery(refs.galleryEl);
        return;
      }
      renderGallery(refs.galleryEl, data.hits, gallery);
    })
    .catch(error => {
      iziToast.error({
        message: 'Something went wrong. Please try again later.',
        position: 'topRight',
      });
      console.error(error);
    })
    .finally(() => {
      hideLoader(refs.loader);
    });

  e.target.reset();
});
