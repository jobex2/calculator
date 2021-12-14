let input = [];
let numbers = [];
let operators = [];
const nums = document.querySelectorAll(".num");
const buttons = document.querySelectorAll(".button-container button");
const display = document.querySelector(".display");
const result = document.querySelector(".result");


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let selection = button.dataset.choice;
        if(!parseInt(selection))
        {
            if(selection == 'Clear')
            {
                display.textContent = '';
                input = []
                numbers = [];
                operators = [];
            }
            else if(selection == 'Del')
            {
                display.textContent = input.slice(0, input.length -1).join("");
                input.pop();
            }
            else if(selection == '.')
            {
                if(!input.some(inp => "." == inp))
                {
                    input.push(selection);
                    display.textContent = display.textContent + selection;
                }
            }
            else
            {
                input.push(selection);
                display.textContent = display.textContent + selection;
            }

        }
        else
        {
            input.push( parseInt(selection));
            display.textContent = display.textContent + selection;
        }
        
        if( input.length > 1)
        {
            calcuate();
        }
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
    if(b == 0)
    {
        alert("You cannot divide by zero, Punk")
        return;
    }
    return a/b;
}
function mod(a,b)
{
    return a%b;
}
function exp(a,b)
{
    return a**b;
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
    if(operator == "^")
    {
        return exp(a,b);
    }
    if(operator =="%")
    {
        return mod(a,b);
    }
    else
    {
        return;
    }

}
function calcuate ()
{
    let lastInput = input[input.length - 1];
    if(lastInput != '.')
    {
        if( typeof(lastInput) == "string")
        {   
            
                input.pop();
                operators.push(lastInput);
                numbers.push(parseFloat(input.join("")));
            
            if(operators.length > 1)
            {
                let output = operate(operators[0], numbers[0], numbers[1])
                display.textContent = output;
                result.textContent = output;

                if(operators[1] == "=")
                {
                    numbers = [];
                    operators = [];
                    input=[output];
                }
                else if(operators[1] != "=")
                {
                    numbers = [output];
                    operators = [operators[1]];
                    display.textContent = display.textContent + operators;
                    input = [];
                }
            }
            else
            {
                input=[];
            }
        }
    }
}
