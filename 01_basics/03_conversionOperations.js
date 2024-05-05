// const score= "30";

// console.log(score *5)
// console.log(typeof(score))

// const scoreInNumber = Number(score)
// console.log(scoreInNumber)
// console.log(scoreInNumber *5);

// let result1= 50;
// console.log(typeof(result1)) //should be a number
// console.log(result1 * 3)     // ans is 150  which is ok ..

// let result2= "345";
// console.log(typeof(result2))
// let finresults2=result2 * 3
// console.log(finresults2)
// console.log(typeof(finresults2))

// let result3= "50";
// console.log(typeof(result3)) // should be a string
// let resultInNumber=Number(result3)
// console.log(typeof(resultInNumber))  // should be a number after conversion
// console.log(resultInNumber * 3)     // ans is 150  which is ok....

// result1: let result1 = 50;
// result1 is a number.
// result1 * 3 equals 150, which is correct.
// result2: let result2 = "50";
// result2 is a string.
// When you perform result2 * 3, JavaScript implicitly converts the string "50" into a number (50) and then performs the operation.
// The result is 150, which may be unexpected, but it's due to JavaScript's behavior of type coercion.
// result3: let result3 = "50";
// result3 is a string.
// You explicitly convert result3 into a number using Number(result3), resulting in resultInNumber being a number (50).
// resultInNumber * 3 equals 150, which is correct.

// let sum = 30;
// console.log(typeof sum);
// console.log(sum + 30);

// let sum1 = "30";
// console.log(typeof sum1);
// let sum1Res=sum1 + 30;
// console.log(typeof sum1Res);
// console.log(sum1Res)

// let sum2 = "30";
// console.log(typeof sum2);
// const sumInNumber = Number(sum2);
// console.log(typeof sumInNumber);
// console.log(sumInNumber + 30);


// const score = "33";
// console.log(typeof score);
// let finScore = score * 10;
// console.log(finScore);
// console.log(typeof finScore);

// const score1 = "33A";
// console.log(typeof score1);
// let finalScore1 = score1 * 10;
// console.log(typeof finalScore1);
// console.log(finalScore1);

// const score2 = "33A";
// console.log(typeof score2);
// let score2InNumber = Number(score2);
// let finalScore2 = score2InNumber * 10;
// console.log(typeof finalScore2);
// console.log(finalScore2);


// const score = "33";
// console.log(typeof score);
// // let scoreInNumber=Number(score);
// let finScore = score % 10;
// console.log(finScore);
// console.log(typeof finScore);

// const score5 = "33";
// console.log(typeof score5);
// let finScore5 = score5 + 10;
// console.log(finScore);
// console.log(typeof finScore);

// const score1 = "33A";
// console.log(typeof score1);
// let finalScore1 = score1 - 10;
// console.log(typeof finalScore1);
// console.log(finalScore1);

// const score2 = "33A";
// console.log(typeof score2);
// let score2InNumber = Number(score2);
// let finalScore2 = score2InNumber - 10;
// console.log(typeof finalScore2);
// console.log(finalScore2);




// // case for multiplication 

// score: const score = "33";
// score is a string containing the numeric characters "33".
// score * 10 performs multiplication between the number 33 (implicitly converted from the string "33") and 10, resulting in 330.
// typeof finScore would be number.
// score1: const score1 = "33A";
// score1 is a string containing the characters "33A".
// score1 * 10 attempts to perform multiplication, but since "33A" cannot be implicitly converted to a number, it results in NaN (Not a Number).
// typeof finalScore1 would be number, indicating that the result of the failed multiplication operation is NaN.
// score2: const score2 = "33A";
// score2 is a string containing the characters "33A".
// Number(score2) attempts to explicitly convert the string "33A" to a number. Since the string contains non-numeric characters, the result is NaN.
// score2InNumber * 10 performs multiplication between NaN and 10, resulting in NaN.
// typeof finalScore2 would be number, indicating that the result of the multiplication operation involving NaN is still NaN.

// // case fro addition 
// score: const score = "33";
// score is a string containing the numeric characters "33".
// score + 10 performs concatenation, resulting in the string "3310".
// typeof finScore would be string.
// score1: const score1 = "33A";
// score1 is a string containing the characters "33A".
// score1 + 10 also performs concatenation, resulting in the string "33A10".
// typeof finalScore1 would be string.
// score2: const score2 = "33A";
// score2 is a string containing the characters "33A".
// Number(score2) attempts to explicitly convert the string "33A" to a number. Since the string contains non-numeric characters, the result is NaN.
// score2InNumber + 10 performs addition between NaN and 10, resulting in NaN.
// typeof finalScore2 would be number


// const score = null;
// const isNumber=Number(score)
// console.log(typeof(isNumber))
// console.log(score)

let result
const resultInNumber = Number(result)
// console.log(resultInNumber)
// console.log(typeof(resultInNumber))

let isLoggedIn= ""
let numberIsLoggedIn = Boolean(isLoggedIn)
console.log(numberIsLoggedIn)
console.log(typeof(numberIsLoggedIn))