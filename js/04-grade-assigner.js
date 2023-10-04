// Collect the a number between 1 and 100 from the user.
// Make sure that number is between 1 and 100, if it is not, let the user know that only numbers between 1 and 100 are accepted.
// If the score is between 60 and 69, write out “You received a D” into the console.
// If the score is between 70 and 79, write out “You received a C” into the console.
// If the score is between 80 and 89, write out “You received a B” into the console.
// If the score is between 90 and 100, write out “You received an A” into the console.
// If the score is less than 60, write out “You received an F” into the console.

let score = parseInt(prompt('Please, enter your score between 1 and 100:'))


if ((score < 1) || (score > 100)) {window.alert('Only numbers between 1 and 100 are accepted')} 

  else if ((score >= 60) && (score <= 69)) {console.log('You received a D')}

  else if ((score >= 70) && (score <= 79)) {console.log('You received a C')}

  else if ((score >= 80) && (score <= 89)) {console.log('You received a B')}
       
  else if ((score >= 90) && (score <= 100)) {console.log('You received a A')}
            
  else if (score < 60) {console.log('You received a F')}

  else {} window.alert('Please enter your score as a number.')
