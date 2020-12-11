import {openImagePopup} from './utils.js';

export class Card {
    constructor(data, templateSelector) {
        this._link = data.link;
        this._name = data.name;
        this._templateSelector = templateSelector;
    }

    _getTemplate() {
        const cardElement = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);
        return cardElement;
    }

    _handleLikeImage() {
        this._element.querySelector('.element__button').addEventListener('click', () => {
            this._element.querySelector('.element__button').classList.toggle('element__button_active');
        });
      }
    
    _handleDeleteButton() {
        this._element.querySelector('.element__delete-button').addEventListener('click',  () => {
            const element = this._element.querySelector('.element__delete-button').closest('.element');
            element.remove();
            this._element = null;
          });
    }

    _handleOpenImagePopup() {
        this._element.querySelector('.element__image').addEventListener('click', () => openImagePopup(this._link, this._name));
    }

    generateCard() {
        this._element = this._getTemplate();
        this._handleLikeImage();
        this._handleDeleteButton();
        this._handleOpenImagePopup();
        this._element.querySelector('.element__image').src = this._link;
        this._element.querySelector('.element__title').textContent = this._name;
        return this._element;
    } 
}


