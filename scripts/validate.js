// функция открытия ошибки
function showError(form, input, config) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;
    input.classList.add(config.inputInvalidClass);
}
// функция закрытия ошибки
function hideError(form, input, config) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = '';
    input.classList.remove(config.inputInvalidClass);
}
// функция выбора открытия/закрытия
function checkInputValidity (form, input, config) {
    if (!input.validity.valid) {
        showError (form, input, config);
    } else {
        hideError (form, input, config);
    }
}
// функция состояния кнопки
function setButtonState (button, isActive, config) {
    if (isActive) {
        button.classList.remove(config.buttonInvalidClass);
        button.disabled = false;
    } else {
        button.classList.add(config.buttonInvalidClass);
        button.disabled = true; 
    }
}
// функция сброса ошибок
function resetValidation(form, config) {
    const inputsList = form.querySelectorAll(config.inputSelector);
    console.log(form);
    inputsList.forEach((form, input, config) => {
        hideError (form, input, config);
    })
}

function setEventListeners (form, config) {
    const inputsList = form.querySelectorAll(config.inputSelector);
    const submitButton = form.querySelector(config.submitButtonSelector);
    inputsList.forEach((input) => {
        input.addEventListener('input', () => {
            checkInputValidity (form, input, config);
            setButtonState (submitButton, form.checkValidity(), config)
        });
    })
}
// функция включеня проверки
function enableValidation (config) {
    const forms = document.querySelectorAll(config.formSelector);
    forms.forEach((form) => {
        setEventListeners (form, config);
        form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        })
        const submitButton = form.querySelector(config.submitButtonSelector);
        setButtonState (submitButton, form.checkValidity(), config);       
    })
}
// конфигурация классов
const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__info',
    submitButtonSelector:  '.popup__submit-button',
    inputInvalidClass: 'popup__info_state_invalid',
    buttonInvalidClass: 'popup__submit-button_invalid'  
}

enableValidation(validationConfig);