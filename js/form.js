const fileField = document.querySelector('#upload-file');
const cancelButton = document.querySelector('#upload-cancel');
const overlay = document.querySelector('.img-upload__overlay');
const body = document.body;

const showModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onEscKeyPress);
};

fileField.addEventListener('change', () => {
  showModal();
})

const hideModal = () => {
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyPress);
  document.querySelector('.img-upload__form').reset();
};

cancelButton.addEventListener('click', () => {
  hideModal();
})

const onEscKeyPress = (evt) => {
  if (evt.key === 'Escape') {
    hideModal();
  }
};


const form = document.querySelector('.img-upload__form');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'p',
  errorTextClass: 'img-upload__field-wrapper--error',
});

const hashtagField = document.querySelector('.text__hashtags');

const validateTags = (value) => {
  const tags = value.split(' ').filter(Boolean);
  if (tags.length > 5) return false;
  return tags.every((tag) => /^#[A-Za-z0-9]{1,19}$/.test(tag));
};

pristine.addValidator(
  hashtagField,
  validateTags,
  'Неправильно заполнены хэштеги'
);

export {showModal};
