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
