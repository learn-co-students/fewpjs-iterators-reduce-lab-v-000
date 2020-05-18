const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const totalBatteries = batteryBatches.reduce( 
  // (batteryTotal, batch) => batteryTotal + batch,
  // 0
  (batteryTotal, batch) => batteryTotal + batch
);