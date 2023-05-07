//console.log("hell")

/*for( let i = 1; i<= 10; i++)
{
    if (i%2 == 0 || i%5 ==0){
        console.log(i)
    }
} */

//only print first 3 number

let p = 0;
for (let i =1 ; i<= 10; i++)
{
    if (i%2 == 0)
        {
            p++
            console.log(i);
            if (p == 3){
                break;
            }

        }
}