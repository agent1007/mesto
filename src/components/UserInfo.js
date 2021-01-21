export class UserInfo {
    constructor(elementName, elementInfo, elementAvatar) {
        this._elementName = elementName;
        this._elementInfo = elementInfo;
        this._elementAvatar = elementAvatar;
    }
    getUserInfo() {
        return {
            infoTitle: this._elementName.textContent,
            infoSubtitle: this._elementInfo.textContent
        }
    }
    setUserInfo(infoTitle, infoSubtitle) {
        this._elementName.textContent = infoTitle;
        this._elementInfo.textContent = infoSubtitle;
    }
    setUserInfoAvatar(link) {
        this._elementAvatar.src = link;
}
}