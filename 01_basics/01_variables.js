const accountId = 121234;
let accountEmail = "asghar@gmail.com";
var accountCity = "islamabad";
accountbalance = 12123;

// accountId = 1212;      it will not work bcz we can,t redeclare and assign any value to CONST
// let accountEmail= "asghar@gmail.com"   it will not work bcz we can redeccalre the LET
accountEmail="asgh@gmail.com" //we can,t redeclare it but we can assign value to LET

var accountCity="rawalpindi"  // we can assign value and also can declare it   but never use it 
accountbalance=1212

// let accountCity="peshawar"  can,t declare it bcz it was declared before with var 
// console.log(accountId);
// console.log(accountEmail); 
// console.log(accountCity);   


console.table([accountId, accountEmail, accountCity, accountbalance])