let openBtn = document.querySelector('#open-modal');
let modal = document.querySelector('#modal');


const showNotification = (options) => {
    modal.textContent = options.html;
    modal.classList.add (options.className);
    modal.classList.add('d-block');
    setTimeout(hideNotification,1500);
}

const hideNotification = () => {
    modal.classList.remove('d-block')
}

//dark-blue
/*const changeStyle = () => {
    modal.style.backgroundColor = '#cfe2ff';
    modal.style.borderColor = '#b6d4fe';
    modal.style.color = '#084298';
}
openBtn.addEventListener('click',() => {
    changeStyle();
    showNotification({html: 'A simple primary alert—check it out!', className: 'primary'});
});*/

//grey
const changeStyle = () => {
    modal.style.backgroundColor = '#e2e3e5';
    modal.style.borderColor = '#d3d6d8';
    modal.style.color = '#41464b';
}
openBtn.addEventListener('click',() => {
    changeStyle();
    showNotification({html: 'A simple secondary alert—check it out!', className: 'primary'});
});


//green
/*const changeStyle = () => {
    modal.style.backgroundColor = '#d1e7dd';
    modal.style.borderColor = '#badbcc';
    modal.style.color = '#0f5132';
}
openBtn.addEventListener('click',() => {
    changeStyle();
    showNotification({html: 'A simple success alert—check it out!', className: 'primary'});
});
*/

//pink
/*const changeStyle = () => {
    modal.style.backgroundColor = '#f8d7da'
    modal.style.borderColor = '#f5c2c7';
    modal.style.color = '#842029';
}
openBtn.addEventListener('click',() => {
    changeStyle();
    showNotification({html: 'A simple danger alert—check it out!', className: 'primary'});
});*/

//yellow
/*const changeStyle = () => {
    modal.style.backgroundColor = '#fff3cd'
    modal.style.borderColor = '#ffecb5';
    modal.style.color = '#664d03';
}
openBtn.addEventListener('click',() => {
    changeStyle();
    showNotification({html: 'A simple warningr alert—check it out!', className: 'primary'});
});*/

//blue
/*const changeStyle = () => {
    modal.style.backgroundColor = '#cff4fc'
    modal.style.borderColor = '#b6effb';
    modal.style.color = '#055160';
}
openBtn.addEventListener('click',() => {
    changeStyle();
    showNotification({html: 'A simple info alert—check it out!', className: 'primary'});
});*/

//white
/*const changeStyle = () => {
    modal.style.backgroundColor = '#fefefe'
    modal.style.borderColor = '#fdfdfe';
    modal.style.color = '#636464';
}
openBtn.addEventListener('click',() => {
    changeStyle();
    showNotification({html: 'A simple light alert—check it out!', className: 'primary'});
});*/

//dark-grey
/*const changeStyle = () => {
    modal.style.backgroundColor = '#d3d3d4'
    modal.style.borderColor = '#bcbebf';
    modal.style.color = '#141619';
}
openBtn.addEventListener('click',() => {
    changeStyle();
    showNotification({html: 'A simple dark alert—check it out!', className: 'primary'});
});*/


