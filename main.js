
var mvScreenIsVisible = false;
const menuResponsive = document.getElementById('menu');
const homeElements = document.querySelectorAll('.home');


document.getElementById('mission-vision').addEventListener('click', function () {
    const mvScreen = document.getElementById('mvscreen');
    mvScreen.classList.add('active');//innecesario, podemos cambiar solamente el estilo style.opacity
    document.getElementById('mvcba').classList.add('active');
});

document.getElementById('x-button').addEventListener('click', closeMVScreen);

function closeMVScreen() {
    const mvScreen = document.getElementById('mvscreen');
    mvScreen.classList.remove('active');
    document.getElementById('mvcba').classList.remove('active');
}

document.getElementById('menu-icon').addEventListener('click', function () {
    menuResponsive.style.opacity = '1';
    // document.getElementById('menu-icon').classList.add('active-change');
    // document.getElementById('menu-x-button').classList.add('active-change');
    changeResponsiveMenuButtons(false);
    menuResponsive.style.display = 'flex';
    // console.log('menu icon actived')
})

document.getElementById('menu-x-button').addEventListener('click', function () {
    menuResponsive.style.opacity = '0';
    // document.getElementById('menu-x-button').classList.remove('active-change');
    // document.getElementById('menu-icon').classList.remove('active-change');
    changeResponsiveMenuButtons(true);
    menuResponsive.style.display = 'none';
    hideMVScreen();
})

function changeResponsiveMenuButtons(xBtnIsVisible) {
    const menuIcon = document.getElementById('menu-icon');
    const menuXBtn = document.getElementById('menu-x-button');
    if(xBtnIsVisible){
        menuXBtn.style.display = 'none';
        menuIcon.style.display = 'flex';
    }else {
        menuXBtn.style.display = 'flex';
        menuIcon.style.display = 'none';
    }
}

function closeResponsiveMenu() {
    menuResponsive.style.display = 'none';
    changeResponsiveMenuButtons(true);
}

document.getElementById('mission-vision-responsive').addEventListener('click', showMVScreen);


function showMVScreen(){
    const mvscreen = document.getElementById('mvscreen');
    const mvImg = document.getElementById('mvcba');
    const cbaImg = document.getElementById('cba-responsive-img');
    menuResponsive.style.opacity = '0';
    mvscreen.style.opacity = '1';
    mvscreen.style.zIndex = '30';
    mvImg.classList.add('active-responsive-animation');
    cbaImg.classList.add('active-responsive-animation');
}

function hideMVScreen(){
    const mvscreen = document.getElementById('mvscreen');
    const mvImg = document.getElementById('mvcba');
    const cbaImg = document.getElementById('cba-responsive-img');
    mvscreen.style.opacity = '0';
    mvscreen.style.zIndex = '-1';
    mvImg.classList.remove('active-responsive-animation');
    cbaImg.classList.remove('active-responsive-animation');
}

//el problema es el position: absolute y el transform translate de los icono del menu y x para desaparecer el menu



// code to desappear the responsive menu by touching any other part of the home screen
// homeElements.forEach(element => {
//     element.addEventListener('click', function(event) {
//         event.preventDefault();

//         if(!(element.id === 'menu-icon')){
//             // menu.style.opacity = '0';
//             // menuResponsiveIsVisible = false;
//             console.log('activado');
//         }
//     })
// })

