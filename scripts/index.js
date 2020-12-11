const popup = document.querySelector('.popup');
const elements = document.querySelector('.elements');

const popupTypeEdit = document.querySelector('.popup_type_edit');
const editButton = document.querySelector('.profile__edit-button');
const popupFormEdit = document.querySelector('div.popup_type_edit .popup__form');
const closeButtonEdit = document.querySelector('div.popup_type_edit .popup__close-button');
const infoTitle = document.querySelector('.popup__info_title');
const infoSubtitle = document.querySelector('.popup__info_subtitle');
const profileInfoTitle = document.querySelector('.profile__info-title');
const profileInfoSubtitle = document.querySelector('.profile__info-subtitle');

const popupTypeAddCard = document.querySelector('.popup_type_add-card');
const addButton = document.querySelector('.profile__add-button');
const closeButtonAddCard = document.querySelector('div.popup_type_add-card .popup__close-button');
const popupForm = document.querySelector('.popup__form_type_add-card');
const popupInfoTitle = document.querySelector('div.popup_type_add-card .popup__info_title');
const popupInfoSubtitle = document.querySelector('div.popup_type_add-card .popup__info_subtitle');


const closeButtonImage = document.querySelector('div.popup_type_image .popup__close-button-image');

//команды для попапа Edit
function openProfilePopup() {
    infoTitle.value = profileInfoTitle.textContent;
    infoSubtitle.value = profileInfoSubtitle.textContent;
}

function submitFormEdit (event) {
    event.preventDefault();
    profileInfoTitle.textContent = infoTitle.value;
    profileInfoSubtitle.textContent = infoSubtitle.value;
    closePopup(popup);
}

editButton.addEventListener('click', openProfilePopup); 
editButton.addEventListener('click', () => openPopup(popupTypeEdit));
closeButtonEdit.addEventListener('click', () => closePopup(popupTypeEdit)); 
popupFormEdit.addEventListener('submit', submitFormEdit);

//команды для попапа AddCard
addButton.addEventListener('click', () => openPopup(popupTypeAddCard)); 
closeButtonAddCard.addEventListener('click', () => closePopup(popupTypeAddCard));

closeButtonImage.addEventListener('click', () => closePopup(popupTypeImage));


// функция создания карточки
function createCard (data) {
    const card = new Card(data, '.template-element');
    const cardElement = card.generateCard();
    elements.prepend(cardElement);
}



// функция добавления новой карточки через кнопку
function addCard(data) {
    createCard (data);
    closePopup(popupTypeAddCard);
}

popupTypeAddCard.addEventListener('submit', event => {
    const data = {
        name: popupInfoTitle.value,
        link: popupInfoSubtitle.value
      }
    event.preventDefault();
    addCard(data);
    popupForm.reset();
});

// импорт Card
import {openPopup, closePopup, popupTypeImage, } from './utils.js';
import {initialCards} from './array-cards.js';
import {Card} from './card.js';

initialCards.forEach((item) => {
    createCard (item);
});



// импорт FormValidator
import {FormValidator} from './FormValidator.js';

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__info',
    submitButtonSelector:  '.popup__submit-button',
    inputInvalidClass: 'popup__info_state_invalid',
    buttonInvalidClass: 'popup__submit-button_invalid'  
}

const popupFormTypeEdit = document.querySelector('.popup__form_type_edit');
const editFormValidator = new FormValidator(validationConfig, popupFormTypeEdit);
editFormValidator.enableValidation();

const popupFormTypeAddCard = document.querySelector('.popup__form_type_add-card');
const addFormFalidator = new FormValidator(validationConfig, popupFormTypeAddCard);
addFormFalidator.enableValidation();




