
var mobile = new Array('Apple',25000,true,undefined,null,{color:'black'})
for(var i=0; i<mobile.length;i++){
    console.log(mobile[i]);
}

var laptop = new Array('lenovo',40000,true,undefined,null,{color:'white'})
for(var i=0; i<laptop.length;i++){
    console.log(laptop[i]);
}

var refrigetor = new Array('lg',23000,true,undefined,null,{color:'red'})
for(var i=0; i<refrigetor.length;i++){
    console.log(refrigetor[i]);
}
var bike = new Array('bajaj',85000,true,undefined,null,{color:'black'})
for(var i=0; i<bike.length;i++){
    console.log(bike[i]);
}
var student = new Array('sagar',25,true,undefined,null,{height:'170CM'})
for(var i=0; i<student.length;i++){
    console.log(student[i]);
}


var pen=new Array(3);
pen.name='Renold';
pen.color='white';
pen.allDetails=function()
{
    return `name=${pen.name}, color=${pen.color}`;
}

console.log(pen);
for(var a in pen)
{
    console.log(pen[a]);
}