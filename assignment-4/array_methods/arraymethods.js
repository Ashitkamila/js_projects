//Five Example of For Each method
//array.forEach(callBackFunction(value,index,array))

let a = [33, 66, 444, 23, 65, 76, 86, 5]
a.forEach(function (v, i, a) {
    console.log(`${i}---${v}`);
})

let b = [9348, 3948, 9834, 479348, 39438, 4938]
b.forEach(function (v, i, a) {
    console.log(`${i}---${v}`);
})

let c = [4383, 7485, 4983, 'adk', 'idjf', 'ghdsk', 'fdks']
c.forEach(function (v, i, a) {
    console.log(`${i}---${v}`);
})

let d = ['dkfsd', 'dkjfdk', null, undefined, 4398439, 58439]
d.forEach(function (v, i, a) {
    console.log(`${i}---${v}`);
})

let e = [348939, 983943, 6, 3, 4, 5, 6]
e.forEach(function (v, i, a) {
    console.log(`${i}---${v}`);
})

//Five example of push method
//it will add element to the last of the array and return length of array

let a1 = [33, 66, 444, 23, 65, 76, 86, 5]
let getFromA = a1.push('push');
console.log(a1);
console.log(`After push Array length is ${getFromA}`);


let b1 = [9348, 3948, 9834, 479348, 39438, 4938]
let getFromB = b1.push('push');
console.log(b1);
console.log(`After push Array length is ${getFromB}`);


let c1 = [4383, 7485, 4983, 'adk', 'idjf', 'ghdsk', 'fdks']
let getFromC = c1.push('push')
console.log(c1);
console.log(`After push Array length is ${getFromC}`);


let d1 = ['dkfsd', 'dkjfdk', null, undefined, 4398439, 58439]
let getFromD = d1.push('push')
console.log(d1);
console.log(`After push Array length is ${getFromD}`);


let e1 = [348939, 983943, 6, 3, 4, 5, 6]
let getFromE = e1.push('push')
console.log(e1);
console.log(`After push Array length is ${getFromE}`);


//five example of pop
// it will delete the element from last index and return the deleted element
let a2 = [33, 66, 444, 23, 65, 76, 86, 5]
let deletedFromA = a2.pop();
console.log(a2);
console.log(deletedFromA);

let b2 = [9348, 3948, 9834, 479348, 39438, 4938]
let deletedFromB = b2.push('push');
console.log(b2);
console.log(deletedFromB);

let c2 = [4383, 7485, 4983, 'adk', 'idjf', 'ghdsk', 'fdks']
let deletedFromC = c2.push('push');
console.log(c2);
console.log(deletedFromC);

let d2 = ['dkfsd', 'dkjfdk', null, undefined, 4398439, 58439]
let deletedFromD = d2.push('push');
console.log(d2);
console.log(deletedFromD);

let e2 = [348939, 983943, 6, 3, 4, 5, 6]
let deletedFromE = e2.push('push');
console.log(e2);
console.log(deletedFromE);


//five example of Shift() method
//it will remove first element from the array and return it and if array is empty then it will return undefined

let a3 = [33, 66, 444, 23, 65, 76, 86, 5]
let shiftedElementFromA = a3.shift();
console.log(a3);
console.log(shiftedElementFromA);

let b3 = [9348, 3948, 9834, 479348, 39438, 4938]
let shiftedElementFromB = b3.shift();
console.log(b3);
console.log(shiftedElementFromB);

let c3 = [4383, 7485, 4983, 'adk', 'idjf', 'ghdsk', 'fdks']
let shiftedElementFromC = b3.shift();
console.log(c3);
console.log(shiftedElementFromC);

let d3 = ['dkfsd', 'dkjfdk', null, undefined, 4398439, 58439]
let shiftedElementFromD = d3.shift();
console.log(d3);
console.log(shiftedElementFromD);

let e3 = [348939, 983943, 6, 3, 4, 5, 6]
let shiftedElementFromE = e3.shift();
console.log(e3);
console.log(shiftedElementFromE);


//five example of Unshift() method
//it will insert new element in start of the array and return 

let a4 = [33, 66, 444, 23, 65, 76, 86, 5]
let unshiftElementFromA = a4.unshift('unshift')
console.log(a4);
console.log(unshiftElementFromA);

let b4 = [9348, 3948, 9834, 479348, 39438, 4938]
let unshiftElementFromB = b4.unshift('unshift')
console.log(b4);
console.log(unshiftElementFromB);

