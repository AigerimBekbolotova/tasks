const notificationElem = document.querySelector('notification');

function showNotification(){
    notificationElem.classList.add('.notification');
}

setTimeout(showNotification,1500);

setTimeout(function () {
    document.getElementById('alert').style.display = 'none';
},1500);


