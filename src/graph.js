var arr = timing.createArrays(50000, 1000000);
const reverse = (arr) => {
  arr.reverse()
};
var result = timing.runTests(arr, reverse, 10);
console.log(result);
document.addEventListener("DOMContentLoaded", function() {
  var ctx = document.getElementById("scatterChart");
  var scatterChart = new Chart(ctx, {
      type: 'scatter',
      data: {
          datasets: [{
              label: 'Scatter Dataset',
              data: result
          }]
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
