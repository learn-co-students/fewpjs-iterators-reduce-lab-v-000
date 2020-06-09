const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let totalBatteries = batteryBatches.reduce((total,element) => element + total)


/*
function reducer(inputArray) {
    console.log(inputArray)
    let batteries = function(inputArray) {
        let totalBatteries = batteryBatches.reduce((total,element) => element + total);
    } 
}
*/



/*

let doubledAndSummed = [1, 2, 3].reduce( (total, element) => element * 2 + total)
// => 11

The initialization value can be changed:

let doubledAndSummedFromTen = [1, 2, 3].reduce( (total, element) => element * 2 + total, 10)

*/