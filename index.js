const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0);










// FIX CODE FOR REDUCE LAB
// function ourReduce(couponLocations, couponCounter, init) {
//     let totalAmount = init;
//     couponLocations.forEach(coupon => {
//         totalAmount = couponCounter(totalAmount, coupon) });
//     return totalAmount;
// }

// Also typo: `If no initial value is supplies, t`