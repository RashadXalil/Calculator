const numbers = document.getElementsByClassName('calc__number')
const screen = document.getElementById('calc__screen')
const plus = document.getElementById('plus')
const equal = document.getElementById('equal')
const clear = document.getElementById('clear')
const minus = document.getElementById('minus')
const multiply = document.getElementById('multiply')
const divide = document.getElementById('divide')
const percent = document.getElementById('percent')
const positiveNegative = document.getElementById('positiveNegative')
let currentOp = ''
let firstNum = 0
let currentLength = 0
let secondNum = 0
function sum(a, b) {
  return a + b
}
function percentFunc(a) {
  return a / 100
}
function positiveNegativeFunc(a) {
  if (a > 0) {
    return `-${a}`
  }
  if (a < 0) {
    return -a
  }
}
function subtract(a, b) {
  return a - b
}
function multiplyFunc(a, b) {
  return a * b
}
function divideFunc(a, b) {
  return a / b
}
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', function (e) {
    currentLength += 1
    screen.innerHTML += e.target.innerHTML
    if (screen.innerHTML == '') {
      positiveNegative.disabled = true
    }
  })
}
plus.addEventListener('click', function (e) {
  screen.style.fontSize = '50px'
  firstNum = Number(screen.innerHTML)
  currentOp = 'plus'
  screen.innerHTML = ''
})
minus.addEventListener('click', function () {
  screen.style.fontSize = '50px'
  firstNum = Number(screen.innerHTML)
  currentOp = 'minus'
  screen.innerHTML = ''
})
multiply.addEventListener('click', function () {
  firstNum = Number(screen.innerHTML)
  currentOp = 'multiply'
  screen.innerHTML = ''
})
divide.addEventListener('click', function () {
  firstNum = Number(screen.innerHTML)
  currentOp = 'divide'
  screen.innerHTML = ''
})
percent.addEventListener('click', function () {
  firstNum = Number(screen.innerHTML)
  currentOp = 'percent'
  screen.innerHTML = percentFunc(firstNum)
})
positiveNegative.addEventListener('click', function (e) {
  firstNum = Number(screen.innerHTML)
  currentOp = 'percent'
  let res = positiveNegativeFunc(firstNum)
  screen.innerHTML = res
})
equal.addEventListener('click', function (e) {
  if (currentOp == 'plus') {
    screen.style.fontSize = '50px'
    secondNum = Number(screen.innerHTML)
    let finalSum = sum(firstNum, secondNum)
    screen.innerHTML = finalSum
  } else if (currentOp == 'minus') {
    screen.style.fontSize = '50px'
    secondNum = Number(screen.innerHTML)
    let finalSub = subtract(firstNum, secondNum)
    screen.innerHTML = finalSub
  } else if (currentOp == 'multiply') {
    screen.style.fontSize = '50px'
    secondNum = Number(screen.innerHTML)
    let finalMultiply = multiplyFunc(firstNum, secondNum)
    screen.innerHTML = finalMultiply
  } else if (currentOp == 'divide') {
    screen.style.fontSize = '50px'
    currentLength = 0
    secondNum = Number(screen.innerHTML)
    let finalDivide = divideFunc(firstNum, secondNum)
    screen.innerHTML = finalDivide
  }
})
clear.addEventListener('click', function () {
  screen.style.fontSize = '50px'
  screen.innerHTML = ''
  firstNum = 0
  secondNum = 0
})
document.addEventListener('keydown', KeyCheck)
function KeyCheck(event) {
  var KeyID = event.keyCode
  switch (KeyID) {
    case 8:
      let newinnerHTML = screen.innerHTML.slice(0, -1)
      screen.innerHTML = newinnerHTML
      break
    default:
      break
  }
}
function checkScreen() {
  if (screen.innerHTML == '') {
    positiveNegative.disabled = true
  }
}
checkScreen()
