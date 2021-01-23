import {Popup} from './Popup.js';
export class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('.popup__form');
        this.button = this._popup.querySelector('.popup__submit-button');
        this._inputList = Array.from(this._form.querySelectorAll('.popup__info'));
    }
    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input => {
          this._formValues[input.name] = input.value;
        });
        return this._formValues;
      } 
    setEventListeners() {
        super.setEventListeners();
        
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit( this._getInputValues());
            this.close();
          });
    }
    close() {
        super.close();
        this._form.reset();
    } 

    setIsLodaing(isLoading) {
      if(isLoading) {
        this.button.textContent = 'Сохранение...';
      } else {
        this.button.textContent = 'Сохранить'
      }
    }

}