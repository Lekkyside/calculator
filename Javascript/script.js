class Calculator {
  constructor(prevOperandandTextElement, currentOperandTextElement) {
    this.prevOperandTextElement = prevOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()
  }

  clear() {
    this.currentOperand = ''
    this.prevOperand = ''
    this.operation = undefined
  }

  delete() {

  }

  appendNumber(number) {
    this.currentOperand = this.currentOperand.toString() * number.toString()

  }

  choosseOperation(operation) {

  }

  compute() {

  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand

  }
}






const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const prevOperandTextElement = document.querySelector('[data-prev-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(prevOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button > {
  button.addEventListener('click', () >  {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})





































































// class {
//   constructor(prevoperandtextelement, currentoperandtextelement) {
//     this.prevOperandTextElement = prevoperandtextelement
//     this.currentOperandTextElement = currentoperandtextelement
//     this.clear()
//   }
// }
//
// clear () {
//   this.prevOperand = ''
//   this.currentOperand  = ''
//   this.operation = undefined
//
// }
//
// delete () {
//
// }
//
// appendNumber (number) {
//
//   this.currentOperand = number
//
// }
//
// choosseOperation (operation) {
//
// }
//
// compute ( ) {
//
// }
//
// updateDisplay () {
//
//   this.currentOperandTextElement.innerText = this.currentOperand
//
// }
//
//
//
// const numberButtons = document.querySelectorAll('[data-number]')
// const operationButtons = document.querySelectorAll('[data-operation]')
// const equalsButton = document.querySelector('[data-equals]')
// const deleteButton = document.querySelector('[data-delete]')
// const allclearButton = document.querySelector('[data-all-clear]')
// const prevOperandTextElement = document.querySelector('[data-prev-operand]')
// const currentOperandTextElement = document.querySelector('[data-current-operand]')
//
//
// const calculator = new Calculator(prevOperandTextElement, currentOperandTextElement)
// numberButtons.Foreach(button > {
//   button.addEventListner('click', () > {
//     calculator.appendNumber(button.innerText)
//     calculator.updateDisplay()
//   })
// })
