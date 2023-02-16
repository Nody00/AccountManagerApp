import ChartView from "./Views/ChartView";
import ManagerView from "./Views/ManagerView";
import NavView from "./Views/NavView";
import SearchView from "./Views/SearchView";
import LoginView from "./Views/LoginView";
import ContentView from "./Views/ContentView";
import UserInfoView from "./Views/UserInfoView";
import * as model from "./Model";

// Rendering the chart
// ChartView();

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
}

function showNewTrModal() {
  // Show the modal form
  const overlay = document.querySelector(".overlay");
  overlay.classList.remove("hidden-ty");

  // Hide modal form on button click
  const btnCloseModal = document.querySelector(".btn-close-modal");
  btnCloseModal.addEventListener("click", () => {
    overlay.classList.add("hidden-ty");
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

    // Hide modal
    overlay.classList.add("hidden-ty");
  });
}

function handleLogOut() {
  // Hide everything and show login view
  // Hiding the manager
  ManagerView.hideManagerView();
  UserInfoView.hideUserInfoView();
  ContentView.hideContentView();
  LoginView.showLoginView();
  model.resetCurrentAccount();
}

function init() {
  LoginView.addHandlerSubmit(handleFormData);
}

init();
