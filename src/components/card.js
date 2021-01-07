export class Card {
    constructor(data, handleCardClick, templateSelector) {
        this._link = data.link;
        this._name = data.name;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._handleCardClickHandler = this._handleCardClickHandler;
        
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
        this._element.querySelector('.element__button').addEventListener('click', (evt) => {
            evt.target.classList.toggle('element__button_active');
        });
    }
    _handleDeleteButton() {
        this._element.querySelector('.element__delete-button').addEventListener('click', () => {
            this._element.remove();
            this._element = null;
        });
    }
    _handleCardClickHandler() {
        this._cardImage.addEventListener('click', () => this._handleCardClick(this._link, this._name));
    }
    _setEventListeners() {
        this._handleLikeImage();
        this._handleDeleteButton();
        this._handleCardClickHandler();
    }
    generateCard() {
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector('.element__image')
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._element.querySelector('.element__title').textContent = this._name;
        this._setEventListeners()
        return this._element;
    } 
}