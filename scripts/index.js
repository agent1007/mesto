let popup = document.querySelector('.popup');
let editButton = document.querySelector('.edit-button');
let closeButton = document.querySelector('.close-button');
let infoTitle = document.querySelector('.popup__info-title');
let infoSubtitle = document.querySelector('.popup__info-subtitle');
let popupForm = document.querySelector('.popup__form');
let profileInfoTitle = document.querySelector('.profile__info-title');
let profileInfoSubtitle = document.querySelector('.profile__info-subtitle');


function showPopup() {
    popup.classList.add('popup_opened');
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', showPopup); 
closeButton.addEventListener('click', closePopup); 

function submitForm (event) {
 event.preventDefault();
 profileInfoTitle.textContent = infoTitle.value;
 profileInfoSubtitle.textContent = infoSubtitle.value;

 closePopup();
}
 
popupForm.addEventListener('submit', submitForm);
