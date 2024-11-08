const cars = ['maruti', 'honda', 'hyundai'];
const bikes = ['pulsar', 'splendar', 'suzuki'];
//console.log(cars.push(bikes));
//const newarray = cars.concat(bikes)
//console.log(newarray);
/*const newarray = [...bikes, ...cars];//spread method
console.log(newarray);*/ 
const ar = [1,2,3,[4,5,6], [7,9]];
const ty = ar.flat(Infinity);//use to different subarray in one single array
console.log(ty);

console.log(Array.isArray("Diamond"));
console.log(Array.from("Diamond"));
console.log(Array.from({name: "Diamond"}));
const a1=100;
const a2=200;
const a3=300;
console.log(Array.of(a1, a2, a3));

