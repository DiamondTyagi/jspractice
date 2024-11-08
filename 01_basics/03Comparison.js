/*console.log(undefined < 0);
console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);*/

/*console.log(null > 0);
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);*/
let Diamond = "what's up";
let Tyagi = Diamond;
Tyagi = "C-10";
console.log(Diamond);
console.log(Tyagi);
//Primitive Data type such as the integer, string etc uses the stack memory which uses the call by value, it means a copy of the data is passed not the original value hence no change in the original data occurs.
let MyObj = {
    email : "xyz@gmail.com",
    upi : "zyx@ybl",
}

let UPI = MyObj;
UPI.email = "riya123@gmail.com";
console.log(MyObj.email);
console.log(UPI.email);
//Non-primitive data types such as functions, arrays and objects uses the Heap memory in which the Call by reference is passed, meaning original thing is also changed in it along with the changes made in the copy 







