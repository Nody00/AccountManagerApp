import * as model from "../Model";

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
        ><a href="#" class="nav-btn ${
          model.state.darkMode && "nav-btn-dark"
        } btn-dashboard">Dashboard</a>
      </li>
      <li>
        <ion-icon name="document-text-outline" class="nav-icon"></ion-icon
        ><a href="#" class="nav-btn ${
          model.state.darkMode && "nav-btn-dark"
        }  btn-overview">Overview</a>
      </li>
      <li>
        <ion-icon name="help-outline" class="nav-icon"></ion-icon
        ><a href="#" class="nav-btn ${
          model.state.darkMode && "nav-btn-dark"
        } btn-info">Information</a>
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
  addHandlerNav(handler) {
    this._parentElement.addEventListener("click", (e) => {
      handler(e.target);
    });
  }
}

export default new NavView();
