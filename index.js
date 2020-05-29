const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// TEMPLATE
// let doubledAndSummed = [1, 2, 3].reduce( (total, element) => element * 2 + total)
let totalBatteries = batteryBatches.reduce( (batteryBatches, element) => element + batteryBatches )


