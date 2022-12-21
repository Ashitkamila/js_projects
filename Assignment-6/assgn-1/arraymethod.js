//map() method
console.log('==================Example-1==================');

const numsArr = [100,200,300,400,500]
const newNumsArr = numsArr.map((value, index, arr) => {
    return value + 10
})
console.log(numsArr);  
console.log(newNumsArr); 

console.log('==================Example-2==================');

const arr2 = [2,4,6,25];
const sqrArr2 = arr2.map(n=>n*3);
console.log(arr2);
console.log(sqrArr2);

console.log('==================Example-3==================');

const mobile3 = [
    {
       brand : 'Nokia',
       color : 'Black',
       storage :'64GB' 
    },{
        brand : 'Samsung',
        color : 'Red',
        storage :'128GB' 
     },{
        brand : 'Nokia',
        color : 'White',
        storage :'320GB' 
     },
]

const mobileCopy3 = mobile3.map(n=>{
    const mobileShallowCopy3 = {...n}
    let mobileShallowCopy4 = mobileShallowCopy3.storage=('Storage-','720GB')
    return mobileShallowCopy4
})
console.log(mobileCopy3);

console.log('==================Example-4==================');

let person = [
    {
        fName: "sagar",
        lName: "mohapatra",
        age: 29
    }
    ,
    {
        fName: "sipu",
        lName: "mohapatra",
        age: 35
    },
    {
        fName: "rohit",
        lName: "sethi",
        age: 35
    }
]
let pesonAgeIncrement = person.map(ages => {
    let b = { ...ages }
    b.age = b.age + 10
    return b
})
console.log(pesonAgeIncrement);
console.log(person)

console.log('==================Example-5==================');
let product = [
    {
        productN: "watch",
        brand: "mi",
        price: 230

    },
    {
        productN: "mobile",
        brand: "apple",
        price: 2367

    },
    {
        productN: "t-shirt",
        brand: "levi",
        price: 1300

    }
]
let productNew = product.map(value => {
    let c = { ...value }
    c.price = c.price * 0.3 + c.price
    return c
})
console.log(productNew);

// filter method
// 1-

let valuea = [23, 45, 78, 90, 34]
let newValue = valuea.filter(values => {
    return values % 2
})
console.log(newValue);

// 2-
let productAS = [
    {
        productN: "watch",
        brand: "mi",
        price: 230

    },
    {
        productN: "mobile",
        brand: "apple",
        price: 2367

    },
    {
        productN: "t-shirt",
        brand: "levi",
        price: 1300

    }
]
let newProduct = productAS.filter(data => {
    return data.price > 1000
})
console.log(newProduct);


// 3-
let newvalue = [10, 20, 32, 60]
let filnew = newvalue.filter(dataone => {
    return dataone % 10 === 0
})
console.log(filnew);

// join
// 1-
let value20 = [1, 20, 30, 40, 50]
let newvalue1 = value20.join()
console.log(newvalue1);//same value

// 2-
let value29 = [12, 34, 45, 567]
let res = value29.join("")
console.log(res);// 123445567
3//
let str = ["sagar", "sipu", "dato", "don"]
let srt1 = str.join(":-")
console.log(srt1);

// reduce method

// a reduce method execute a reduce function on each each element of the array,
// resulting in single output value.
// 1-
let valuew = [5, 3, 5, 7, 9]
let newdata = valuew.reduce((acc, pre) => {
    return acc + pre
})
console.log('newdata : ',newdata);

// 2-
let valueEwq = [5, 3, 5, 7, 9]
let newdattwo = valueEwq.reduce((acc, pre) => {
    return acc * pre
})
console.log(newdattwo);
// 3-

let valuethree = [5, 30, 50, 70, 90]
let newdatfoure = valuethree.reduce((acc, pre) => {
    return acc - pre
})
console.log(newdatfoure);


let valueten = [5, 30, 50, 70, 90]
let newdatnine = valueten.reduce((acc, pre) => {
    return acc + pre
})
console.log(newdatnine);

// String
// toUpperCase.

let up = "hello"
let fin = up.toUpperCase()
console.log(fin);


let up1 = "sagar";
let fin2 = up1.toUpperCase()
console.log(fin2);

// toLowerCase


let downe = "Ashit Kamila"
let fin10 = downe.toLowerCase()
console.log(fin10);

let down = "ASHIT";
let fin234 = down.toLowerCase()
console.log(fin234);


// chartAt
let chart = "ashit kumar"
console.log(chart.charAt(7));

let charat = "kumar kamila"
console.log(charat.charAt(8));


// index of

let indexoff = "sagnnnmar mohapatra"
console.log(indexoff.indexOf("m", 4));

let indexoff900 = "sagarmohapatrha"
console.log(indexoff900.indexOf("h", 10));



// concat


let con = "ashit"
let confin = con.concat(",", "all")
console.log(confin);


let confine = "pappu"
let condata = confine.concat(",", con, ",", "all")

console.log(condata);


// includes

let inclu = "ashit all"
let innoon = inclu.includes("noon")
console.log(innoon);


let infine1 = "sipu done"
let infine23 = infine1.includes("done")
console.log(infine23);


// subsrt
let dataone = "hello all , welcome to javascript session"
let dataview = dataone.substr(1, 7)
console.log(dataview);


let datatwo = dataone.substr(5, 10)
console.log(datatwo);

// substring

const substringval = dataone.substring(1, 4)
console.log(substringval);


// trim

const email = "           sagarkuamrmohapatra6@gmail.com       "
const emailafter = email.trim()
console.log(emailafter);
const gmail = "           sagarkuamrmohapatra6@gmail.com       "

console.log(gmail.trimStart());
