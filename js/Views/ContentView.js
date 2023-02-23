import * as model from "../Model";

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
      <div class="movement ${model.state.darkMode ? "movement-dark" : ""}">
        <div class="movement-id">${mov.id}</div>
        <div class="movement-date">${day}/${month}/${year}</div>
        <div class="movement-amount">$${mov.amount}</div>
        <div class="movement-type ${
          mov.type
        }">${mov.type[0]?.toUpperCase()}${mov.type.slice(1)}</div>
      </div>`;
    });

    return html;
  }

  _generateMarkup() {
    return `
    <h3 class="heading-tertiary ${
      model.state.darkMode ? "heading-tertiary-dark" : ""
    } content-title">Latest transactions</h3>
    <div class="movement-info ${
      model.state.darkMode ? "movement-info-dark" : ""
    }">
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
    this._parentElement.innerHTML = "";
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  // Info page content

  _generateMarkupInfo() {
    return `
    <h3 class="heading-tertiary main-info-heading ${
      model.state.darkMode ? "heading-tertiary-dark" : ""
    } content-title">App information</h3>

    <p class="info-page-text">App was made by Dino Krcic as a portfolio project.The App was made using vanilla JS,adhearing to best practises and packaged using the parcel bundler.Two dependencies were used,Chart.js and Random.js for the chart view and random number generation respectively.This project was an exercise to improve my skills as a web developer as well as to show potential imployers like yourself that i can bring immediat value to you team.</p>

    <h2 class="heading-tertiary ${
      model.state.darkMode ? "heading-tertiary-dark" : ""
    } content-title">Documentation</h2>

    <p class="info-page-text">This app was made with the MVC architecture,it is quite simple in desing,for source code visit: https://github.com/Nody00/AccountManagerApp.In the repository you will find App codebase with several branches,feel free to explore and critise my code,with scrutuny and critisism from a professional i can improve my skills quicker and more effectively.
    
    In the Model.js file is where the data is handled,this is where the Apps state is initilized and updated as the user interacts with the application

    In the Controller.js file is where you will find the majority of the high level code for the app,the controller calls functions from both the model and component views in order to make the app content dynamic.

    The Views are structured like classes in order to organize code in an efficient way,the public methods of the views are the APIs the controller interacts with.
    </p>

    <h2 class="heading-tertiary ${
      model.state.darkMode ? "heading-tertiary-dark" : ""
    } content-title">Contact</h2>
    <p class="info-page-text">Feel free to contact me anytime,email: dinokrcicprof@gmail.com
    </p>

    `;
  }
  renderInfo() {
    const markup = this._generateMarkupInfo();
    this._parentElement.innerHTML = "";
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}

export default new ContentView();
