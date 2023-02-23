class UserInfoView {
  _parentElement = document.querySelector(".user-info");
  _data;
  showUserInfoView() {
    this._parentElement.classList.remove("hidden-ty");
  }
  hideUserInfoView() {
    this._parentElement.classList.add("hidden-ty");
  }
  _generateMarkup() {
    let balance = 0;
    this._data.movements.forEach((mov) => {
      if (mov.type === "expense") {
        balance -= mov.amount;
      } else {
        balance += mov.amount;
      }
    });
    return ` 
    <div class="user-card">
    <p class="card-title">Your info</p>
    <p class="card-name">${this._data.fullName}</p>
    <div class="card-text-box"><p class="user-info-type">ID:</p><p class="user-id">${
      this._data.id
    }</p></div>
    <div class="card-text-box"><p class="user-info-type">Address:</p><address>${
      this._data.address.street
    }</br>
    ${this._data.address.city}</br>
      </address>
    </div>
    <div class="card-text-box"><p class="user-info-type">Email:</p><p class="email">${
      this._data.email
    }</p>
    </div>
    <div class="card-text-box"><p class="user-info-type">Phone number:</p><p class="phone-number">${
      this._data.phone
    }</p>
    </div>
  </div>
  <div class="balance-box">
  <div class="balance-flex">
    <p class="balance-text">Account balance:</p>
    <p class="balance ${balance < 0 ? "expense" : ""}">$${balance}</p>
  </div>
  <div class="balance-flex">
    <p class="balance-text">Account credit limit:</p>
    <p class="balance">$${this._data.credit}</p>
  </div>
</div>
<div class="btn-box">
          <a href="#" class="new-btn">&plus; New transaction</a>
        </div>`;
  }
  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._parentElement.innerHTML = "";
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  _generateMarkupInfo() {
    return `<div class="user-card">
    <p class="card-title">Your info</p>
    <p class="card-name">Dino Krcic</p>
    <div class="card-text-box"><p class="user-info-type">Education</p><p class="user-id">Bachelors of Applied Computer Engeniring,Universicty of Montenegro</p></div>
    
    <div class="card-text-box"><p class="user-info-type">Email:</p><p class="email">dinokrcicprof@gmail.com</p>
    </div>
    <div class="card-text-box"><p class="user-info-type">Phone number:</p><p class="phone-number">069-500-144</p>
    </div>
  </div>
  `;
  }
  renderInfo() {
    const markup = this._generateMarkupInfo();
    this._parentElement.innerHTML = "";
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}

export default new UserInfoView();
