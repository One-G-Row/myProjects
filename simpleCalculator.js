let one = document.getElementById("one")
let two = document.getElementById("two")
let sum = document.getElementById("sum-total")
let outputAdd = document.getElementById("outputAdd")
let subtract = document.getElementById("subtract-total")
let outputSubtract = document.getElementById("outputSubtract")
let multiply = document.getElementById("multiply-total")
let outputMultiply = document.getElementById("outputMultiply")
let divide = document.getElementById("divide-total")
let outputDivide = document.getElementById("outputDivide")
const erase = document.getElementById("eraseBtn")


sum.addEventListener("click", add)
function add(){
    let valueOne = one.value
    let valueTwo = two.value
    let parseOne = parseFloat(valueOne)
    let parseTwo = parseFloat(valueTwo)

    let addition = parseOne + parseTwo
    outputAdd.innerHTML = addition
}

subtract.addEventListener("click", minus)
function minus(){
    let valueOne = one.value
    let valueTwo = two.value

    let subtraction = valueOne - valueTwo
    outputSubtract.innerHTML = subtraction
}

multiply.addEventListener("click", times)
function times(){
    let valueOne = one.value
    let valueTwo = two.value

    let multiplication = valueOne * valueTwo
    outputMultiply.innerHTML = multiplication
}

divide.addEventListener("click", divides)
function divides(){
    let valueOne = one.value
    let valueTwo = two.value

    let division = valueOne / valueTwo
    outputDivide.innerHTML = division
}

erase.addEventListener("click", function deletes(){
//clear both x and y input values
//clear the results
    one.value = ""
    two.value = ""

    outputAdd.innerHTML = ""
    outputSubtract.innerHTML = ""
    outputMultiply.innerHTML = ""
    outputDivide.innerHTML = ""
})
