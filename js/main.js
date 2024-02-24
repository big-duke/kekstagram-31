/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

const PHOTOS_COUNT = 25;
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const NAMES = [
  'Виталий',
  'Артём',
  'Валерий',
  'Кузьма',
  'Артур',
  'Платон',
  'Александр',
  'Тимур',
  'Алексей',
  'Арсений',
  'Олег',
  'Герасим',
  'Антон',
  'Василий',
];
function createIdGenerator () {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}
const generateCommentId = createIdGenerator();
const generatePhotoId = createIdGenerator();
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
const getRandomArrayElement = (elements) =>
  elements[getRandomInteger(0, elements.length - 1)];

function createMessage() {
  const messagesCount = getRandomInteger(1, 2);
  let message = '';
  for (let i = 1; i <= messagesCount; i++) {
    message += getRandomArrayElement(MESSAGES);
  }
  return message;
}

function createComment() {
  const comment = {
    id: generateCommentId(),
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: createMessage(),
    name: getRandomArrayElement(NAMES),
  };
  return comment;
}


function createPhoto() {
  const commentsCount = getRandomInteger(0, 30);
  const id = generatePhotoId();
  const photo = {
    id,
    url: `photos/${id}.jpg`,
    description: 'Описание фотографии',
    likes: getRandomInteger(15, 200),
    comments: Array.from({ length: commentsCount }, createComment),
  };
  return photo;
}

const photoData = Array.from({length:PHOTOS_COUNT},createPhoto);
console.log(photoData);