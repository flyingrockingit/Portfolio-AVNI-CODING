const display=document.getElementById("display")
function append (value){
    display.value+=value
}
function clearDisplay () {
    display.value= ""
}
function calculate () {
    try {
        display.value=eval(display.value)
    } catch (error) { 
        display.value='Error'
    }
}
function handlePercentage() {
    display.value=(display.value/100).toString();
}