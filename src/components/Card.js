export class Card {
    constructor({data, handleDeleteButtonClick, handleLikeClick, userId}, handleCardClick, templateSelector) {
        this._link = data.link;
        this._name = data.name;
        this._id = data._id;
        this._handleLikeClick = handleLikeClick;
        this._handleDeleteButtonClick = handleDeleteButtonClick;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick; 
        this._userId = userId;
        this._likes = data.likes;
        this._ownerId = data.owner._id;
    }
    _handleLikeImage() {
        this._element.querySelector('.element__button').addEventListener('click', () => this._handleLikeClick(this._id, this._isLiked()));
    }
    _isLiked() {
        if (this._element.querySelector('.element__button').classList.contains('element__button_active')) {
            return true
        }
        return false
    }
    _isCardLikedByThisUser() {
        for (let i = 0; i < this._likes.length; i ++) {
            if (this._likes[i]._id === this._userId) {
                return true
            }
            return false
        }
    }

    _isCardLikedByThisUser() {
        for (let i = 0; i < this._likes.length; i ++) {
            if (this._likes[i]._id === this._userId) {
                        return true
                    }
                    
                } return false
             }



    setLikes(arrayLikes) {
        const cardsLikesButton = this._element.querySelector('.element__button');
        this._element.querySelector('.element__like-numbers').textContent = arrayLikes.length;
        this._likes = arrayLikes;
        if (this._isCardLikedByThisUser()) {
            cardsLikesButton.classList.add('element__button_active')
        } else {
            cardsLikesButton.classList.remove('element__button_active')
        }
    }

    _stateButtonDelete(id) {
        if(this._ownerId !== id) {
            this._element.querySelector('.element__delete-button').style.display = 'none';
        } 
    }










    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);
        return cardElement;
    }
    _handleDeleteButton() {
        this._element.querySelector('.element__delete-button').addEventListener('click', () => this._handleDeleteButtonClick(this._id));
    }
    
    getId() {
        return this._id;
    }
    removeCard() {
        this._element.remove();
            this._element = null;
    }
    _handleCardClickHandler() {
        this._cardImage.addEventListener('click', () => this._handleCardClick(this._link, this._name));
    }
    _setEventListeners(id) {
        this._handleLikeImage();
        this._handleDeleteButton();
        this._handleCardClickHandler();
        this._stateButtonDelete(id);
        
    }
    generateCard(id) {
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector('.element__image')
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._element.querySelector('.element__title').textContent = this._name;
        this._setEventListeners(id)
        this.setLikes(this._likes);
        
        return this._element;
    } 

    
}