const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange","Pink"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, -53, 5, 2000, 3, 25],
        borderWidth: 4,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});