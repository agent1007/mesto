export class UserInfo {
    constructor(elementName, elementInfo) {
        this._elementName = elementName;
        this._elementInfo = elementInfo;
    }
    getUserInfo() {
        return {
            infoTitle: this._elementName.textContent,
            infoSubtitle: this._elementInfo.textContent
        }
    }
    setUserInfo(infoTitle, infoSubtitle) {
        this._elementName.textContent = infoTitle.value;
        this._elementInfo.textContent = infoSubtitle.value;
    }
}