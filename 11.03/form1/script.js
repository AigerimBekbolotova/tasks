let container = document.querySelector('#next');

container.onclick = (event) =>{
    event.preventDefault()
    let userLastName = document.querySelector('#user-lastname').value;
    let userName = document.querySelector('#user-name').value;
    let userFirstName = document.querySelector('#user-first-name').value;
    let userDateOfBirth = document.querySelector('#date-of-birth').value;
    let userBirthAddress = document.querySelector('#user-birth-address').value;
    let userPassport = document.querySelector('#user-passport').value;
    let userNumPassport = document.querySelector('#user-num-passport').value;
    let userDataOfGetPassport = document.querySelector('#user-date-of-get-passport').value;
    let userPhoneNumber = document.querySelector('#user-phone-number').value;
    let userMail = document.querySelector('#user-mail').value;
    let userNameOfBank = document.querySelector('#user-name-of-bank').value;
    let userAddress = document.querySelector('#user-address').value;

    let object = {
        lastName:userLastName,
        name: userName,
        firstName: userFirstName,
        dateOfBirth: userDateOfBirth,
        birthAddress: userBirthAddress,
        passport:userPassport,
        numPassport:userNumPassport,
        dateGetPassport:userDataOfGetPassport,
        phoneNum:userPhoneNumber,
        mail:userMail,
        bank:userNameOfBank,
        address:userAddress
    }
    console.log(object);
    

}

