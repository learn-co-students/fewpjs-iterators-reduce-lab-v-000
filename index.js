const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
function getSum(total, num) {
  return total + num;
}

let totalBatteries = batteryBatches.reduce(getSum, 0)
