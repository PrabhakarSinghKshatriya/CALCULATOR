document.addEventListener('DOMContentLoaded',()=>{
    const resultDisplay=document.getElementById('result');
    const expressionDisplay=document.getElementById('expression');
    let currentInput='';
    let operator='';
    let previousInput='';
    function clearDisplay() {
        currentInput='';
        operator='';
        previousInput='';
        expressionDisplay.textContent = '';
        resultDisplay.textContent = '0';
    }
    function deleteLast() {
        currentInput=currentInput.slice(0, -1);
        resultDisplay.textContent=currentInput || '0';
    }
    function appendNumber(number) {
        if (currentInput==='0'&&number!=='.') {
            currentInput=number;
        } else {
            currentInput+=number;
        }
        resultDisplay.textContent=currentInput;
    }
    function appendOperator(op) {
        if (currentInput==='') return;
        if (previousInput!=='') {
            calculateResult();
        }
        operator=op;
        previousInput=currentInput;
        currentInput='';
        expressionDisplay.textContent=`${previousInput} ${operator}`;
    }
    function calculateResult() {
        if (currentInput===''||previousInput==='') return;
        let result;
        const prev=parseFloat(previousInput);
        const curr=parseFloat(currentInput);
        switch (operator) {
            case '+':
                result=prev+curr;
                break;
            case '-':
                result=prev-curr;
                break;
            case '*':
                result=prev*curr;
                break;
            case '/':
                result=prev/curr;
                break;
            default:
                return;
        }
        currentInput=result.toString();
        operator='';
        previousInput='';
        expressionDisplay.textContent='';
        resultDisplay.textContent=currentInput;
    }
    window.clearDisplay=clearDisplay;
    window.deleteLast=deleteLast;
    window.appendNumber=appendNumber;
    window.appendOperator=appendOperator;
    window.calculateResult=calculateResult;
});
