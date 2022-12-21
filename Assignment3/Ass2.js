

//Anonymous function
var isPrimeNoOrNot = function (n) {
    if (n <= 1) {
        return console.log('not a prime number');
    }
    else {
        var flag = false;
        for (var i = 2; i <= n / 2; i++) {
            if (n % i === 0) 
            {
                var flag = true;
            }
        }
        if (flag) {
            console.log('It is not a prime number');
        }
        else {
            console.log('It is a prime number');
        }
    }
}

isPrimeNoOrNot(7);


//Arrow functtion
isPrimeNoOrNotWithArrow = (n) => {
    if (n <= 1) {
        return console.log('not a prime number');
    }
    else {
        var flag = false;
        for (var i = 2; i <= n / 2; i++) {
            if (n % i === 0) 
            {
                var flag = true;
            }
        }
        if (flag) {
            console.log('It is not a prime number');
        }
        else {
            console.log('It is a prime number');
        }
    }
}

isPrimeNoOrNotWithArrow(6);

//named function

function isPrimeNoOrNotWithNamed(n)
{
    if (n <= 1) {
        return console.log('not a prime number');
    }
    else {
        var flag = false;
        for (var i = 2; i <= n / 2; i++) {
            if (n % i === 0) 
            {
                var flag = true;
            }
        }
        if (flag) {
            console.log('It is not a prime number');
        }
        else {
            console.log('It is a prime number');
        }
    }
}
isPrimeNoOrNotWithNamed(6);


//self Invoked function

(function(n)
{
    if (n <= 1) {
        return console.log('not a prime number');
    }
    else {
        var flag = false;
        for (var i = 2; i <= n / 2; i++) {
            if (n % i === 0) 
            {
                var flag = true;
            }
        }
        if (flag) {
            console.log('It is not a prime number');
        }
        else {
            console.log('It is a prime number');
        }
    }
})(10)