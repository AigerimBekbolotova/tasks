let container = document.querySelector('#next');

container.onclick = () =>{
    let userLastName = document.querySelector('#user-lastname').value;
    let userName = document.querySelector('#user-name').value;
    let userSurname = document.querySelector('#user-surname').value;
    let userDateOfBirth = document.querySelector('#date-of-birth');
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
        surname: userSurname,
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

    let notification = document.querySelector('#notification')

    const showNotification = () => {
        setTimeout(hideNotification,3000);
        notification.classList.add('block');
        notification.textContent = 'Заполните пустое поле!';
        notification.style.height = '30px';
        notification.style.width = '300px';
        notification.style.border = '1px solid white';
        notification.style.borderRadius = '10px';
        notification.style.boxShadow = '0 0 10px 0 white';
        notification.style.backgroundColor = 'white';
        notification.style.color = 'red';
        notification.style.paddingLeft = '60px';
        notification.style.fontSize = '20px';
    }
    
    const hideNotification = () =>{
        notification.classList.remove('block');
    }
    
    if(userLastName == '' || userName == '' || userPassport == '' || userNumPassport == '' || userDataOfGetPassport === ''){
        showNotification();
    }else {
        console.log(object);
        window.localStorage.setItem('object',JSON.stringify(object));
        window.location.href = 'index2.html';
    }
    
}

