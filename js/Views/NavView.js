class NavView {
  _parentElement = document.querySelector(".main-nav");

  _generateMarkup() {
    return `
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
  <a href="#" class="logout-btn">Log Out</a>`;
  }

  render() {
    const markup = this._generateMarkup();
    this._parentElement.innerHTML = "";
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}

export default new NavView();
