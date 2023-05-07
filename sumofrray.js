/*var array = [1, 2, 3, 4, 5];
var sum = 0;
for(let i = 0 ; i < array.length ; i++){
    sum = sum + array[i];
    // console.log(sum);
}
console.log(sum); */

var array =[1,2,3,4,5];
var sum = 0;
let total = array.reduce((sum, array) => sum+array, 0)
console.log(total);
