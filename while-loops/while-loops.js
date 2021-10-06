// // define variable, set limit, define what you want variable to do per every loop
// // for loop 
// // (let i = n ; i < n ; i++);

// for(let rep = 1 ; rep <= 10; rep++){
//     console.log(`rep ${rep} of lifting weights`)
// }

// for(let winnieAge = 1 ; winnieAge <= 10 ; winnieAge++){
//     console.log(`Winnie is ${winnieAge} years old`)
// }

// // looping through an array

// let harris = [
//     `Harris`,
//     `Caldwell`,
//     2021 - 2000,
//     `student`,
//     [`winnie`, `margot`, `robbie`]
// ];

// for(let i = 0 ; i <= harris.length ; i++){
//     console.log(harris[i])
// }


// let years = [1991, 2000, 2001, 1980];
// let ages = [];

// for(let i = 0 ; i <= years.length ; i++){
//     ages.push(calcAge = 2021 - years[i])  // .push adds information to array
// }
// console.log(ages)

// // looping backwards

// let harris = [
//     `Harris`,
//     `Caldwell`,
//     2021 - 2000,
//     `student`,
//     [`winnie`, `margot`, `robbie`]
// ];

// for(let i = harris.length - 1 ; i >= 0 ; i--){
//  console.log(harris[i])
// }

// // loop inside a loop


let bills = [22,295,176,440,37,105,10,1100,86,52];
let tips = [];
let totals = [];

for(i = 0 ; i <= bills.length ; i++)

let calcTip = (bill) => {
    if(bill >= 300){
        console.log(`Your original bill was $${bill}, you should tip $${bill * 0.2}, for a total bill of $${bill + (bill * 0.2)}`)
    } else{
        console.log(`Your original bill was $${bill}, you should tip $${bill * 0.15}, for a total bill of $${bill + (bill * 0.15)}`)
    }
} 
console.log(calcTip())








