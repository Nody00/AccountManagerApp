class UserInfoView {
  _parentElement = document.querySelector(".user-info");

  showUserInfoView() {
    this._parentElement.classList.remove("hidden-ty");
  }
  hideUserInfoView() {
    this._parentElement.classList.add("hidden-ty");
  }
}

export default new UserInfoView();
