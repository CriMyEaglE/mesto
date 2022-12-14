export const editButton = document.querySelector('.profile__edit-button');
export const addButton = document.querySelector('#addButton');
export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__description');
export const addForm = document.querySelector('#addFormPopup');
export const photoName = addForm.querySelector('#title-input');
export const photoLink = addForm.querySelector('#url-input');
export const cards = document.querySelector('.cards');
export const editForm = document.querySelector('#editFormPopup');
export const inputName = editForm.querySelector('#name-input');
export const inputJob = editForm.querySelector('#job-input');
export const fullscreenImagePopup = document.querySelector('#fullscreenImagePopup');
export const avatar = document.querySelector('.profile__avatar');
export const avatarPopup = document.querySelector('#avatarPopup');
export const avatarLink = avatarPopup.querySelector('#url-input');
export const popupImage = fullscreenImagePopup.querySelector('.fullscreen__image');
export const popupTitle = fullscreenImagePopup.querySelector('.fullscreen__title');
export const popups = document.querySelectorAll('.popup');
export const deleteForm = document.querySelector('#deletePopup');
export const validationConfigurations = {
  formSelector: '.edit-form',
  inputSelector: '.edit-form__input-form',
  submitButtonSelector: '.edit-form__save-button',
  inactiveButtonClass: 'edit-form__save-button_disabled',
  inputErrorClass: 'edit-form__input-form_type_error',
  errorClass: 'edit-form__input-error_active'
}