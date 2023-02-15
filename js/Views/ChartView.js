import Chart from "chart.js/auto";
const ChartView = () => {
  const ctx = document.getElementById("myChart");

  const data = {
    labels: ["Expenses", "Deposits", "Transfers"],
    datasets: [
      {
        label: "Account movements $",
        data: [300, 50, 100],
        backgroundColor: ["#e03131", "#37b24d", "#1864ab"],
        hoverOffset: 1,
      },
    ],
  };

  new Chart(ctx, {
    type: "doughnut",
    data: data,
  });
};

export default ChartView;
