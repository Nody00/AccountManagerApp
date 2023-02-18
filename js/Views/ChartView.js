import Chart from "chart.js/auto";
class ChartView {
  _parentElement = document.getElementById("myChart");
  _container = document.querySelector(".overview");
  chart;
  expenses;
  deposits;
  transfers;
  showOverview() {
    this._container.classList.remove("hidden-ty-chart");
  }
  hideOverview() {
    this._container.classList.add("hidden-ty-chart");
  }

  calculateChartData(curAccount) {
    this.expenses = 0;
    this.deposits = 0;
    this.transfers = 0;
    curAccount.movements.forEach((mov) => {
      if (mov.type === "expense") {
        this.expenses += mov.amount;
      }
      if (mov.type === "deposit") {
        this.deposits += mov.amount;
      }
      if (mov.type === "transfer") {
        this.transfers += mov.amount;
      }
    });
  }

  render() {
    const data = {
      labels: ["Expenses", "Deposits", "Transfers"],
      datasets: [
        {
          label: "Account movements $",
          data: [this.expenses, this.deposits, this.transfers],
          backgroundColor: ["#e03131", "#37b24d", "#1864ab"],
          hoverOffset: 1,
        },
      ],
    };

    this.chart = new Chart(this._parentElement, {
      type: "doughnut",
      data: data,
    });
  }

  updateChart() {
    this.chart.destroy();
  }
}

export default new ChartView();
