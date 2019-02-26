
document.addEventListener("DOMContentLoaded", function() {
  var arr = timing.createArrays(1000, 500000, 5000 );
  const sort = (sort) => {
    arr.sort()
  }
  var sortResult = timing.runTests(arr, sort, 1);
  var ctx = document.getElementById("scatterChart");
  var scatterChart = new Chart(ctx, {
      type: 'scatter',
      data: {
          datasets: [
        {
          label: "sort",
          data: sortResult
        }
      ]
      },
      options: {
          scales: {
              xAxes: [{
                  type: 'linear',
                  position: 'bottom'
              }]
          }
      }
  });

});
