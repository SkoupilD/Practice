let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegistered = true;
let runnerAge = 18;
if (runnerAge > 18 && earlyRegistered) { raceNumber += 1000}
if (runnerAge > 18 && earlyRegistered) {
  console.log(`You start at 9:30 and you race number is ${raceNumber}`)
} else if (runnerAge > 18 && !(earlyRegistered) ){consolelog(`You start at 11:00 and you number is ${raceNumber}`)} else if
(runnerAge < 18) {console.log(` You start at 12:30 and your number is ${raceNumber}`)} else {console.log(`18 yo starts now, your number is ${raceNumber}`)}
