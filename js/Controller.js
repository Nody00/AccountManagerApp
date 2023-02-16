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
  const btn = document.querySelector(".logout-btn");
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    handleLogOut();
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
