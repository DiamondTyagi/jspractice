const arr = [1, 2, 3];
const MyTotal = arr.reduce(function (acc, currentvalue){
    console.log(`acc ${acc}, currentValue ${currentvalue}`)
    return acc + currentvalue;

}, 0)
console.log(MyTotal);