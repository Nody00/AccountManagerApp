class ContentView {
  _parentElement = document.querySelector(".content");
  _data;
  showContentView() {
    this._parentElement.classList.remove("hidden-ty");
  }
  hideContentView() {
    this._parentElement.classList.add("hidden-ty");
  }
  _generateMovements() {
    return this._data.movements.forEach(
      (mov) => `
    <div class="movement">
      <div class="movement-id">${mov.id}</div>
      <div class="movement-date">${mov.date}</div>
      <div class="movement-amount">${mov.amount}</div>
      <div class="movement-type transfer">${mov.type}}</div>
    </div>`
    );
  }
  _generateMarkup() {
    return `
    <h3 class="heading-tertiary">Latest transactions</h3>
    <div class="movement-info">
      <p class="info-text">ID</p>
      <p class="info-text">Date</p>
      <p class="info-text">Amount</p>
      <p class="info-text">Type</p>
    </div>
    <div class="movement-container">
      ${this._generateMovements()}
    </div>`;
  }

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
    console.log(data);
  }
}

export default new ContentView();
