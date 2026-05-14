document.addEventListener('DOMContentLoaded',() => {
   const form = document.querySelector(".form");

 if(form){

  form.addEventListener("submit", (e) =>{
    
    e.preventDefault();

    const name=document.getElementById("name")?.value.trim();
    const surname=document.getElementById("surname")?.value.trim();
    const email=document.getElementById("email")?.value.trim();
    const phone=document.getElementById("phone")?.value.trim();
    const date=document.getElementById("date")?.value;
    const time=document.getElementById("time")?.value;
    const people=document.getElementById("people")?.value;

    if(!name || !surname || !email || !phone || !date || !time || !people){
        alert("Please fill in the form.");
        return;
    }

    const digitsOnly = phone.replace(/\D/g, "");

    if(digitsOnly.length < 9){
        alert("Please enter a valid phone number.");
        return;
    }

    

    const alertBox = document.getElementById("alertBox");

    alertBox.textContent =`
    🔥 Your reservation is locked in!Thank you for choosing Urban Flames.We'll be in touch shortly to confirm.
    `.trim();

    alertBox.className="success";

    alertBox.style.display="block";
   
    form.reset();

  })
 }

 const MenuToggle= document.getElementById("menu-toggle")
    const navMenu= document.getElementById("nav-menu")
    const navLinks= document.querySelectorAll("#nav-menu a")

    MenuToggle.addEventListener('click' , (e) =>{
        e.stopPropagation();
         navMenu.classList.toggle('active');
 });

 document.addEventListener('click', (e) => {

    const clickedInsideMenu = navMenu.contains(e.target);
    const clickedToggle = MenuToggle.contains(e.target);

    if(!clickedInsideMenu && !clickedToggle){
        navMenu.classList.remove('active');
    }

});

    navLinks.forEach(link => {
       link.addEventListener('click', () => {
           navMenu.classList.remove('active');
 });
 });


});