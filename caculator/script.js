// let display = document.getElementById('display');
// let buttons = document.querySelectorAll('.btn');
// let clearButton = document.getElementById('clear');
// let equalButton = document.getElementById('equal');

// let currentInput = "";

// // Handle button clicks
// buttons.forEach(button => {
//     button.addEventListener('click', (e) => {
//         let value = e.target.innerHTML;
        
//         if (value === "=") {
//             try {
//                 currentInput = eval(currentInput).toString();  // Evaluate the expression
//                 display.value = currentInput;
//             } catch (error) {
//                 display.value = "Error";  // Handle invalid inputs
//             }
//         } else if (value === "C") {
//             currentInput = "";  // Clear the display
//             display.value = currentInput;
//         } else {
//             currentInput += value;  // Append the value of the clicked button
//             display.value = currentInput;
//         }
//     });
// });


let display = document.getElementById('display');
let buttons = document.querySelectorAll('.btn');
let clearButton = document.getElementById('clear');
let equalButton = document.getElementById('equal');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id === 'clear') {
            display.value = '';
        } else if (button.id === 'equal') {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        } else {
            display.value += button.innerText;
        }
    });
});
