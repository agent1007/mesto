// массив начальных карточек
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
]; 

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
const popupFormAddCard = document.querySelector('div.popup_type_add-card .popup__form');
const closeButtonAddCard = document.querySelector('div.popup_type_add-card .popup__close-button');
const popupForm = document.querySelector('.popup__form_type_add-card');
const popupInfoTitle = document.querySelector('div.popup_type_add-card .popup__info_title');
const popupInfoSubtitle = document.querySelector('div.popup_type_add-card .popup__info_subtitle');

const popupTypeImage = document.querySelector('.popup_type_image');
const closeButtonImage = document.querySelector('div.popup_type_image .popup__close-button-image');

// функция открытия попапа
function openPopup(popup) {
    popup.classList.add('popup_opened');
}

// функция закрытия попапа
function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

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

// функция создания одной карточки
function createCard(data) {
    const elementTemplate = document.querySelector('#element').content;
    const cardElement = elementTemplate.cloneNode(true);
    cardElement.querySelector('.element__image').src = data.link;
    cardElement.querySelector('.element__title').textContent = data.name;
    const likeButton = cardElement.querySelector('.element__button');
    const deleteButton = cardElement.querySelector('.element__delete-button');
    likeButton.addEventListener('click', () => likeButton.classList.toggle('element__button_active'));
    deleteButton.addEventListener('click', function () {
      const element = deleteButton.closest('.element');
      element.remove();
    });
    cardElement.querySelector('.element__image').addEventListener('click', () => openImagePopup(data.link, data.name, data.name));
    return cardElement;
}

//функция открытия popup image
function openImagePopup(src, alt, caption) {
    const popupImage = document.querySelector('.popup__image');
    const popupImageCaption = document.querySelector('.popup__image-caption');
    popupImage.src = src;
    popupImage.alt = alt;
    popupImageCaption.textContent = caption;
    openPopup(popupTypeImage);
}

closeButtonImage.addEventListener('click', () => closePopup(popupTypeImage));

// перебор массива и вывод всех карточек
function addCards(data) {
    const element = createCard(data);
    elements.prepend(element); 
} 
initialCards.forEach(addCards);

// функция добавления новой карточки через кнопку
function addCard(data) {
    addCards(data);
    closePopup(popupTypeAddCard);
}

popupTypeAddCard.addEventListener('submit', event => {
    const data = {
        name: popupInfoTitle.value,
        link: popupInfoSubtitle.value
      }
    event.preventDefault();
    addCard(data);
    popupTypeAddCard.reset();
});




 

