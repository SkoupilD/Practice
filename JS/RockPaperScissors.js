console.log('Hi this is game Rock, Paper, or Scissors ');
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') { 
    return userInput ;
    } else if (userInput = 'bomb'){
      return 'hidden';
    } else { 
      console.log('Error input');
}};

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random()*3);
  switch(randomNumber){
  case 0 : return 'rock';
  break;
  case 1 : return 'paper';
  break;
  case 2 : return 'scissors';
  break;
  }
}
const cpuChoice = getComputerChoice();
const userChoice = getUserChoice('BOMB');
determineWinner = (userChoice, computerChoice) => {
if (userChoice === cpuChoice) {
  return 'It\'s draw!';
} 
if (userChoice === 'rock'){ 
     if (cpuChoice === 'paper'){
      return 'Computer won!';
    } else {
      return 'User won!';
      }
} else  if (userChoice === 'paper'){
      if (cpuChoice === 'rock'){
         return 'User won!';
    } else {
         return 'Computer won!';
    }
 } else  if (userChoice === 'scissors'){
      if (cpuChoice === 'rock'){
          return 'Computer won!';
    } else { 
       return 'User won!';
          }
       } else if (userChoice = 'bomb'){
         return 'User won!';
       }
}
const result = determineWinner(userChoice, cpuChoice);
console.log(`This is cpu\'s choice: ${cpuChoice}`);
console.log(`This is user\'s choice: ${userChoice}`);
console.log(result);






