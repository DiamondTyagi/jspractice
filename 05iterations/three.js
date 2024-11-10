/*const arr = [1,2,3,4,5];
for (const nums of arr) {
    console.log(nums);
}*/
const map = new Map();
map.set("IN", "India");
map.set("US", "United statets of India");
map.set("Fr", "France");
//console.log(map);
for (const [key, three] of map) {
   console.log(key, "=", three);  
}//iteration of a map