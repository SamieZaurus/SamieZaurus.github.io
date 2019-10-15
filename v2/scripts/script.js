//globals

let navToggled = false;


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