class ManagerView {
  _data;
  _parentElement = document.querySelector(".manager");
  _btnLogOut = document.querySelector(".logout-btn");
  showManagerView() {
    this._parentElement.classList.remove("hidden-tx");
  }
  hideManagerView() {
    this._parentElement.classList.add("hidden-tx");
  }
  addHandlerLogOut(handler) {
    this._btnLogOut.addEventListener("click", function () {
      handler();
    });
  }

  _generateMarkup() {
    return `
  <div class="main-nav">
    <div>
      <div class="logo-container">
        <ion-icon name="globe-outline" class="logo"></ion-icon>
      </div>
      <ul class="nav-list">
        <li>
          <ion-icon name="albums-outline" class="nav-icon"></ion-icon
          ><a href="#" class="nav-btn">Dashboard</a>
        </li>
        <li>
          <ion-icon name="document-text-outline" class="nav-icon"></ion-icon
          ><a href="#" class="nav-btn">Overview</a>
        </li>
        <li>
          <ion-icon name="help-outline" class="nav-icon"></ion-icon
          ><a href="#" class="nav-btn">Information</a>
        </li>
        <li>
          <ion-icon name="options-outline" class="nav-icon"></ion-icon
          ><a href="#" class="nav-btn">Settings</a>
        </li>
      </ul>
    </div>
    <a href="#" class="logout-btn">Log Out</a>
  </div>
  <div class="search">
    <div class="date-and-input-box">
      <div class="current-date">12 Aug 2022,Tuesday</div>
      <input
        type="text"
        name=""
        id=""
        placeholder="&#128269 Search your invoices"
        class="search-input"
      />
    </div>
    <div class="user-and-img-box">
      <a href="#"><ion-icon name="chatbox-ellipses-outline" class="user-icons"></ion-icon>
    </a>
      <a href="#"><ion-icon name="notifications-outline" class="user-icons notification"></ion-icon>
      </a>
      <p class="user-name">${this._data.username}</p>
      <div class="user-img-box">
        <img src="user-photo-1.fe375944.jpg" alt="" class="user-img" />
      </div>
    </div>
    </div>`;
  }
  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}

export default new ManagerView();
