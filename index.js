const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
var totalBatteries = batteryBatches.reduce(function (memo, i) { return memo + i })
// Code your solution here
// Create a new variable called totalBatteries which is the sum of all of the battery amounts in the batteryBatches array.Naturally, use reduce() for this!
// function getTotalAmountForProducts(products) {
//     let totalPrice = 0;

//     products.forEach(product => {
//         totalPrice += product.price;
//     });

//     return totalPrice;
// }

// console.log(getTotalAmountForProducts(products));