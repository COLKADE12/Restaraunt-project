document.addEventListener('DOMContentLoaded',() => {


    const MenuToggle= document.getElementById("menu-toggle")
    const navMenu= document.getElementById("nav-menu")
    const navLinks= document.querySelectorAll("#nav-menu a")

    MenuToggle.addEventListener('click' , () =>{
         navMenu.classList.toggle('active');
 });

    navLinks.forEach(link => {
       link.addEventListener('click', () => {
           navMenu.classList.remove('active');
 });
 });




});