import "./index.css";

import {popup, elements, editButton, popupTypeEdit, profileInfoTitle, 
    profileInfoSubtitle, infoTitle, infoSubtitle, addButton,
    popupTypeAddCard, popupTypeImage, popupFormTypeEdit, validationConfig, 
    popupFormTypeAddCard} from '../components/utils.js';
    
import {initialCards} from '../components/array-cards.js';

import {Popup} from '../components/Popup.js';
const typePopupEdit = new Popup(popupTypeEdit);
typePopupEdit.setEventListeners();
editButton.addEventListener('click', () => editPopupWithForm.open());
const typePopupAddCard = new Popup(popupTypeAddCard);
addButton.addEventListener('click', () => typePopupAddCard.open()); 
typePopupAddCard.setEventListeners();

import {UserInfo} from '../components/UserInfo.js';
const editPopupWithForm = new PopupWithForm(popupTypeEdit, () => {
    const userInfo = new UserInfo(profileInfoTitle, profileInfoSubtitle);
    userInfo.setUserInfo(infoTitle, infoSubtitle);
    const popupSubmit = new Popup(popup);
    popupSubmit.close();
});
editPopupWithForm.setEventListeners();

import {PopupWithImage} from '../components/PopupWithImage.js';
const popupImage = new PopupWithImage (popupTypeImage);
popupImage.setEventListeners();

import {Card} from '../components/card.js';
function createCard(item) {
    const card = new Card(item, () => popupImage.openImage(item.link, item.name), '.template-element');
    const cardElement = card.generateCard();
    cardSection.addItem(cardElement); 
}

import {Section} from '../components/Section.js';
const cardSection = new Section (initialCards, createCard, elements);
cardSection.renderItems();

import {PopupWithForm} from '../components/PopupWithForm.js';
const addPopupWithForm = new PopupWithForm(popupTypeAddCard, (data) => {
    createCard (data);
    typePopupAddCard.close(popup);
    addFormFalidator.resetValidation();
} );
addPopupWithForm.setEventListeners();

import {FormValidator} from '../components/FormValidator.js';

const editFormValidator = new FormValidator(validationConfig, popupFormTypeEdit);
editFormValidator.enableValidation();

const addFormFalidator = new FormValidator(validationConfig, popupFormTypeAddCard);
addFormFalidator.enableValidation();