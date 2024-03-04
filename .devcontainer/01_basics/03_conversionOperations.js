let score = 33

// const {score} = req.body

console.log(typeof score);
console.log(typeof (score));
let valueInNumber = Number(score)
console.log(typeof valueInNumber);

console.log(valueInNumber);




// "33" => 33
// "33ss"  =>  NaN
// true => 1; false => 0


let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn);

let isLoggedIn = ""
console.log(booleanIsLoggedIn);

// 1 => True; 0 => false;
// "" => false
// "Ahsan" => false