let c4 = [4383, 7485, 4983, 'adk', 'idjf', 'ghdsk', 'fdks']
let unshiftElementFromC = c4.unshift('unshift')
console.log(c4);
console.log(unshiftElementFromC);

let d4 = ['dkfsd', 'dkjfdk', null, undefined, 4398439, 58439]
let unshiftElementFromD = d4.unshift('unshift')
console.log(d4);
console.log(unshiftElementFromD);

let e4 = [348939, 983943, 6, 3, 4, 5, 6]
let unshiftElementFromE = e4.unshift('unshift')
console.log(e4);
console.log(unshiftElementFromE);


//five Example of Includes() method
//includes(element,from Index) it will check whether a element is there or not if there then it will return true otherwise return false

let a5 = [33, 66, 444, 23, 65, 76, 86, 5]
let includeFromA = a5.includes(444)
let includeFromA1 = a5.includes(23, 1)
console.log(includeFromA);
console.log(includeFromA1);

let b5 = [9348, 3948, 9834, 479348, 39438, 4938]
let includeFromB = b5.includes(3948)
let includeFromB1 = b5.includes(23, 1)
console.log(includeFromB);
console.log(includeFromB1);

let c5 = [4383, 7485, 4983, 'adk', 'idjf', 'ghdsk', 'fdks']
let includeFromC = c5.includes('idjf')
let includeFromC1 = c5.includes(23, 1)
console.log(includeFromC);
console.log(includeFromC1);

let d5 = ['dkfsd', 'dkjfdk', null, undefined, 4398439, 58439]
let includeFromD = d5.includes(null)
let includeFromD1 = d5.includes(23, 1)
console.log(includeFromD);
console.log(includeFromD1);

let e5 = [348939, 983943, 6, 3, 4, 5, 6]
let includeFromE = e5.includes(4)
let includeFromE1 = e5.includes(23, 1)
console.log(includeFromE);
console.log(includeFromE1);


//five example of indexOf()
//array.indexOf(element,fromIndex) it will give the index of searched element if it is present if elemet is not present then it will give -1;

let a6 = [33, 66, 444, 23, 65, 76, 86, 5]
let indexOfElementInA = a6.indexOf(65)
let indexOfElementInA1 = a6.indexOf(65, 3)
console.log(indexOfElementInA);
console.log(indexOfElementInA1);

let b6 = [9348, 3948, 9834, 479348, 39438, 4938]
let indexOfElementInB = b6.indexOf(39438)
let indexOfElementInB1 = b6.indexOf(4938, 3)
console.log(indexOfElementInA);
console.log(indexOfElementInA1);

let c6 = [4383, 7485, 4983, 'adk', 'idjf', 'ghdsk', 'fdks']
let indexOfElementInC = c6.indexOf('idjf')
let indexOfElementInC1 = c6.indexOf('ghdsk', 3)
console.log(indexOfElementInC);
console.log(indexOfElementInC1);

let d6 = ['dkfsd', 'dkjfdk', null, undefined, 4398439, 58439]
let indexOfElementInD = d6.indexOf(undefined)
let indexOfElementInD1 = d6.indexOf(58439, 3)
console.log(indexOfElementInD);
console.log(indexOfElementInD1);

let e6 = [348939, 983943, 6, 3, 4, 5, 6]
let indexOfElementInE = e6.indexOf(983943)
let indexOfElementInE1 = e6.indexOf(6, 3)
console.log(indexOfElementInE);
console.log(indexOfElementInE1);


//five example of isArray() method
//Array.isArray([] or any parameter) it will check it was a array or not if it was then it will return true if not it will return false

let a7 = [33, 66, 444, 23, 65, 76, 86, 5]
let isArrayReturnFromA = Array.isArray(a6)
console.log(isArrayReturnFromA);

let b7 = [9348, 3948, 9834, 479348, 39438, 4938]
let isArrayReturnFromB = Array.isArray(b7)
console.log(isArrayReturnFromB);

let c7 = [4383, 7485, 4983, 'adk', 'idjf', 'ghdsk', 'fdks']
let isArrayReturnFromC = Array.isArray(c7)
console.log(isArrayReturnFromC);

let d7 = ['dkfsd', 'dkjfdk', null, undefined, 4398439, 58439]
let isArrayReturnFromD = Array.isArray(d7)
console.log(isArrayReturnFromD);

let e7 = [348939, 983943, 6, 3, 4, 5, 6]
let isArrayReturnFromE = Array.isArray(e7)
console.log(isArrayReturnFromE);