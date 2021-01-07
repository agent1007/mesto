import "./index.css";
import {
    elements, editButton, popupTypeEdit, profileInfoTitle,
    profileInfoSubtitle, infoTitle, infoSubtitle, addButton,
    popupTypeAddCard, popupTypeImage, popupFormTypeEdit, validationConfig,
    popupFormTypeAddCard
} from '../utils/constants.js';
import { initialCards } from '../utils/constants.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { FormValidator } from '../components/FormValidator.js';

editButton.addEventListener('click', () => {
    editPopupWithForm.open();
    editFormValidator.resetValidation();
}
);

addButton.addEventListener('click', () => {
    addPopupWithForm.open();
    addFormFalidator.resetValidation();
});

const userInfo = new UserInfo(profileInfoTitle, profileInfoSubtitle);

const editPopupWithForm = new PopupWithForm(popupTypeEdit, () => {
    userInfo.setUserInfo(infoTitle, infoSubtitle);
});
editPopupWithForm.setEventListeners();

const popupImage = new PopupWithImage(popupTypeImage);
popupImage.setEventListeners();

function createCard(item) {
    const card = new Card(item, () => popupImage.openImage(item.link, item.name), '.template-element');
    const cardElement = card.generateCard();
    return cardElement
}
function renderCard(item) {
    const cardElement = createCard(item)
    cardSection.addItem(cardElement);
}

const cardSection = new Section(initialCards, renderCard, elements);
cardSection.renderItems();

const addPopupWithForm = new PopupWithForm(popupTypeAddCard, (data) => {
    renderCard(data);
});
addPopupWithForm.setEventListeners();

const editFormValidator = new FormValidator(validationConfig, popupFormTypeEdit);
editFormValidator.enableValidation();

const addFormFalidator = new FormValidator(validationConfig, popupFormTypeAddCard);
addFormFalidator.enableValidation();