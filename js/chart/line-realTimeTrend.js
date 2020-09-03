// ============================================
// As of Chart.js v2.5.0
// http://www.chartjs.org/docs
// ============================================

const chart = document.getElementById("chart").getContext("2d"),
  gradient = chart.createLinearGradient(0, 0, 0, 450);

gradient.addColorStop(0, "rgba(0, 81,158, 0.5)");
gradient.addColorStop(0.5, "rgba(0, 81, 158, 0.25)");
gradient.addColorStop(1, "rgba(0, 81, 158, 0)");

chart.canvas.parentNode.style.width = "300px";
chart.canvas.parentNode.style.height = "130px";
// chart.canvas.parentNode.style.padding = "100px";

const data = {
  labels: [
    "8월 1일",
    "8월 2일",
    "8월 3일",
    "8월 4일",
    "8월 5일",
    "8월 6일",
    "8월 7일",
    "8월 8일",
    "8월 9일",
    "8월 10일",
    "8월 11일",
    "8월 12일",
    "8월 13일",
    "8월 14일",
    "8월 15일",
    "8월 16일",
    "8월 17일",
    "8월 18일",
    "8월 19일",
    "8월 20일",
    "8월 21일",
    "8월 22일",
    "8월 23일",
    "8월 24일",
    "8월 25일",
    "8월 26일",
    "8월 27일",
    "8월 28일",
    "8월 29일",
    "8월 30일",
    "8월 31일",
  ],
  datasets: [
    {
      label: "전기 사용량",
      backgroundColor: gradient,
      pointBackgroundColor: "white",
      borderWidth: 1,
      borderColor: "rgba(0, 81, 158, 1)",
      data: [
        4,
        5,
        6,
        7,
        5,
        6,
        8,
        7,
        6,
        5,
        4.44,
        5.18,
        5.05,
        21.42,
        21.15,
        2.14,
        1.88,
        14.97,
        25.77,
        14.95,
        18.74,
        23.59,
        20.16,
      ],
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    easing: "easeInOutQuad",
    duration: 520,
  },
  scales: {
    xAxes: [
      {
        gridLines: "none",
        display: false,
        // fontColor: "white",
      },
    ],
    yAxes: [
      {
        gridLines: "none",
        ticks: {
          fontColor: "transparent", // this here
        },
        // display: false,
      },
    ],
  },
  elements: {
    line: {
      tension: 0.4,
    },
  },
  legend: {
    display: false,
    align: "end",
  },
  point: {
    backgroundColor: "white",
  },
  tooltips: {
    titleFontFamily: "Open Sans",
    backgroundColor: "rgba(0,0,0,0.3)",
    titleFontColor: "white",
    caretSize: 5,
    cornerRadius: 2,
    callbacks: {
      label: function (tooltipItems, data) {
        return tooltipItems.yLabel + " kWh";
      },
    },
    // xPadding: 10,
    // yPadding: 10,
  },
};

const chartInstance = new Chart(chart, {
  type: "line",
  data: data,
  options: options,
});
