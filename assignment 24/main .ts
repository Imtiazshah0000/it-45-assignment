// define variable

let apple="apple ";
let upercasapple="APPLE";
let ten=10;
let twenty =20;
let fruit =["apple","banna","mango"];
// test for equal and in equal with strings 

console.log("i apple is equal to apple");
console.log(apple=='apple');


console.log("is apple is equal to apple ");

console.log(apple!="appple");


// test using lowercase functon

console.log("IS APPLE IS EQUAL TO APPLE AFTER CONVERTING TO LOWERCASE ?");

console.log(upercasapple.toLowerCase()=="apple");

console.log("IS APPLE IS NOT EQUAL AFTER CONVERTING TO LOWER?");

console.log(upercasapple.toLowerCase()!="apple");

// numerical test
//equal to

console.log("IS TEN IS EQUAL TO TWENTY ?");


//not equal to

console.log("IS TEN IS NOT EQUAL TO TWENTY ?");

console.log(ten==twenty);
console.log("IS TEN IS GREATER THEN ZERO?");

console.log(ten>0);

// less than 

console.log("IS TWENTY IS  TO 1LESS THAN 0");

console.log(twenty<10);

//greatr then or equal to

console.log("IS TEN IS GREATER THAN OR EQUAL TO 5 ?");

console.log(ten>=5);

// less than or equal to

console.log("IS TWENTY IS LESS THAN EQUAL TO 10");
console.log(twenty<=10);

// test using "and" & "or"operaters

console.log("is twenty is not qual to 10 and twenty is grater than 10");
console.log(twenty!=10 && twenty!=10);

console.log("twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty!=10&&twenty>30);
//using ||(or)

console.log("2o is greater than 50 or 20 is equal o 20");
console.log(20 >50|| 20==20);


console.log("20 is greater than 50 or 20 is not equal to 20");
console.log(20>50 || 20 !=20);

//test wheather an item is include in array of 

console.log("is mango include in my fruit array");
console.log(fruit.includes("mango"));
console.log("is mango not include in my fruit array  ");

console.log(!fruit.includes("mango"));
