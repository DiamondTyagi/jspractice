const MyArry = [0, 1, 2, 3, 4];
//console.log(MyArry.shift());//(unshift)use to insert elements at the start of the array.
//shift() used to remoce the elements from the starting of the array.
//join method to convert the array to string.
//console.log(MyArry.indexOf(30));
//console.log(MyArry.includes(4));
//console.log(MyArry.push(6));;
//console.log(MyArry.pop());
console.log("A", MyArry);
const Myn1 = MyArry.slice(1,3);
console.log("B", Myn1);
console.log("C", MyArry);
const Myn2 = MyArry.splice(1,3);
console.log("D", Myn2);
console.log("E", MyArry);
//slice keeps the element from the (1,2) only whereas returning the original array, whereas splice gives the element from the (1,3), whereas returning the array in a modifies form
