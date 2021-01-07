import {Popup} from './Popup.js';
export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._link = popupSelector.querySelector('.popup__image');
        this._name = popupSelector.querySelector('.popup__image-caption');
    }
    openImage(src, alt) {
        this._link.src = src;
        this._name.alt = alt;
        this._name.textContent = alt;
        super.open();
    }
}