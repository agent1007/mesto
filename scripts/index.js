let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let infoTitle = document.querySelector('.popup__info_title');
let infoSubtitle = document.querySelector('.popup__info_subtitle');
let popupForm = document.querySelector('.popup__form');
let profileInfoTitle = document.querySelector('.profile__info-title');
let profileInfoSubtitle = document.querySelector('.profile__info-subtitle');


function showPopup() {
    popup.classList.add('popup_opened');
    infoTitle.value = profileInfoTitle.textContent;
    infoSubtitle.value = profileInfoSubtitle.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened');
}



function submitForm (event) {
 event.preventDefault();
 profileInfoTitle.textContent = infoTitle.value;
 profileInfoSubtitle.textContent = infoSubtitle.value;

 closePopup();
}
 
editButton.addEventListener('click', showPopup); 
closeButton.addEventListener('click', closePopup); 

popupForm.addEventListener('submit', submitForm);
