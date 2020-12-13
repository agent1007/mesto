export const popupImage = document.querySelector('.popup__image');
export const popupImageCaption = document.querySelector('.popup__image-caption');
export const popupTypeImage = document.querySelector('.popup_type_image');

//функция открытия popup image
export function openImagePopup(src, alt) {
    popupImage.src = src;
    popupImage.alt = alt;
    popupImageCaption.textContent = alt;
    openPopup(popupTypeImage);
}
// функция закрытия попапа через Escape
function closeByEsc (evt) {
    if (evt.key === 'Escape') {
        const popup = document.querySelector('.popup_opened');
        closePopup(popup);
  } 
}
// функция закрытия попапа через клик по оверлею
function closeByOverlayClick (evt) {
    if (evt.target === evt.currentTarget) { 
        closePopup(evt.target); 
    } 
}

// функция открытия попапа
function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEsc)
    popup.addEventListener('mousedown', closeByOverlayClick)
}
// функция закрытия попапа
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEsc)
    popup.removeEventListener('mousedown', closeByOverlayClick)
}

export {openPopup, closePopup};