import { renderComments, setupComments } from './comments';
const pictureModal = document.querySelector('.big-picture');

const closeModalButton = document.querySelector('.big-picture__cancel');

const bigPictureElement = document.querySelector('.big-picture__img > img');
const likesCountElement = document.querySelector('.likes-count');

const captionElement = document.querySelector('.social__caption');

function showModal(data) {
  pictureModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeyDown);
  setupComments();
  fillModalData(data);
}

function fillModalData({ url, description, likes, comments }) {
  bigPictureElement.src = url;
  bigPictureElement.alt = description;
  likesCountElement.textContent = likes;

  captionElement.textContent = description;
  renderComments(comments);
}
function closeModal() {
  pictureModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeyDown);
}

function onCloseModalButtonClick() {
  closeModal();
}

function onDocumentKeyDown(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
}

closeModalButton.addEventListener('click', onCloseModalButtonClick);
export { showModal };
