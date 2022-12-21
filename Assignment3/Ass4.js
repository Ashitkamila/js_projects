//named function
function reverseStringUsingNamedFunction(n)
{
    let str='';
    for(let i=n.length-1;i>=0;i--)
    {
        str+=n[i];
    }
    console.log(str);
}

let string1='Rambo'
reverseStringUsingNamedFunction(string1 );

//selfInvoke Function

(function(n)
{
    let str='';
    for(let i=n.length-1;i>=0;i--)
    {
        str+=n[i];
    }
    console.log(str);
})(string1)

//anonymous function
 
let reverseStringUsingAnonymousFunction=function(n)
{
    let str='';
    for(let i=n.length-1;i>=0;i--)
    {
        str+=n[i];
    }
    console.log(str);
}
reverseStringUsingAnonymousFunction(string1);

//Arrow Function

let reverseStringUsingAroowFunction=(n)=>
{
    let str='';
    for(let i=n.length-1;i>=0;i--)
    {
        str+=n[i];
    }
    console.log(str);
}

reverseStringUsingAroowFunction(string1);