// let breakfast ="water";
// let lunch = "rice";
// let dinner = "baked potato"


// console.log(`today i ate ${breakfast} for breakfast, ${lunch} for lunch, ${dinner} for dinner`);

// const date1 = new Date();
// const date2 = new Date(2021, 9, 23);
// const diffTime = Math.ceil((date2 - date1) / (1000 * 60 * 60 *24))
// console.log(diffTime);



// const space1 = "x"
// const space2 = "o"
// const space3 = " "
// const space4 = "x"
// const space5 = "x"
// const space6 = " "
// const space7 = "o"
// const space8 = " "
// const space9 = " "

// const array = ["     |     |     ", `  ${space1}  |  ${space2}  |     `,"     |     |     ","------------------", "     |     |     ", `  ${space2}  |  ${space2}  |     `, "     |     |     ","------------------", "     |     |     ", `  ${space2}  |     |     `,"     |     |     "]

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
// }

// let weather = "sunny";

// if (weather == "sunny") {
//     console.log("i'd better wear sunscreen");
// } else if (weather == "rainy") {
//     console.log("better take an umbrella");
// } else {
//     console.log("hmm could go either way");
// }

// let num = "10"
// if (num !== "10") {
//     console.log("ok");
// } else {
//     console.log("great")
// }

// let place = "manc"
// let weather = "cloudy"
// if (place == "manc" && weather == "sunny") {
//     console.log("check again")
// } else if (place == "manc" && weather == "rain"){
//     console.log("";
// 

// age checker

// const age = 18
// const country = "UK"

// if (age > 17 && country === "UK") {
//     console.log("yes, i can serve you");
//     } else {
//         console.log("you arn't old enough");
//     }

// pizza toppings

// const topping = "jalgdf"

// switch (topping) {
//     case "pepperoni":
//         console.log("This is an important topping");
//         break;
//     case "jalapeno":
//         console.log(`i dont mind having ${topping} on my pizza`);
//         break
//     default:
//         console.log(`i dont like ${topping}`);
//         break;
// }

// password checker

// const password = "sfhjh"

// if (password.length < 8) {
//     console.log("password is too short");
//     } else {
//         console.log(password);
//     }

// divisible by 3 or 5

// const num = 31

// if (num % 3 == 0 || num % 5 == 0){
//     console.log(`${num} is divisble by 3 or 5`);
// } else {
//     console.log(`${num} is not divisible by 3 or 5`);
// }

// fizzbuzz

// const num = 7

// if (num % 3 === 0 && num % 5 === 0) {
//     console.log("fizzbuzz");
// } else if (num % 3 === 0) {
//     console.log("fizz");
// } else if (num % 5 === 0) {
//     console.log("buzz");
// } else {
//     console.log("no fizz or buzz here");
// }


// const num = 1001

// let reverse = num.toString().split("").reverse().join("")
// console.log(reverse);
// if(reverse == num){
//     console.log("palindrome");
// } else if (reverse != num) {
//     console.log("not palindrome");
// }


// const num = 1561
// const str = num.toString()
// const j = str.length-1
// for (let index = 0; index < j / 2; index++) {
//     forward = str[0]
//     backwards = str[j - index]
// }
// if (forward == backwards) {
//     console.log("palindrome");
// } else {
//     console.log("not palindrome");
// }

// const num = 111
// const str = num.toString()
// const j = str.length-1
// let reverse = ""
// for (let i = j; i >= 0; i--){
//     reverse = reverse+=str[i]
// }
// if (reverse == num){
//     console.log("palindrome");
// } else {
//     console.log("not palindrome");
// }


// time location

// const time = 18
// const townOfHome = "manchester"
// const placeOfWork = "home working"

// if (time < 10) {
//     console.log(`i am in ${townOfHome}`);
// } else if (time >= 10 && time <= 17){
//     console.log(`i am at ${placeOfWork}`);
// } else {
//     console.log("i am commuting");
// }

// last vowel in string

const vowels = ["a", "e", "i", "o", "u"]
const str = "fjadkilegdojfsdgssrif"

for (let index = str.length; index >=0 ; index--) {
    if (vowels.includes(str[index])){
    
        console.log(index);
        break
    }
}






// first and last letter same? 2 methods

// const word = "hello"
// if (word.endsWith(word[0]) == true){
//     console.log("same letter");
// }
// else if ((word.endsWith(word[0]) != true)) {
//     console.log("different letters");
// }

// const word2 = "helloh"
//     if(word2[0] === word2[word2.length-1]){
//         console.log("same letter");
//     } else {
//         console.log("different letters");
//     }

// num1 num2 result even or odd

// const num1 = 4
// const num2 = 5
// const sum = num1 + num2
// if(sum % 2 == 0){
//     console.log(sum);
// } else {
//     console.log(num1 * num2);
// }