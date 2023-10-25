const input = 'take your time hero';
const vowels = [];
let resultArray = [];
for (let i = 0; i < input.length;i++){
 if (input[i] === 'a'|| input[i]=== 'i'|| input[i]=== 'o'|| input[i] === 'a'){
   vowels.push(input[i]);
 } else if (input[i] === 'u' || input[i]==='e'){
   for (let j=0;j<2;j++){
     vowels.push(input[i]);
   }
 }
}
resultArray = vowels.join('').toUpperCase();

console.log(resultArray);
