// Create an application that accepts two integers within two separate prompts. 
// Then, display only the larger of the two within the browser window. 
// Don’t forget to handle the fact that the two could be equal.

let firstNum = prompt('Enter first number:')
let secondtNum = prompt('Enter second number:')

if (firstNum > secondtNum) {

    document.write('Larger number is ' + firstNum)

} else if (firstNum < secondtNum) {

    document.write('Larger number is ' + secondtNum)

} else {

    document.write('Numbers are equal!')

}