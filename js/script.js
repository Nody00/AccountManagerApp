import Chart from "chart.js/auto";

const state = {
  accounts: [
    {
      username: "dk999",
      password: "password",
      movements: [
        {
          id: 222,
          type: "expense",
          date: new Date(),
          amount: 100,
        },
        {
          id: 22231,
          type: "transaction",
          date: new Date(),
          amount: 200,
        },
        {
          id: 221232,
          type: "deposit",
          date: new Date(),
          amount: 40,
        },
        {
          id: 221232,
          type: "expense",
          date: new Date(),
          amount: 1300,
        },
      ],
    },
  ],
};

// CHARTS
const ctx = document.getElementById("myChart");

const data = {
  labels: ["Expenses", "Deposits", "Transfers"],
  datasets: [
    {
      label: "Account movements",
      data: [300, 50, 100],
      backgroundColor: ["#e03131", "#37b24d", "#1864ab"],
      hoverOffset: 4,
    },
  ],
};

new Chart(ctx, {
  type: "doughnut",
  data: data,
});
