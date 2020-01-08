const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

/* const sum = numbers.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
    },0) */

let totalBatteries = batteryBatches.reduce((totalAmount, number) => {
   return totalAmount + number;
}, 0);

