// const employeeData = []

const loginElement = document.getElementById('login')
loginElement.addEventListener('click', function () {
    // employee object to add the input fields value
    // const employee = {
    //     userName: '',
    //     emailId: '',
    //     age: '',
    //     password: ''
    // }
    const userName = document.getElementById('userName').value
    const mailId = document.getElementById('email').value
    const ageVal = document.getElementById('age').value
    const maleVal = document.getElementById('male')
    const femaleVal = document.getElementById('female')




    const userSubElement1 = document.getElementById('sub1')
    const userSubElement2 = document.getElementById('sub2')
    const userSubElement3 = document.getElementById('sub3')
    const userSubElement4 = document.getElementById('sub4')
    const userSelect = document.getElementById('states').value
    const passId = document.getElementById('password').value
    const acceptId = document.getElementById('accept')

    const userNameValid = validateUserName(userName)
    const emailValid = validEmail(mailId)
    const ageValid = validateAge(ageVal)
    const genderValid = validateGender(maleVal, femaleVal)
    const isUserSub = valideteSub(userSubElement1, userSubElement2, userSubElement3, userSubElement4)
    const isUserSate = validateState(userSelect)
    const passwordValid = validatePassword(passId)
    const isAccepted = validateAccept(acceptId)

    if (userNameValid === true && emailValid === true && isUserSate === true && genderValid === true && isUserSub === true && ageValid === true && passwordValid === true && isAccepted === true) {
        //         const submitElement = document.getElementById('formSubmit')
        // loginElement.addEventListener('submit',function (){
        //     addData()
        // })
        addData()
        document.location.reload()
        // alert('valid')
        // employee.userName = userName
        // employee.emailId = mailId
        // employee.age = ageVal
        // employee.password = passId

        // employeeData.push(employee)
        // displayEmployeeData(employeeData)
    } else {
        alert('not valid')
    }

})

// function displayEmployeeData(empData) {
//     const tableDiv = document.getElementById('tableData')
//     let empTable = `<table class="table" >
//     <thead>
//         <tr>
//         <th>UserName</th>
//         <th>EmailId</th>
//         <th>Age</th>
//         <th>Password</th>
//         </tr>
//     </thead>

//     <tbody>
//     </tbody>`
//     empData.forEach(emp => {
//         empTable += `<tr><td>${emp.userName}</td><td>${emp.emailId}</td><td>${emp.age}</td>
//             <td>${emp.password}</td></tr>`
//     })
//     empTable += `</table>`
//     // display data in table
//     tableDiv.innerHTML = empTable
// }

//user name validation
function validateUserName(userName) {
    if (userName === '') {
        var userErr = document.getElementById('userNameError')
        userErr.innerText = '*Name is required'
        return false
    } else if (!isNaN(userName)) {
        var userErr1 = document.getElementById('userNameError')
        userErr1.innerText = '*Valid name is required'
        return false
    } else {
        var userRight = document.getElementById('userNameError')
        userRight.innerText = ''
        return true
    }
}

//email validation
function validEmail(mailId) {
    let regMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mailId === "") {
        const mailErr = document.getElementById('emailerr')
        mailErr.innerText = '*Email id is required'
        return false
    } else {
        if (mailId.match(regMail)) {
            const mailErr1 = document.getElementById('emailerr')
            mailErr1.innerText = ''
            return true
        }
        else {
            const mailRight = document.getElementById('emailerr')
            mailRight.innerText = '*Valid email id is required'
            return false
        }
    }
}

//age validation
function validateAge(ageVal) {
    if (ageVal === "") {
        const ageErr0 = document.getElementById('ageerr')
        ageErr0.innerText = '*Age is required'
        return false
    } else if (ageVal < 0) {
        x
        const ageErr1 = document.getElementById('ageerr')
        ageErr1.innerText = '*Valid age is required'
        return false
    } else if (ageVal > 150) {
        const ageErr2 = document.getElementById('ageerr')
        ageErr2.innerText = '*Valid age is required'
        return false
    } else {
        const ageRight = document.getElementById('ageerr')
        ageRight.innerText = ''
        return true
    }
}

//gender validation

const subMale = document.getElementById('male').value
const subFemale = document.getElementById('female').value
var valueG;
function validateGender(maleVal, femaleVal) {

    if (maleVal.checked === false && femaleVal.checked === false) {
        const genderErr0 = document.getElementById('gendererr')
        genderErr0.innerText = '*Please select a gender'
        return false
    } else {
        if (maleVal.checked === true) {
            valueG = subMale
            console.log(valueG);
        } else {
            valueG = subFemale
            console.log(valueG);
        }
        const genderRight = document.getElementById('gendererr')
        genderRight.innerText = ''
        return true
    }
}

