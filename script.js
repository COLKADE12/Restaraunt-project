document.addEventListener('DOMContentLoaded',() => {


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

   const sections = document.querySelectorAll("section");
   const links = document.querySelectorAll(".navBtn");
  
   const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const id = entry.target.getAttribute("id");

        links.forEach(link => {
          link.classList.remove("active");

          if(link.getAttribute("href") === "#" + id) {
            link.classList.add("active");
          }
        });
      }
    });
   }, {
    threshold:0.4

   });

   sections.forEach(section => {
    observer.observe(section);
   });

});

function initMap() {
      const location = { lat: -0.369354, lng: 35.283897 };

      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: location,
      });

      new google.maps.Marker({
        position: location,
        map: map,
      });
    }

