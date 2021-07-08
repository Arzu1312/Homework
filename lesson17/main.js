class Calculator {
    constructor(previousOperand, currentOperand) {
        this.previousOperand = document.querySelector(previousOperand)
        this.currentOperand = document.querySelector(currentOperand)
        this.clear()
    }

    clear() {
         this.currentOperandText= '';
         this.previousOperandText= '';
         this.operation = undefined;
    }

    delete() {
      this.currentOperandText = this.currentOperandText.toString().slice(0, -1)
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperandText.includes('.')) return
        this.currentOperandText = this.currentOperandText.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.currentOperandText === '') return
        if (this.previousOperandText !== ''){
            this.compute()
        }
       
     this.operation = operation
     this.previousOperandText= this.currentOperandText
     this.currentOperandText = ''
    }

    compute() {
     let computation
     const prev = parseFloat(this.previousOperandText)
     const current = parseFloat(this.currentOperandText)
       if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '÷':
                computation = prev / current
                break
            default:
                return 
            }

            this.currentOperandText = computation
            this.operation = undefined
            this.previousOperandText = ''
    }

    updateDisplay() {
        this.currentOperand.innerText = this.currentOperandText;
        this.previousOperand.innerText = this.previousOperandText;
        

       
    }
}






const numberButtons =document.querySelectorAll('[data-number]')
const operationButtons =document.querySelectorAll('[data-operation]')
const equalsButton =document.querySelector('[data-equals]')
const deleteButton =document.querySelector('[data-delete]')
const allclearButton =document.querySelector('[data-all-clear]')
const previousOperand =document.querySelector('[data-previous-operand]')
const currentOperand =document.querySelector('[data-current-operand]')


const calculator = new Calculator('[data-previous-operand]', '[data-current-operand]')

numberButtons.forEach(button => {
    button.addEventListener('click' , () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
    })
})


operationButtons.forEach(button => {
    button.addEventListener('click' , () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
    })
})


equalsButton.addEventListener('click' , button => {
    calculator.compute()
    calculator.updateDisplay()
})


allclearButton.addEventListener('click' , button => {
    calculator.clear()
    calculator.updateDisplay()
})


deleteButton.addEventListener('click' , button => {
    calculator.delete()
    calculator.updateDisplay()
})

