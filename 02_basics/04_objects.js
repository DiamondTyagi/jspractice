/*let userheld = {
/*    name: "Diamond",
    fullname: {
        userfullname : {
            firstname: "D",
            Lastname: "Tyagi",
        },
    }
}
console.log(userheld.fullname.userfullname.Lastname);*/
/*const obj1 = {1: "a", 2: "b", 3: "c"};
const obj2 = {2: "b", 3: "d", 4: "e"};
const Obl = Object.assign({}, obj1, obj2);
console.log(Obl);//assign() is use to join the 2 objects.*/
const course = {
    coursename : "js",
    price : 999,
    coursenuser: "Diamond",
};
const {coursenuser: user} = course;
console.log(user);//de-structure of an ojbect.