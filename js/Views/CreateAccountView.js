class CreateAccountView {
  _form = document.querySelector(".create-account-form");
  _parentElement = document.querySelector(".create-container");
  _fullNameInput = document.querySelector(".input-fullName");
  _emailInput = document.querySelector(".input-email");
  _phoneInput = document.querySelector(".input-phone");
  _cityInput = document.querySelector(".input-city");
  _streetInput = document.querySelector(".input-street");
  _newUsernameInput = document.querySelector(".input-newUsername");
  _password1Input = document.querySelector(".input-password1");
  _password2Input = document.querySelector(".input-password2");
  _errorContainer = document.querySelector(".create-error-container");
  addHandlerCreate(handler) {
    this._form.addEventListener("submit", function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);

      handler(data);
    });
  }
  hideCreateView() {
    this._parentElement.classList.add("hidden-ty");
  }
  showCreateView() {
    this._parentElement.classList.remove("hidden-ty");
  }
  _generateRenderError() {
    return `<div class="error-create">Passwords do not match</div>`;
  }
  renderError() {
    const markup = this._generateRenderError();
    this._errorContainer.innerHTML = "";
    this._errorContainer.insertAdjacentHTML("beforeend", markup);
  }
  clear() {
    this._fullNameInput.value = "";
    this._emailInput.value = "";
    this._phoneInput.value = "";
    this._cityInput.value = "";
    this._streetInput.value = "";
    this._newUsernameInput.value = "";
    this._password1Input.value = "";
    this._password2Input.value = "";
    this._errorContainer.innerHTML = "";
  }
}

export default new CreateAccountView();
