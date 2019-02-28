document.addEventListener("DOMContentLoaded", function() {
    // const sortResult = timing.runTests(functions.sort);
    // const duplicateResult = timing.runTests(functions.findDuplicates);
    const shuffleResult = timing.runTests(functions.shuffle);
    const reverseResult = timing.runTests(functions.reverse);
    const ctx = document.getElementById("scatterChart");
    new Chart(ctx, {

        type: 'scatter',
        data: {
            datasets: [
                {
                    label: "shuffle",
                    data: shuffleResult
                },
                {
                    label: "reverse",
                    data: reverseResult
                }
                // ,
                // {
                //     label: "duplicates",
                //     data: duplicateResult
                // }
                // ,
                // {
                //     label: "shuffle",
                //     data: shuffleResult
                // }
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
