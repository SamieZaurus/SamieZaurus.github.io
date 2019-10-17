//globals

let navToggled = false;


//alert(window.innerHeight);
function toggleNav(){
    console.log("debug");
    let nav  = document.getElementById('nav');
    let mainContent = document.getElementById('main-content');
    let toggler = document.getElementById('nav-toggler');
    let toggler_arrow = document.getElementById('toggler-arrow');

    if(!navToggled){
        nav.style.width = '0%';
        mainContent.style.width = '100%';  
        toggler.style.left = '0px'
        toggler_arrow.style.transform = 'rotate(180deg)'
        navToggled = true;
        return;
    }  
    nav.style.width = '25%';
    mainContent.style.width = '75%';   
    toggler.style.left = '25%';
    toggler_arrow.style.transform = 'rotate(0deg)'
    navToggled = false;

    return;


}
function toggleNavMobile(){
    console.log("debug2");
    let nav  = document.getElementById('nav');
    let mainContent = document.getElementById('main-content');
    let toggler = document.getElementById('nav-toggler-mobile');
    let toggler_arrow = document.getElementById('toggler-arrow-mobile');

    if(!navToggled){
        nav.style.width = '0%';
        mainContent.style.width = '100%';  
        toggler.style.left = '5%'
        toggler.style.right = '';
        toggler_arrow.style.transform = 'rotate(180deg)'
        navToggled = true;
        return;
    }  
    nav.style.width = '100%';
    mainContent.style.width = '75%';   
    toggler.style.left = '';
    toggler.style.right = '5%';
    toggler_arrow.style.transform = 'rotate(0deg)'
    navToggled = false;

    return;


}