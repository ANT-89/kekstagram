const commentList = document.querySelector('.social__comments');
const commentsLoader = document.querySelector('.comments-loader');
const commentCount = document.querySelector('.social__comment-count');

const COMMENTS_PER_PORTION = 5;
let commentsShown = 0;
let comments = [];

const createComment = (comment) => {
  const li = document.createElement('li');
  li.classList.add('social__comment');

  const picture = document.createElement('img');
  picture.classList.add('social__picture');
  picture.src = comment.avatar;
  picture.alt = comment.name;

  const text = document.createElement('p');
  text.classList.add('social__text');
  text.textContent = comment.message;

  li.appendChild(picture);
  li.appendChild(text);

  return li;
};

const renderComments = () => {
  const fragment = document.createDocumentFragment();
  const commentsToShow = comments.slice(commentsShown, commentsShown + COMMENTS_PER_PORTION);

  commentsToShow.forEach((comment) => {
    const commentElement = createComment(comment);
    fragment.append(commentElement);
  });

  commentList.append(fragment);
  commentsShown += commentsToShow.length;

  commentCount.textContent = `${commentsShown} из ${comments.length} комментариев`;

  if (commentsShown >= comments.length) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }
};

const showBigPicture = (data) => {
  comments = data.comments;
  commentsShown = 0;
  commentList.innerHTML = '';
  renderComments();
};

commentsLoader.addEventListener('click', () => {
  renderComments();
});

export { showBigPicture };
