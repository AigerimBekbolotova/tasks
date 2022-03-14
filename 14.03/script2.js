let container = document.querySelector('#apply');

container.onclick = (event) =>{
    event.preventDefault()
    let nameCompany = document.querySelector('#name-company').value;
    let position = document.querySelector('#position').value;
    let salary = document.querySelector('#salary').value;
    let salaryFor3Month = document.querySelector('#salary-for-3month').value;
    let shopping = document.querySelector('#shopping').value;
    let coast = document.querySelector('#coast').value;
    let amount = document.querySelector('#amount').value;
    let total = document.querySelector('#total').value;
    let creditType = document.querySelector('#credit-type').value;
    let creditTerm = document.querySelector('#credit-term').value;
    let bankAddress = document.querySelector('#bank-address').value;

    let object = {
        name:nameCompany,
        position:position,
        salary:salary,
        salaryFor3Month:salaryFor3Month,
        shopping:shopping,
        coast:coast,
        amount:amount,
        total:total,
        creditType:creditType,
        creditTerm:creditTerm,
        bankAddress:bankAddress
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
    
    if(nameCompany == '' || position == '' || salary == '' || salaryFor3Month == '' ){
        showNotification();
    }else {
        window.location.href = '';
    }
}

