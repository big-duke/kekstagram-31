import { renderComments, resetCommentsCount } from './comments';

const pictureModal = document.querySelector('.big-picture');

const closeModalButton = document.querySelector('.big-picture__cancel');

const bigPictureElement = document.querySelector('.big-picture__img > img');
const likesCountElement = document.querySelector('.likes-count');

const captionElement = document.querySelector('.social__caption');


const commentsLoaderButton = document.querySelector('.social__comments-loader');


let pictureComments = [];

function showModal(data) {
  pictureModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeyDown);

  bigPictureElement.src = data.url;
  bigPictureElement.alt = data.description;
  likesCountElement.textContent = data.likes;
  captionElement.textContent = data.description;

  pictureComments = data.comments;

  renderComments(pictureComments);
}

function closeModal() {
  resetCommentsCount();
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

function onCommentLoaderClick() {
  renderComments(pictureComments);
}


closeModalButton.addEventListener('click', onCloseModalButtonClick);
commentsLoaderButton.addEventListener('click', onCommentLoaderClick);
export { showModal };
