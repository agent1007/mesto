export class Api {
    constructor ({baseUrl, token}) {
        this._baseUrl = baseUrl;
        this._token = token
    };

    _requestResult(res) {
      if (res.ok) {
      return res.json();
     }
     return Promise.reject(`Что-то пошло не так: ${res.status}`);
    }

    getInitialCards() {
      return fetch (`${this._baseUrl}/cards`, {
        headers: {
          authorization: this._token,
        }
      })
      .then((res) => this._requestResult(res))
    }

    getUserData() {
      return fetch (`${this._baseUrl}/users/me`, {
        headers: {
          authorization: this._token,
        }
      })
      .then((res) => this._requestResult(res))
    }

    addCard(data) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: data.name,
              link: data.link
            })
          })
          .then((res) => this._requestResult(res))
    }

    removeCard(id) {
      return fetch(`${this._baseUrl}/cards/${id}`, {
        method: 'DELETE',
        headers: {
            authorization: this._token,
        }
      })
      .then((res) => this._requestResult(res))
    }
    

    addCardLike(id){
      return fetch(`${this._baseUrl}/cards/likes/${id}`, {
          method: 'PUT',
          headers: {
              authorization: this._token,
          },
        })
        .then((res) => this._requestResult(res))
    }

    deleteCardLike(id){
      return fetch(`${this._baseUrl}/cards/likes/${id}`, {
          method: 'DELETE',
          headers: {
              authorization: this._token,
          },
        })
        .then((res) => this._requestResult(res))
    }

    editProfile(data) {
      return fetch(`${this._baseUrl}/users/me`, {
          method: 'PATCH',
          headers: {
              authorization: this._token,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: data.name,
            about: data.job
          })
        })
        .then((res) => this._requestResult(res))
  }

    changeUserAvatar(data) {
      return fetch(`${this._baseUrl}/users/me/avatar`, {
          method: 'PATCH',
          headers: {
              authorization: this._token,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            avatar: data.link
          })
        })
        .then((res) => this._requestResult(res))
  }

}