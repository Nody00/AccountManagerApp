import ManagerView from "./Views/ManagerView";
import NavView from "./Views/NavView";
import SearchView from "./Views/SearchView";
import LoginView from "./Views/LoginView";
import ContentView from "./Views/ContentView";
import UserInfoView from "./Views/UserInfoView";
import ChartView from "./Views/ChartView";
import CreateAccountView from "./Views/CreateAccountView";
import * as model from "./Model";
import { Chart } from "chart.js";

function handleFormData(data) {
  //    Account data check
  if (!model.setCurrentAccount(data)) {
    LoginView.render();
    return;
  }

  //   Hide the login view if account check passes
  LoginView.hideLoginView();
  //    Show manager view
  ManagerView.showManagerView();
  // Show nav and search
  NavView.render();
  SearchView.render(model.curAccount);
  //   Show content
  ContentView.showContentView();
  ContentView.render(model.curAccount);
  //   Show user-info
  UserInfoView.showUserInfoView();
  UserInfoView.render(model.curAccount);

  // Render the chart but dont show it
  ChartView.calculateChartData(model.curAccount);
  ChartView.render();

  // Add event listener for logout
  const btnLogout = document.querySelector(".logout-btn");
  btnLogout.addEventListener("click", (e) => {
    e.preventDefault();
    handleLogOut();
  });

  // Add event listener for new transaction
  const btnNewTr = document.querySelector(".new-btn");
  btnNewTr.addEventListener("click", (e) => {
    e.preventDefault();
    showNewTrModal();
  });

  // Add event listener for dark mode
  const btnDarkmode = document.querySelector(".btn-dark-mode");
  btnDarkmode.addEventListener("click", (e) => {
    e.preventDefault();
    toggleDarkMode();
  });
}

// Dark mode toggler function
function toggleDarkMode() {
  model.state.darkMode = !model.state.darkMode;
  console.log(model.state.darkMode);
  // Manager
  const manager = document.querySelector(".manager");
  manager.classList.toggle("manager-dark");
  // Main nav
  const navBtns = document.querySelectorAll(".nav-btn");
  navBtns.forEach((btn) => {
    btn.classList.toggle("nav-btn-dark");
  });
  // Search bar
  const icons = document.querySelectorAll(".user-icons");
  icons.forEach((icon) => {
    icon.classList.toggle("user-icons-dark");
  });
  // Content
  const headings = document.querySelectorAll(".heading-tertiary");
  headings.forEach((heading) => {
    heading.classList.toggle("heading-tertiary-dark");
  });
  const content = document.querySelector(".content");
  content.classList.toggle("content-dark");
  // const movements = document.querySelectorAll(".movement");
  // movements.forEach((movement) => {
  //   movement.classList.toggle("movement-dark");
  // });

  // Modal new movement
  const modalNew = document.querySelector(".modal");
  modalNew.classList.toggle("modal-dark");

  // Body
  const body = document.querySelector(".body-class");
  console.log(body);
  body.classList.toggle("body-dark");
}

function showNewTrModal() {
  // Show the modal form
  const overlay = document.querySelector(".overlay");
  overlay.classList.remove("hidden-tx");

  // Hide modal form on button click
  const btnCloseModal = document.querySelector(".btn-close-modal");
  btnCloseModal.addEventListener("click", () => {
    overlay.classList.add("hidden-tx");
  });

  // Hide modal on Esc
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") overlay.classList.add("hidden-ty");
  });

  // Listen for submit
  const modalForm = document.querySelector(".modal-form");
  modalForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formDataArr = [...new FormData(modalForm)];
    const formData = Object.fromEntries(formDataArr);
    model.addNewExpense(formData);

    // Rerender the content view with expenses
    ContentView.render(model.curAccount);
    // Rerender the user info
    UserInfoView.render(model.curAccount);
    // Adding the event listener again since we rerendered the userinfo view
    const btnNewTr = document.querySelector(".new-btn");
    btnNewTr.addEventListener("click", (e) => {
      e.preventDefault();
      showNewTrModal();
    });
    // Rerender the overview chart
    ChartView.updateChart();
    ChartView.calculateChartData(model.curAccount);
    ChartView.render();
    // Hide modal
    overlay.classList.add("hidden-ty");
    // Clear inputs
    clearModalInputs();
  });
}

// NEW ACCOUNT CREATION
// Add event listener for new account
const btnNewAccount = document.querySelector(".btn-create-account");
btnNewAccount.addEventListener("click", (e) => {
  e.preventDefault();
  // Hide the login view
  LoginView.hideLoginView();
  // Show new account view
  CreateAccountView.showCreateView();
});
// Go back button
const btnGoBack = document.querySelector(".btn-back");
btnGoBack.addEventListener("click", (e) => {
  e.preventDefault();
  // Hide new account view
  CreateAccountView.hideCreateView();
  // Show login view
  LoginView.showLoginView();
});

function handleNewAccount(data) {
  if (data.password1 !== data.password2) {
    CreateAccountView.renderError();
    return;
  }
  CreateAccountView.clear();
  CreateAccountView.hideCreateView();
  LoginView.showLoginView();
  model.createNewAccount(data);
}

function handleLogOut() {
  // Hide everything and show login view
  // Hiding the manager
  ManagerView.hideManagerView();
  UserInfoView.hideUserInfoView();
  ContentView.hideContentView();
  LoginView.showLoginView();
  ChartView.hideOverview();
  ChartView.updateChart();
  model.resetCurrentAccount();
}

function handleContentChange(data) {
  // Changing the main content to the overview component
  if (data.classList.contains("btn-overview")) {
    // Hiding the content and user views
    ContentView.hideContentView();
    UserInfoView.render(model.curAccount);
    const btnNewTr = document.querySelector(".new-btn");
    btnNewTr.addEventListener("click", (e) => {
      e.preventDefault();
      showNewTrModal();
    });
    // Rendering the overview view
    ChartView.showOverview();
  }
  if (data.classList.contains("btn-dashboard")) {
    const content = document.querySelector(".content");
    content.classList.remove("info");
    // Hiding other content
    ChartView.hideOverview();
    UserInfoView.render(model.curAccount);
    const btnNewTr = document.querySelector(".new-btn");
    btnNewTr.addEventListener("click", (e) => {
      e.preventDefault();
      showNewTrModal();
    });
    // Rendering the dashboard
    ContentView.render(model.curAccount);
    ContentView.showContentView();
  }
  if (data.classList.contains("btn-info")) {
    //  Render the info in the content view maybe...
    const content = document.querySelector(".content");
    content.classList.add("info");

    ChartView.hideOverview();
    UserInfoView.renderInfo();
    ContentView.renderInfo();
    ContentView.showContentView();
  }
}

function init() {
  LoginView.addHandlerSubmit(handleFormData);
  NavView.addHandlerNav(handleContentChange);
  CreateAccountView.addHandlerCreate(handleNewAccount);
}

init();

// Clear modal inputs on submit

function clearModalInputs() {
  const inputAmount = document.querySelector(".input-amount");
  const inputType = document.querySelector(".input-type");
  const inputDate = document.querySelector(".input-date");

  inputAmount.value = "";
  inputType.value = "";
  inputDate.value = "";
}
