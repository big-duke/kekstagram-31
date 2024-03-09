import {showModal} from './modal';
const container = document.querySelector('.pictures');

function renderGallery(pictures) {
  container.addEventListener('click', (e) => {
    const thumbnail = e.target.closest('a.picture[data-id]');
    if (!thumbnail) {
      return;
    }

    const id = Number(thumbnail.dataset.id);
    const pictureData = pictures.find((item) => item.id === id);
    showModal(pictureData);
  });
}

export { renderGallery };
