const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// let totalBatteries = batteryBatches.reduce();
let totalBatteries = batteryBatches.reduce((sum, group) => sum + group, 0); // sum will start at 0 thanks to parameter that is 0