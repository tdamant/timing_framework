document.addEventListener("DOMContentLoaded", function() {
  var sortResult = timing.runTests(functions.sort);
  var reverseResult = timing.runTests(functions.reverse);
  var duplicateResult = timing.runTests(functions.findDuplicates);
  var shuffleResult = timing.runTests(functions.shuffle);
  var ctx = document.getElementById("scatterChart");
  var scatterChart = new Chart(ctx, {
      type: 'scatter',
      data: {
          datasets: [
        {
          label: "sort",
          data: sortResult
        },
        {
          label: "reverse",
          data: reverseResult
        },
        {
          label: "duplicates",
          data: duplicateResult
        }
        ,
        {
          label: "shuffle",
          data: shuffleResult
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
