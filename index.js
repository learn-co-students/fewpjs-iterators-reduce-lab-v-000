const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// const totalBatteries = batteryBatches.reduce(function(total, battery) {
//     return total + battery;
// }, 0);

const totalBatteries = batteryBatches.reduce((total, battery) => total + battery, 0);