const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
//Create a new variable called totalBatteries which is the sum of all of the
//battery amounts in the batteryBatches array. Naturally, use reduce() for this!


const reducer = (accumulator, currentValue) => accumulator + currentValue

const totalBatteries = batteryBatches.reduce(reducer)

//console.log(couponLocations.reduce(couponCounter, 0)); // also prints 15!

//incoming_students.reduce( (houses, student) => houses[sorting_hat.assign(student)].push(student) , hogwarts_houses)


//console.log(couponLocations.reduce(couponCounter, 0)); // also prints 15!
