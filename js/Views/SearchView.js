class SearchView {
  _parentElement = document.querySelector(".search");
  _data;

  _generateMarkup() {
    return `
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
      <img src=${
        this._data.username === "dk999"
          ? "user-img-dk999.8c2d4905.jpg"
          : "user-img-js111.04cb9b52.jpg"
      } alt="" class="user-img" />
    </div>
  </div>`;
  }

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._parentElement.innerHTML = "";
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}

export default new SearchView();
