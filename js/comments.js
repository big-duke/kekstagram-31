const commentTemplate = document
  .querySelector('#comment')
  .content.querySelector('.social__comment');
const container = document.querySelector('.social__comments');

const commentTotalCountElement = document.querySelector(
  '.social__comment-total-count'
);
const commentShownCountElement = document.querySelector(
  '.social__comment-shown-count'
);

const commentsLoaderButton = document.querySelector('.social__comments-loader');

const COMMENTS_TO_FETCH = 5;
let renderedCommentsCount = 0;

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
    commentsLoaderButton.classList.add('hidden');
    renderedCommentsCount = comments.length;
  } else {
    commentsLoaderButton.classList.remove('hidden');
  }

  container.innerHTML = '';
  const fragment = document.createDocumentFragment();
  comments.slice(0, renderedCommentsCount).forEach((item) => {
    const comment = createComment(item);
    fragment.append(comment);
  });
  container.append(fragment);
  commentTotalCountElement.textContent = comments.length;
  commentShownCountElement.textContent = renderedCommentsCount;
}

function resetCommentsCount() {
  renderedCommentsCount = 0;
}
export { renderComments, resetCommentsCount };
