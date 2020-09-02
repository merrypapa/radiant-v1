const realTimeDailyChart = document
  .getElementById("real-time__daily-chart")
  .getContext("2d");
// const realTimeScoreChart = document
//   .getElementById("real-time__score-chart")
//   .getContext("2d");
// const realTimeScoreText = document.querySelector("#real-time__score-text");

const chart = new Chart(realTimeDailyChart, {
  // The type of chart we want to create
  type: "line",

  // The data for our dataset
  data: {
    labels: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
    ],
    datasets: [
      {
        label: "Aug Electricity Usage",
        backgroundColor: "#00519E",
        borderColor: "#00519E",
        data: [
          0,
          10,
          5,
          2,
          20,
          30,
          45,
          22,
          24,
          65,
          84,
          21,
          45,
          65,
          54,
          30,
          34,
          32,
          45,
          56,
          56,
          67,
          75,
          80,
          75,
        ],
      },
    ],
  },

  // Configuration options go here
  options: {
    legend: {
      display: true,
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
      // yAxes: [
      //   {
      //     gridLines: {
      //       display: false,
      //     },
      //   },
      // ],
    },
  },
});

// const myPieChart = new Chart(realTimeScoreChart, {
//   type: "doughnut",
//   data: {
//     datasets: [
//       {
//         data: [90, 10],
//         backgroundColor: ["#00519E", "#F4F9FB"],
//         borderWidth: 1,
//       },
//     ],

//     // These labels appear in the legend and in the tooltips when hovering different arcs
//     // labels: ["Red", "Yellow", "Blue"],
//   },
//   options: {
//     // layout: {
//     //   padding: {
//     //     left: -50,
//     //     right: 0,
//     //     top: 0,
//     //     bottom: 0,
//     //   },
//     // },
//   },
// });

// // realTimeScoreChart.canvas.parentNode.style.height = "800px";
// realTimeScoreChart.canvas.parentNode.style.width = "400px";
// realTimeScoreChart.canvas.parentNode.style.margin = "0px -10px";

// realTimeScoreText.innerHTML = "86점";

// A Single Angular Gauge Chart - start
const data = [
  {
    domain: { x: [0, 1], y: [0, 1] },
    value: "50",
    title: { text: "현재 누진단계", font: { size: 15 } },
    type: "indicator",
    mode: "gauge+number+delta",
    delta: { reference: 20 },
    gauge: {
      axis: {
        range: [null, 600],
        ticksuffix: "kw",
        tickangle: 0,
        tickvals: [0, 100, 200, 300, 400, 500, 600],
        tickfont: { size: 9 },
      },
      bar: { color: "#00519e" },
      steps: [
        { range: [0, 100], color: "#277027" },
        { range: [100, 200], color: "#369A36" },
        { range: [200, 300], color: "#95CA29" },
        { range: [300, 400], color: "#FFC104" },
        { range: [400, 500], color: "#FC860C" },
        { range: [500, 600], color: "#F93F17" },
      ],
      // threshold: {
      //   line: { color: "red", width: 4 },
      //   thickness: 0.75,
      //   value: 490,
      // },
    },
  },
];

const layout = {
  width: 200,
  height: 140,
  margin: { t: 20, b: 0, r: 40, l: 40 },
  paper_bgcolor: "transparent",
};
Plotly.newPlot("real-time__tier__graph", data, layout);
// A Single Angular Gauge Chart - end
