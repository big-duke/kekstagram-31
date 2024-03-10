const pictureModal = document.querySelector('.big-picture');

const closeModalButton = document.querySelector('.big-picture__cancel');

const bigPictureElement = document.querySelector('.big-picture__img > img');
const likesCountElement = document.querySelector('.likes-count');

const captionElement = document.querySelector('.social__caption');

const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const container = document.querySelector('.social__comments');

const commentTotalCountElement = document.querySelector('.social__comment-total-count');
const commentShownCountElement = document.querySelector('.social__comment-shown-count');

const commentLoaderButton = document.querySelector('.social__comments-loader');

const COMMENTS_TO_FETCH = 5;
let renderedCommentsCount = 0;
let comments = [];

function showModal(data) {
  pictureModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeyDown);

  bigPictureElement.src = data.url;
  bigPictureElement.alt = data.description;
  likesCountElement.textContent = data.likes;
  captionElement.textContent = data.description;

  comments = data.comments;

  renderComments(comments);
}

function closeModal() {
   renderedCommentsCount = 0;
  pictureModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeyDown);
}
function createComment(data) {
  const comment = commentTemplate.cloneNode(true);

  comment.querySelector('img').src = data.avatar;
  comment.querySelector('img').alt = data.name;
  comment.querySelector('.social__text').textContent = data.message;

  return comment;
}

function renderComments(comments) {
  renderedCommentsCount += COMMENTS_TO_FETCH;

  if (renderedCommentsCount >= comments.length) {
    commentLoaderButton.classList.add('hidden');
    renderedCommentsCount = comments.length;
  } else {
    commentLoaderButton.classList.remove('hidden');
  }

  container.innerHTML = '';
  const fragment = document.createDocumentFragment();
  comments.slice(0,renderedCommentsCount).forEach((item) => {
    const comment = createComment(item);
    fragment.append(comment);
  });
  container.append(fragment);
  commentTotalCountElement.textContent = comments.length;
  commentShownCountElement.textContent = renderedCommentsCount;
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
  renderComments(comments);
}


closeModalButton.addEventListener('click', onCloseModalButtonClick);
commentLoaderButton.addEventListener('click', onCommentLoaderClick);
export { showModal };
