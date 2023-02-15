import ChartView from "./Views/ChartView";
import LoginView from "./Views/LoginView";
import ManagerView from "./Views/ManagerView";
import ContentView from "./Views/ContentView";
import UserInfo from "./Views/UserInfo";
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
  ManagerView.render(model.curAccount);
  //   Show content
  ContentView.showContentView();
  ContentView.render(model.curAccount);
  //   Show user-info
  UserInfo.showUserInfoView();
}

function handleLogOut() {
  // Hide everything and show login view
  UserInfo.hideUserInfoView();
  ContentView.hideContentView();
  ManagerView.hideManagerView();
  LoginView.showLoginView();
  model.resetCurrentAccount();
}

function init() {
  LoginView.addHandlerSubmit(handleFormData);
  // ManagerView.addHandlerLogOut(handleLogOut);s
}

init();
