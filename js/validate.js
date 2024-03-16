const REGEXP_HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;

const uploadForm = document.querySelector('.img-upload__form');
const hashtagsElement = document.querySelector('.text__hashtags');

function getHastags(value) {
  return value.trim().split(' ').filter(Boolean);
}

function validateHashtagsCount(value) {
  const hashTags = getHastags(value);
  return hashTags.length <= 5;
}

function validateHashtagsDuplicates(value) {
  const loweraseTags = getHastags(value).map((tag) => tag.toLowerCase());
  const uniqTags = new Set(loweraseTags);
  return uniqTags.size === loweraseTags.length;
}

function validateHashtags(value) {
  const hashtags = getHastags(value);
  return hashtags.every((item) => REGEXP_HASHTAG.test(item));
}

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
}, false);

pristine.addValidator(
  hashtagsElement,
  validateHashtags,
  'Неверно указан хэш-тег',
  1,
  false
);

pristine.addValidator(
  hashtagsElement,
  validateHashtagsCount,
  'Не более 5 хэш-тегов',
  2,
  false
);

pristine.addValidator(
  hashtagsElement,
  validateHashtagsDuplicates,
  'Дублирование хэш-тегов не допускается',
  3,
  false
);

export { pristine };
