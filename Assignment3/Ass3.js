//Named function


 function bubbleShortUsingNamedFunction(n)
 {
     for(let i=0;i<n.length;i++)
     {
         for(let j=0;j<(n.length-1-i);j++)
         {
             if(n[j]>n[j+1])
             {
                 let temp =n[j];
                 n[j]=n[j+1];
                 n[j+1]=temp;
             }
         }
     }
     console.log(n);
 }
  let arr=[4,7,1,55,22,66];
 bubbleShortUsingNamedFunction(arr)

//selfInvoked function

let arr2=[67,98,34,6,475,23,4,1];
(function(n)
{
    for(let i=0;i<n.length;i++)
    {
        for(let j=0;j<n.length-1-i;j++)
        {
            if(n[j]>n[j+1])
            {
                let temp =n[j];
                n[j]=n[j+1];
                n[j+1]=temp;
            }
        }
    }
    console.log(n);
})(arr2)

//Arrow function
let bubbleShortUsingArrowFunction=(n)=>{
    for(let i=0;i<n.length;i++)
    {
        for(let j=0;j<n.length-1-i;j++)
        {
            if(n[j]>n[j+1])
            {
                let temp =n[j];
                n[j]=n[j+1];
                n[j+1]=temp;
            }
        }
    }
    console.log(n);
}
let arr3=[67,98,34,6,475,23,4,1];
bubbleShortUsingArrowFunction(arr3);

//Anonymous Function

let bubbleShortUsingAnonymousFunction=function(n)
{
    for(let i=0;i<n.length;i++)
    {
        for(let j=0;j<n.length-1-i;j++)
        {
            if(n[j]>n[j+1])
            {
                let temp =n[j];
                n[j]=n[j+1];
                n[j+1]=temp;
            }
        }
    }
    console.log(n);

}
let arr4=[67,98,34,6,475,23,4,1];
bubbleShortUsingAnonymousFunction(arr4)