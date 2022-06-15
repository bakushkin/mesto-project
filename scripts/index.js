let popup = document.querySelector('.popup');
let closePopupButton = popup.querySelector('.popup__close');
let profile = document.querySelector('.profile');
let profileButtonEdit = profile.querySelector('.profile__button_type_edit');
let profileButtonAdd = profile.querySelector('.profile__button_type_add');
let profileName = profile.querySelector('.profile__heading');
let profileDescription = profile.querySelector('.profile__subheading');
let popupInput = popup.querySelectorAll('.popup__input');
let popupSaveButton = popup.querySelector('.popup__save-button');

function togglePopup() {
    popup.classList.toggle('popup_opened')
}

function closePopup() {
    togglePopup();
}

function openPopup() {
    togglePopup();
    popupInput[0].value = profileName.textContent;
    popupInput[1].value = profileDescription.textContent;
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = popupInput[0].value;
    profileDescription.textContent = popupInput[1].value;
    togglePopup();
}

closePopupButton.addEventListener('click', closePopup);
profileButtonEdit.addEventListener('click', openPopup);
popupSaveButton.addEventListener('submit', formSubmitHandler);