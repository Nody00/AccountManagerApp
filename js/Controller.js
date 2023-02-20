import ManagerView from "./Views/ManagerView";
import NavView from "./Views/NavView";
import SearchView from "./Views/SearchView";
import LoginView from "./Views/LoginView";
import ContentView from "./Views/ContentView";
import UserInfoView from "./Views/UserInfoView";
import ChartView from "./Views/ChartView";
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

    // Rendering the overview view
    ChartView.showOverview();
  }
  if (data.classList.contains("btn-dashboard")) {
    // Hiding other content
    ChartView.hideOverview();

    // Rendering the dashboard
    ContentView.showContentView();
  }
}

function init() {
  LoginView.addHandlerSubmit(handleFormData);
  NavView.addHandlerNav(handleContentChange);
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
