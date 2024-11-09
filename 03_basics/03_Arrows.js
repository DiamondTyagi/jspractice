//user = {
   /* name: "Harry",
    price: 999,
    welcomemessage: function(){
       console.log(`${this.name}, how are you?`);
       console.log(this);
    }
//}
//user.name = "Diamond";
//user.welcomemessage();
console.log(this);*/
/*const chai = function(){
    let username = "hitesh"
    console.log(this);
}
chai();*///undefined answer with this.name and a lot of things answer as "this"

//+++++++++++++++Arrow function
//const chat = () => {
 /*   let username = "Sameer";
    console.log(this);
}*/
//chat();// {} is the answer with this keyword in arrow function

/*const addTwo = (num1, num2) => (num1 + num2);
const Two = (num3, num4) => ({username: "Diamond"});
console.log(addTwo(15,20));
console.log(Two(3,4));*/

(function chai() {
    console.log("Spring connected");
})();
(() => {
    console.log("Spring connected again");
})()//Immediate invoked function expression is basically used when we want a function to be prevented from the traffic of the global scope.