const kelvin = 0;
// I created constant kelvin that remains same for whole time
let celsius = kelvin - 273;
// I created const celsius that is connected to kelvin
let fahrenheit = Math.floor(celsius *(9/5) + 32);

let newton = Math.floor(celsius * (33/100));

console.log(`The temperature is ${fahrenheit} Fahrenheits.`);
console.log(`The temperature is ${newton} Newtons.`);

