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
    let html = "";
    this._data.movements.forEach(function (mov) {
      const day = mov.date.toLocaleString("en-US", {
        day: "2-digit",
      });
      const month = mov.date.toLocaleString("en-US", {
        month: "2-digit",
      });
      const year = mov.date.getFullYear();

      html += `
      <div class="movement">
        <div class="movement-id">${mov.id}</div>
        <div class="movement-date">${day}/${month}/${year}</div>
        <div class="movement-amount">$${mov.amount}</div>
        <div class="movement-type ${
          mov.type
        }">${mov.type[0].toUpperCase()}${mov.type.slice(1)}</div>
      </div>`;
    });
    return html;
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
    // const movementsMarkup = this._generateMovements();
    this._parentElement.innerHTML = "";
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
    // const movementsContainer = document.querySelector(".movement-container");
    // movementsContainer.innerHTML = "";
    // movementsContainer.insertAdjacentHTML("afterbegin", movementsMarkup);
  }
}

export default new ContentView();
