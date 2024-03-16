import { pristine } from './validate';

const imageFileInput = document.querySelector('.img-upload__input');
const imageUploadDialog = document.querySelector('.img-upload__overlay');
const uploadForm = document.querySelector('.img-upload__form');
const uploadCancelButton = document.querySelector('.img-upload__cancel');

function onFileInputChange() {
  showModal();
}

function showModal() {
  imageUploadDialog.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeyDown);
  uploadForm.addEventListener('submit', onSubmitForm);
}

function closeModal() {
  imageUploadDialog.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeyDown);
  uploadForm.removeEventListener('submit', onSubmitForm);
  imageFileInput.value = '';
  uploadForm.reset();
  pristine.reset();
}

function onDocumentKeyDown(e) {
  if (e.key === 'Escape') {
    if (document.activeElement.closest('.img-upload__field-wrapper')) {
      return;
    }
    closeModal();
  }
}
function onCloseModalClick() {
  closeModal();
}

function onSubmitForm(e) {
  e.preventDefault();
  pristine.validate();
}

export function setupUploadForm() {
  imageFileInput.addEventListener('change', onFileInputChange);
  uploadCancelButton.addEventListener('click', onCloseModalClick);
}
