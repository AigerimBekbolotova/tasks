let name = prompt('Кто такой пришел');
if ( name === 'Admin') {
    let password = prompt('Пароль');
    if (password === 'Your Lord') {
        alert('Welcome!');
    } else if (password === null) {
        alert('Login canceled');
    } else {
        alert('wrong password');
    }
} else if ( name === null) {
    alert('Login Canceled');
} else {
    alert('I dont know you');
}