// subjects validation
const subVal1 = document.getElementById('sub1').value
const subVal2 = document.getElementById('sub2').value
const subVal3 = document.getElementById('sub3').value
const subVal4 = document.getElementById('sub4').value
let storeSub;
function valideteSub(subject1, subject2, subject3, subject4) {
    if (subject1.checked === false && subject2.checked === false && subject3.checked === false &&
        subject4.checked === false) {
        var subjectErr3 = document.getElementById('subError')
        subjectErr3.innerText = "*Please select a the subject"
        return false
    }
    else {
        if (subject1.checked === true) {
            storeSub=subVal1
        }else if (subject2.checked === true) {
            storeSub=subVal2
        }else if (subject3.checked === true) {
            storeSub=subVal3
        }else {
            storeSub=subVal4
        }
        var subjectErr4 = document.getElementById('subError')
        subjectErr4.innerText = ''
        return true
    }

}

//state validation
function validateState(states) {
    // console.log(states);
    if (states === "") {
        const stateSelector = document.getElementById('state1Error')
        stateSelector.innerText = '*Please select a state'
        return false
    }
    else {
        const stateErr = document.getElementById('state1Error')
        stateErr.innerText = ''
        console.log(states);
        return true
    }

}

//password validation
function validatePassword(passId) {
    let pass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (passId.match(pass)) {
        const paswordRight = document.getElementById('passError')
        paswordRight.innerText = ' '
        return true
    } else {
        const paswordErr = document.getElementById('passError')
        paswordErr.innerText = '*Password is required'
        return false
    }
}

//accept validation
function validateAccept(acceptId) {
    if (acceptId.checked === true) {
        const accept = document.getElementById('acceptErr')
        accept.innerText = ''
        return true
    } else {
        const notAccept = document.getElementById('acceptErr')
        notAccept.innerText = '* Please accept terms and conditions'
        return false
    }
}


//Local storage
//array creation - add data
let arr = new Array()
function addData() {
    getData()
    // var valueG;
    console.log(valueG);
    arr.push({
        userName: document.getElementById('userName').value,
        email: document.getElementById('email').value,
        age: document.getElementById('age').value,
        subject: storeSub,
        states: document.getElementById('states').value,
        gender: valueG,
        password: document.getElementById('password').value

    })
    localStorage.setItem('localStorage', JSON.stringify(arr))
    showData();
}

//geting data - storing to local storage
function getData() {
    let string = localStorage.getItem('localStorage')
    if (string !== null) {
        arr = JSON.parse(string)
    }
}

//showing data
function showData() {
    let table = document.getElementById('personalData').getElementsByTagName('tbody')[0]
    getData();
    let newRow = table.insertRow(table.length);
    let x = table.rows.length;
    while (--x) {
        table.deleteRow(x);
    }
    for (let i = 0; i < arr.length; i++) {
        let newRow = table.insertRow(table.length);
        cell1 = newRow.insertCell(0);
        cell2 = newRow.insertCell(1);
        cell3 = newRow.insertCell(2);
        cell4 = newRow.insertCell(3);
        cell5 = newRow.insertCell(4);
        cell6 = newRow.insertCell(5);
        cell7 = newRow.insertCell(6);

        cell1.innerHTML = arr[i].userName
        cell2.innerHTML = arr[i].email
        cell3.innerHTML = arr[i].age
        cell4.innerHTML = arr[i].subject
        cell5.innerHTML = arr[i].states
        cell6.innerHTML = arr[i].gender
        cell7.innerHTML = arr[i].password
    }
}

showData()
//deleting from local storage
function deleteData() {
    localStorage.clear()
    document.location.reload()
    // table.deleteRow(table.length)

}


//close all error message
const clearElement = document.getElementById('clear')
clearElement.addEventListener('click', function () {
    isCleared()
})
function isCleared() {
    const clearName = document.getElementById('userNameError')
    clearName.innerText = ''
    const clearEmail = document.getElementById('emailerr')
    clearEmail.innerText = ''
    const clearAge = document.getElementById('ageerr')
    clearAge.innerText = ''
    const clearPass = document.getElementById('passError')
    clearPass.innerText = ''
    const clearAccept = document.getElementById('acceptErr')
    clearAccept.innerText = ''
}