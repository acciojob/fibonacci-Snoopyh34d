// function fibonacci(num) {
// // your code here
// }

// module.exports = fibonacci;
function calculateFibonacci() {
            var numTerms = document.getElementById("numTerms").value;
            var sequence = [];
            for (var i = 0; i < numTerms; i++) {
                if (i <= 1) {
                    sequence.push(i);
                } else {
                    sequence.push(sequence[i - 1] + sequence[i - 2]);
                }
            }
            document.getElementById("fibonacciSequence").innerText = "Fibonacci sequence: " + sequence.join(", ");
        }