/*var even = [10, 12, 13, 14, 16];
var evenScore = []
for( let i = 0 ; i < even.length; i++)
{
    if(even[i]%2 == 0){
        evenScore.push(even[i])

    }
}
console.log(evenScore) */

var even = [10, 12, 13, 14,16];
let scores = even.filter(even=>even%2 == 0);
console.log(scores)