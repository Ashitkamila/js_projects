//using for in loop of Object

console.log('...........example-1...........');

var bike = {
    brand : 'honda',
    model : 'activa',
    price : 70000,
    milege : '50km'
}
for (var key in bike){
    console.log(`${key}-${bike[key]}`);
}
console.log('...........example-2...........');

var mobile = {
    brand : 'samsung',
    model : 'A-50',
    price : 15000,
    color : 'White'
}

for (var key in mobile){
    console.log(`${key}-${mobile[key]}`);
}

console.log('...........example-3...........');
var person = {
    firstName : 'Rahul',
    lastName : 'Kumar',
    age : 30,
    weight : '65kg'
}

for (var key in person){
    console.log(`${key}-${person[key]}`);
}

//using for in loop in Array

console.log('...........example-1...........');

var arrs1 = ['Ashit','Raju','Hari','Ram']
for (var i in arrs1){
    console.log(`name of i ${i}-${arrs1[i]}`);
}

console.log('...........example-2...........');

var arrs2 = ['Apple','Nokia','Samsung','Vivo']
for (var index in arrs2){
    console.log(`Mobile of index ${index}-${arrs2[index]}`);
}

console.log('...........example-3...........');

var arrs3 = ['BMW','Honda','Suzuki','TATA']
for (var i in arrs3){
    console.log(`name of i ${i}-${arrs3[i]}`);
}

//using for of loop in Array

console.log('...........example-1...........');

var name1 = ['Ashit','Raju','Hari','Ram']
for(var num of name1){
    console.log(name1);
}

console.log('...........example-2...........');

var bike1 = ['Bajaj','Hero','TVS','Suzuki']
for(var bike of bike1){
    console.log(bike1);
}

console.log('...........example-3...........');

var pens = ['Parker','Reynolds','Cello','Elkos']
for(var num of pens){
    console.log(pens);
}


