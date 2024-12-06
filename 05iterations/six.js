const Mynums = [1, 2, 3, 4 , 5, 6, 7, 8, 9, 10];
// const Mynumrs = Mynums.map((numb) => numb + 10);
const Mynumrs = Mynums.map((nums) => nums* 10)
                      .map((nums) => nums+1)
                      .filter((nums) => 56);
console.log(Mynumrs);