//named function
function factorialUsingNamedFunction(n)
{
    let fact=1;
    while(n!=0)
    {
        fact*=n;
        n-=1;
    }
    console.log(fact);
}
factorialUsingNamedFunction(3);
//anonymous function
let factorialUsingAnonymousFunction=function(n)
{
    let fact=1;
    while(n!=0)
    {
        fact*=n;
        n-=1;
    }
    console.log(fact);
}

factorialUsingAnonymousFunction(5);

//Self Invoke function

(function(n)
{
    let fact=1;
    while(n!=0)
    {
        fact*=n;
        n-=1;
    }
    console.log(fact);
})(4)

//Arrow function
let factorialUsingArrowFunction=(n)=>
{
    let fact=1;
    while(n!=0)
    {
        fact*=n;
        n-=1;
    }
    console.log(fact);
}
factorialUsingArrowFunction(6);