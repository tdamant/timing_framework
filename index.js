document.addEventListener("DOMContentLoaded", function() {
    const quickSortResult = timing.runTests(functions.quickSort);
    const sortResult = timing.runTests(functions.sort);
    // const shuffleResult = timing.runTests(functions.shuffle);
    // const reverseResult = timing.runTests(functions.reverse);
    const ctx = document.getElementById("scatterChart");
    new Chart(ctx, {

        type: 'scatter',
        data: {
            datasets: [
                {
                    label: "quick sort",
                    data: quickSortResult
                },
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
