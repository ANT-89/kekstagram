import { showBigPicture } from './bigPicture';

const renderPictures = (pictures) => {
  const picturesContainer = document.querySelector('.pictures');
  const template = document.querySelector('#picture').content;
  const fragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const pictureElement = template.cloneNode(true);
    const img = pictureElement.querySelector('.picture__img');
    const likes = pictureElement.querySelector('.picture__likes');
    const comments = pictureElement.querySelector('.picture__comments');

    img.src = picture.url;
    likes.textContent = picture.likes;
    comments.textContent = picture.comments.length;

    img.addEventListener('click', () => {
      openBigPicture(picture);
      showBigPicture(picture);
    });

    fragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(fragment);
};

const openBigPicture = (picture) => {
  const bigPicture = document.querySelector('.big-picture');
  const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
  const likesCount = bigPicture.querySelector('.likes-count');
  const commentsCount = bigPicture.querySelector('.social__comment-total-count');
  const socialCaption = bigPicture.querySelector('.social__caption');
  const commentsContainer = bigPicture.querySelector('.social__comments');

  bigPictureImg.src = picture.url;
  likesCount.textContent = picture.likes;
  commentsCount.textContent = picture.comments.length;
  socialCaption.textContent = picture.description;

  commentsContainer.innerHTML = '';
  picture.comments.forEach((comment) => {
    const commentElement = document.createElement('li');
    commentElement.classList.add('social__comment');
    commentElement.innerHTML = `
      <img class="social__picture" src="${comment.avatar}" alt="${comment.name}" width="35" height="35">
      <p class="social__text">${comment.message}</p>
    `;
    commentsContainer.appendChild(commentElement);
  });

  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');

  const closeBigPicture = () => {
    bigPicture.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', onEscKeyPress);
  };

  const onEscKeyPress = (evt) => {
    if (evt.key === 'Escape') {
      closeBigPicture();
    }
  };

  document.addEventListener('keydown', onEscKeyPress);
  bigPicture.querySelector('.big-picture__cancel').addEventListener('click', closeBigPicture);
};

export { renderPictures };
