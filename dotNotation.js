// for (let index = 0; index < 9 ;index++) {
//     console.log("     |      |     ");
//     while (index === 2 | index === 5){
//         console.log("-----------------");
//         break
//     }
    
// }
// console.log("hello world".toUpperCase().charAt(8));
// function confirmEnding(string, target) {

//     return string.endsWith(target);
// }
// console.log(confirmEnding("Hello World", "d"));

let answer = (string, target) => {

    return string.endsWith(target);
}

console.log(answer("hello world", "d"));