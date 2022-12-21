//Second largest number

//named function

function secondLargestNoUsingNamedFunction(n)
{
    let max1=n[0];
    let max2=n[0];
    for(let i=1;i<n.length;i++)
    {
        if(max1<n[i])
        {
           max2=max1;
           max1=n[i]
        }
        else if(max2<n[i]||max1===max2)
        {
            max2=n[i];
        }
    }
    console.log(max2);
}


arr1=[23,65,6,56,4,23,45,465,65,6,6,7,6,76,7,8,7,]
secondLargestNoUsingNamedFunction(arr1);

//SelfInvoked function

(function(n)
{
    let max1=n[0];
    let max2=n[0];
    for(let i=1;i<n.length;i++)
    {
        if(max1<n[i])
        {
           max2=max1;
           max1=n[i]
        }
        else if(max2<n[i]||max1===max2)
        {
            max2=n[i];
        }
    }
    console.log(max2);
})(arr1)


//Anonymous function
let secondLargestNoUsingAnonymousFunction=function(n)
{
    let max1=n[0];
    let max2=n[0];
    for(let i=1;i<n.length;i++)
    {
        if(max1<n[i])
        {
           max2=max1;
           max1=n[i]
        }
        else if(max2<n[i]||max1===max2)
        {
            max2=n[i];
        }
    }
    console.log(max2);
}

secondLargestNoUsingAnonymousFunction(arr1);



//
let secondLargestNoUsingArrowFunction=(n)=>
{
    let max1=n[0];
    let max2=n[0];
    for(let i=1;i<n.length;i++)
    {
        if(max1<n[i])
        {
           max2=max1;
           max1=n[i]
        }
        else if(max2<n[i]||max1===max2)
        {
            max2=n[i];
        }
    }
    console.log(max2);
}
secondLargestNoUsingArrowFunction(arr1);