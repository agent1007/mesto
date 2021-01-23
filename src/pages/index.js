let userId;
import "./index.css";
import {
    elements, editButton, popupTypeEdit, profileInfoTitle, profileAvatar,
    profileInfoSubtitle, addButton, infoTitle, infoSubtitle,
    popupTypeAddCard, popupTypeImage, popupFormTypeEdit, popupFormAvatar, validationConfig,
    popupFormTypeAddCard, popupConfirm, popupAvatar, popupInfoTitle, popupInfoSubtitle
} from '../utils/constants.js';

import { UserInfo } from '../components/UserInfo.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { FormValidator } from '../components/FormValidator.js';
import { Api } from '../components/Api.js';
import { PopupConfirm } from '../components/PopupConfirm.js';
const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-19',
    token: 'f552dc2b-43e4-4b2f-bf48-212edce5bbdf'
})

editButton.addEventListener('click', () => {
    editPopupWithForm.open();
    const data = userInfo.getUserInfo();
    popupInfoTitle.value = data.infoTitle;
    popupInfoSubtitle.value = data.infoSubtitle;
    editFormValidator.resetValidation();
});

addButton.addEventListener('click', () => {
    addPopupWithForm.open();
    addFormFalidator.resetValidation();
});

profileAvatar.addEventListener('click', () => {
    avatarPopupForm.open();
    popupAvatarFormFalidator.resetValidation();
});


const popupImage = new PopupWithImage(popupTypeImage);
popupImage.setEventListeners();
const  confirmPopup = new PopupConfirm(popupConfirm);
confirmPopup.setEventListeners();

function createCard(data) {
    
    const card = new Card({
        data,
        handleDeleteButtonClick: (cardId) => {

            confirmPopup.setSubmitAction(() => {
                api.removeCard(cardId)
                .then(() => {
                    card.removeCard();
                    confirmPopup.close();
                })
                .catch(err => console.log(err))
            })
            confirmPopup.open();
        },
        handleLikeClick: (cardId, isLiked) => {
            if(isLiked) {
                api.deleteCardLike(cardId)
                .then((result) => {
                    card.setLikes(result.likes)
                })
                .catch(err => console.log(err))
            } else {
                api.addCardLike(cardId)
                .then((result) => {
                    card.setLikes(result.likes)
                })
                .catch(err => console.log(err))
            }
        },
        userId,  
    }, 
    () => popupImage.openImage(data.link, data.name), 
    '.template-element');

    const cardElement = card.generateCard(userId);
    return cardElement
};

function renderCard(item) {
    const cardElement = createCard(item)
    cardSection.addItem(cardElement);
}

const cardSection = new Section(renderCard, elements);
const userInfo = new UserInfo(profileInfoTitle, profileInfoSubtitle, profileAvatar);

const editPopupWithForm = new PopupWithForm(popupTypeEdit, (data) => {
    editPopupWithForm.setIsLodaing(true);
    api.editProfile(data)
        .then((data) => {
            userInfo.setUserInfo(data.name, data.about);
        })
        .catch(err => console.log(err))
        .finally(() => {
            editPopupWithForm.setIsLodaing(false);
        })
});
editPopupWithForm.setEventListeners();

const addPopupWithForm = new PopupWithForm(
    popupTypeAddCard, 
    (data) => {
        addPopupWithForm.setIsLodaing(true);
    api.addCard(data)
    
        .then(result => {
            cardSection.addItem(createCard(result))
        })
        .catch(err => console.log(err))
        .finally(() => {
            addPopupWithForm.setIsLodaing(false);
        })
});
addPopupWithForm.setEventListeners();

const avatarPopupForm = new PopupWithForm(popupAvatar, (data) => {
    avatarPopupForm.setIsLodaing(true);
    api.changeUserAvatar(data)
        .then((data) => {
            userInfo.setUserInfoAvatar(data.avatar);
        })
        .catch(err => console.log(err))
        .finally(() => {
            avatarPopupForm.setIsLodaing(false);
        })
});
avatarPopupForm.setEventListeners();


const editFormValidator = new FormValidator(validationConfig, popupFormTypeEdit);
editFormValidator.enableValidation();

const addFormFalidator = new FormValidator(validationConfig, popupFormTypeAddCard);
addFormFalidator.enableValidation();

const popupAvatarFormFalidator = new FormValidator(validationConfig, popupFormAvatar);
popupAvatarFormFalidator.enableValidation();

Promise.all([
    api.getUserData(),
    api.getInitialCards() 
])
    
    .then(([{name, about, avatar, _id}, cards]) => {
        userId = _id;
        userInfo.setUserInfo(name, about, avatar);
        userInfo.setUserInfoAvatar(avatar);
        cardSection.renderItems(cards);
    })
