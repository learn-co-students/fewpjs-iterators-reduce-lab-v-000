const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Create a new variable called totalBatteries which is the sum of all of the 
// battery amounts in the batteryBatches array. Naturally, use reduce() for this!

const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0);

// above is with the arrow syntax and below is without arrow sytanx
// const totalBatteries = batteryBatches.reduce(function(batch, total) {
//     return batch + total
// }, 0);
