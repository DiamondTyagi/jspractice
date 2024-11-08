const sybol = Symbol("key");
const MyObj = {
    name : "Diamond",
    Age: 18,
    emailid: "23@gmail.com",
    [sybol]: "key2",
};
/*console.log(MyObj["name"]);
console.log(MyObj["emailid"])
console.log(MyObj["Age"]);
console.log(MyObj[sybol]);*/
MyObj.greeting = function(){
    console.log("Hello diamond");
}
MyObj.greetintwo = function(){
    console.log(`Hello user, ${this.name}`);
}
console.log(MyObj.greeting());
console.log(MyObj.greetintwo());

