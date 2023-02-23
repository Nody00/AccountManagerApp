class LoginView {
  _form = document.querySelector(".log-in-form");
  _parentElement = document.querySelector(".log-in-container");
  _usernameInput = document.querySelector(".input-username");
  _passwordInput = document.querySelector(".input-password");
  _errorContainer = document.querySelector(".error-container");
  addHandlerSubmit(handler) {
    this._form.addEventListener("submit", function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }
  hideLoginView() {
    this._parentElement.classList.add("hidden-tx");
  }
  showLoginView() {
    this._parentElement.classList.remove("hidden-tx");
  }
  _generateRenderError() {
    return `<div class="error-login">Account not found</div>`;
  }
  render() {
    const markup = this._generateRenderError();
    this.clear();
    this._errorContainer.insertAdjacentHTML("beforeend", markup);
  }
  clear() {
    this._usernameInput.value = "";
    this._passwordInput.value = "";
    this._errorContainer.innerHTML = "";
  }
}

export default new LoginView();
