class Calculator {
    constructor(previousOperandText, currentOperandText) {
        this.previousOperandText = previousOperandText
        this.currentOperandText =currentOperandText
        this.clear()
    }

    clear() {
         this.currentOperandText= '';
         this.previousOperandText= '';
         this.operation = undefined;
    }

    delete() {

    }

    appendNumber(number) {
    this.currentOperand= this.currentOperand.toString() + number.toString();
    
    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand;
    }
}






const numberButtons =document.querySelectorAll('[data-number]')
const operationButtons =document.querySelectorAll('[data-operation]')
const equalsButton =document.querySelector('[data-equals]')
const deleteButton =document.querySelector('[data-delete]')
const allclearButton =document.querySelector('[data-all-clear]')
const previousOperandTextElement =document.querySelector('[data-previous-operand]')
const currentOperandTextElement =document.querySelector('[data-current-operand]')


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click ' , () => {
    claculator.appendNumber(button.innerText)
    calculator.updateDisplay()
    })
})