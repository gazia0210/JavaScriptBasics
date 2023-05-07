/*var even = [12, 13, 14, 16];
let scores = even.filter(even=>even%2 == 0);
console.log(scores);
let mapping = score.map(even=> even*2);
console.log(mapping); */

//Chaining in array

var scores = [ 10, 12, 13, 14, 16];
let sumValues = scores.filter(scores=>scores%2 == 0).map(scores=> scores*3).reduce((sum,value)=>sum+value, 0);
console.log(sumValues)
