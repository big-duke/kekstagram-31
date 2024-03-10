const COMMENTS_TO_FETCH = 5;
let renderedCommentsCount = 0;

const commentTemplate = document
  .querySelector('#comment')
  .content.querySelector('.social__comment');
const container = document.querySelector('.social__comments');
const commentCountContainerElement = document.querySelector('.social__comment-count');
const commentLoaderButton = document.querySelector('.social__comments-loader');


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
}

function createComment(data) {
  const comment = commentTemplate.cloneNode(true);

  comment.querySelector('img').src = data.avatar;
  comment.querySelector('img').alt = data.name;
  comment.querySelector('.social__text').textContent = data.message;

  return comment;
}



export {renderComments};
