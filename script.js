let number = 0;
const nums = document.querySelectorAll(".num");
const buttons = document.querySelectorAll(".button-container button");
const display = document.querySelector(".display");

nums.forEach((num) => {
    num.addEventListener('click', () => {
        number = num.dataset.choice;
        display.textContent = display.textContent + num.dataset.choice;
        console.log(number);
    })
});




/*************************************************************************/
//function Definitions

function add(a, b)
{
    return a + b;
}
function subtract(a, b)
{
    return a - b;
}
function multiply(a, b)
{
    return a*b;
}
function divide(a, b)
{
    return a/b;
}
function operate(operator, a, b)
{
    if(operator == "+")
    {
        return add(a, b);
    }
    if(operator == "-")
    {
        return subtract(a, b);
    }
    if(operator == "*")
    {
        return multiply(a, b);
    }
    if(operator == "/")
    {
        return divide(a, b);
    }
    else
    {
        return;
    } 
}

