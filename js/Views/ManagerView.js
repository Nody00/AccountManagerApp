class ManagerView {
  _data;
  _parentElement = document.querySelector(".manager");
  showManagerView() {
    this._parentElement.classList.remove("hidden-tx");
  }
  hideManagerView() {
    this._parentElement.classList.add("hidden-tx");
  }
}

export default new ManagerView();
