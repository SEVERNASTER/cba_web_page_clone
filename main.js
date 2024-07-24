
var mvScreenIsVisible = false;
var menuResponsiveIsVisible = false;
const menu = document.getElementById('menu');
const homeElements = document.querySelectorAll('.home');


document.getElementById('mission-vision').addEventListener('click', function() {
    const mvScreen = document.getElementById('mvscreen');
    mvScreen.classList.add('active');//innecesario, podemos cambiar solamente el estilo style.opacity
    document.getElementById('mvcba').classList.add('active');
});

document.getElementById('x-button').addEventListener('click', closeMVScreen)

function closeMVScreen(){
    const mvScreen = document.getElementById('mvscreen');
    mvScreen.classList.remove('active');
    document.getElementById('mvcba').classList.remove('active');
}

document.getElementById('menu-icon').addEventListener('click', function() {
    if(!menuResponsiveIsVisible){
        menu.style.opacity = '1';
        menuResponsiveIsVisible = true;
    }else{
        menu.style.opacity = '0';
        menuResponsiveIsVisible = false;
    }
} )

// para poner mv screen responsive
// document.getElementById('mission-vision-responsive').addEventListener('click', function() {
//     const mvscreen = document.getElementById('mvscreen');
//     mvscreen.style.opacity = '1';
//     mvscreen.style.zIndex = '30';
// })


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

