import {getRandomArrayElement, getRandomPositiveInteger} from '../js/util.js';

const NAMES = ['Артём', 'Анна', 'Дмитрий', 'Мария', 'Елена', 'Иван', 'Сергей', 'Ольга'];

const DESCRIPTIONS = [
  'Прекрасный день!',
  'Пейзаж из окна.',
  'Наша дружная компания.',
  'Лучшие моменты.',
  'Собака на прогулке.',
  'Крутой закат.',
  'Путешествие в горы.',
  'Семейное фото.'
];

const COMMENTS_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'Моя бабушка случайно чихнула с фотоаппаратом, и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота.',
  'Лица у людей на фотке перекошены. Как можно было поймать такой неудачный момент?!'
];

const createComment = () => ({
  id: getRandomPositiveInteger(1, 10000),
  avatar: `../img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
  message: getRandomArrayElement(COMMENTS_MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const generateComments = () => {
  const countComments = getRandomPositiveInteger(1, 25);
  return Array.from({length : countComments}, createComment);
};

const createPicture = (i) => ({
  id: i + 1,
  url: `../photos/${getRandomPositiveInteger(1, 25)}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomPositiveInteger(15, 200),
  comments: generateComments(),
});

const generatePictures = () => {
  const countPictures = 25;
  return Array.from({ length: countPictures }, (_, i) => createPicture(i));
};

export {generatePictures};
