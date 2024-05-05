const display = document.getElementById("display") as HTMLInputElement;
// @ts-ignore
function appendToDisplay(input: string): void {
    if (display) {
        display.value += input;
    }
}
// @ts-ignore
function clearDisplay(): void {
    if (display) {
        display.value = "";
    }
}
// @ts-ignore
function calculate(): void {
    if (display) {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = "Error";
        }
    }
}
