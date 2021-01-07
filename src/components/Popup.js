export class Popup {
    constructor (popupSelector) {
        this._popup = popupSelector;
        this._handleEscClose = this._handleEscClose.bind(this);;
}
// закрытие через Esc
_handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }
// закрытие через клик по оверлею
_handleOverlayClose(evt) {
    if (evt.target === evt.currentTarget) { 
        this.close();
    }
}
// открытие popup
open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose)
}
// закрытие popup
close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
}
// закрытие через иконку
setEventListeners() {
    this._popup.querySelector('.popup__close-button').addEventListener('click', () => this.close()); 
    this._popup.addEventListener('click', (evt) => this._handleOverlayClose(evt)); 
}
}
