const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

function createThumbnail ({url, description, likes, comments}) {
  const thumbnail = thumbnailTemplate.cloneNode(true);

  thumbnail.querySelector('img').src = url;
  thumbnail.querySelector('img').alt = description;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;

  return thumbnail;
}


export function renderThumbnails (pictures) {
  const fragment = document.createDocumentFragment();
  pictures.forEach((item) => {

    const thumbnail = createThumbnail(item);
    fragment.append(thumbnail);
  });
  container.append(fragment);
}
