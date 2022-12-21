const buttonTag = document.getElementById('button')


buttonTag.addEventListener('click', () => {
    const nameInput = document.getElementById('name').value
    const ageInput = document.getElementById('age').value
    const passwordInput = document.getElementById('password').value
    const emailInput = document.getElementById('email').value

    const htmlInput = document.getElementById('html')
    const cssInput = document.getElementById('css')
    const javascriptInput = document.getElementById('javascript')
    const bootstrapInput = document.getElementById('bootstrap')

    const maleInput = document.getElementById('male')
    const femaleInput = document.getElementById('female')

    const agreeInput = document.getElementById('flexCheckDefault')

    const nameInputIsValid = validateName(nameInput)
    const ageInputIsValid = validateAge(ageInput)

    const subjectInputIsValid = validateSubject(htmlInput, cssInput, javascriptInput, bootstrapInput)
    const genderInputIsValid = validateGender(maleInput, femaleInput)
    const passwordInputIsValid = validatePassword(passwordInput)
    const emailInputIsValid = validateEmail(emailInput)
    const agreeInputIsValid = validateAgree(agreeInput)


if(subjectInputIsValid && genderInputIsValid && passwordInputIsValid && emailInputIsValid && agreeInputIsValid){
    alert('All are valid')
}else{
    alert('not valid')
}







    
});



//Terms and condition

function validateAgree(agreeInput) {
    if (agreeInput.checked === true) {
        agreeErrorShow(true)
        return true;

    } else {
        agreeErrorShow(false)
        return false
    }
}
function agreeErrorShow(booleanValue) {
    const termsSpanTag = document.getElementById('termsSpan')
    if (booleanValue) {
        termsSpanTag.innerText = ''
        termsSpanTag.style.display = 'none'
        return true
    } else {
        termsSpanTag.innerText = 'Please check terms and condition'
        termsSpanTag.style.display = 'block'
        termsSpanTag.style.color = '#FF6347'
    }
}


//Gender validation
function validateGender(maleInput, femaleInput) {
    if (maleInput.checked === true || femaleInput.checked === true) {
        genderErrorShow(true)
        return true;
    } else {
        genderErrorShow(false)
        return false;
    }
}
function genderErrorShow(booleanValue) {
    const inputGenderSpan = document.getElementById('genderSpan')
    if (booleanValue) {
        inputGenderSpan.innerText = ''
        inputGenderSpan.style.display = 'none'
        return true
    } else {
        inputGenderSpan.innerText = 'Please select the Gender'
        inputGenderSpan.style.display = 'block'
        inputGenderSpan.style.color = '#FF6347'
    }
}




//Subject validation

function validateSubject(htmlInput, cssInput, javascriptInput, bootstrapInput) {
    if (htmlInput.checked === true || cssInput.checked === true || javascriptInput.checked === true || bootstrapInput.checked === true) {
        subjectErrorShow(true)
        return true;

    } else {
        subjectErrorShow(false)
        return false
    }
}
function subjectErrorShow(booleanValue) {
    const inputSubjectSpan = document.getElementById('subjectSpan')
    if (booleanValue) {
        inputSubjectSpan.innerText = '';
        inputSubjectSpan.style.display = 'none'


    } else {
        inputSubjectSpan.innerText = 'Please select atleast one Subject'
        inputSubjectSpan.style.color = '#FF6347'
    }
}







//Name validation
function validateName(inputName) {
    if (inputName) {
        if (/^[a-zA-Z]*$/g.test(inputName)) {
            showInputNameError(false, '', 'nameSpan')
            return true
        }
        else {
            showInputNameError(true, 'Name should only contain Alphabate', 'nameSpan')
            return false
        }
    } else {
        showInputNameError(true, 'Name cannot be blanked', 'nameSpan')
        return false
    }
}

function showInputNameError(booleanValue, msg, id) {
    let nameSpanTag = document.getElementById(id)
    let nameTag=document.getElementById('name')
    if (booleanValue) {
        nameSpanTag.innerText = msg
        nameSpanTag.style.display = 'block'
        nameSpanTag.style.color = '#FF6347'
        nameTag.style.border = '3px solid red'
    }
    else {
        nameSpanTag.innerText = msg
        nameSpanTag.style.display = 'none'
        nameTag.style.border = ''
    }
}





//Age validation

function validateAge(inputAge) {
    if (inputAge) {
        if (inputAge > 150 || inputAge < 0) {
            showInputAgeError(true, 'Are you a god! ', 'ageSpan')
            return false;
        } else {
            
            showInputAgeError(false, '', 'ageSpan')
            return true
        }
    } else {
        showInputAgeError(true, 'Age cannot be empty', 'ageSpan')
        return false;
    }
}

function showInputAgeError(booleanValue, msg, id) {
    let ageSpanTag = document.getElementById(id);
    let ageTag=document.getElementById('age')
    if (booleanValue) {
        ageSpanTag.innerText = msg
        ageSpanTag.style.display = 'block';
        ageTag.style.border = '3px solid red';
        ageSpanTag.style.color = '#FF6347'
    } else {
        ageSpanTag.innerText = msg
        ageSpanTag.style.display = 'none';
        ageTag.style.border = '';
    }
}


//Password validation


function validatePassword(inputPassword) {
    if (inputPassword) {
        if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(inputPassword)) {
            showInputPasswordError(false, '', 'passwordSpan')
            return true;
        } else {
            showInputPasswordError(true, 'Password should contain atleast 1 Capital 1 small charactor and 1 number and 1 special charectar', 'passwordSpan')
            return false;
        }
    } else {
        showInputPasswordError(true, 'Password cannot be empty', 'passwordSpan')
        return false;
    }
}

function showInputPasswordError(booleanValue, msg, id) {
    let passwordSpanTag = document.getElementById(id)
    let passowrdTag=document.getElementById('password')
    if (booleanValue) {
        passwordSpanTag.innerText = msg
        passwordSpanTag.style.display = 'block'
        passowrdTag.style.border = '3px solid red';
        passwordSpanTag.style.color = '#FF6347'
    } else {
        passwordSpanTag.innerText = msg;
        passwordSpanTag.style.display = 'none'
        passowrdTag.style.border = ''
    }
}




//Email validation

function validateEmail(inputValue) {
    if (inputValue) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputValue)) {
            showInputEmailError(false, '', 'emailSpan')
            return true;
        } else {
            showInputEmailError(true, 'Inputed email is not valid', 'emailSpan')
            return false;
        }
    } else {
        showInputEmailError(true, 'Email cannot be empty', 'emailSpan')
        return false;
    }
}

function showInputEmailError(booleanValue, msg, id) {
    const emailSpanTag = document.getElementById(id)
    let emailTag=document.getElementById('email')
    if (booleanValue) {
        emailSpanTag.innerText = msg
        emailSpanTag.style.display = 'block'
        emailTag.style.border = '3px solid red';
        emailSpanTag.style.color = '#FF6347'
    } else {
        emailSpanTag.innerText = msg
        emailSpanTag.style.display = 'none'
        emailTag.style.border = ''
    }
}




















