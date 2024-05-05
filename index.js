const display = document.getElementById("display");
// @ts-ignore
function appendToDisplay(input) {
    if (display) {
        display.value += input;
    }
}
// @ts-ignore
function clearDisplay() {
    if (display) {
        display.value = "";
    }
}
// @ts-ignore
function calculate() {
    if (display) {
        try {
            display.value = eval(display.value);
        }
        catch (error) {
            display.value = "Error";
        }
    }
}


