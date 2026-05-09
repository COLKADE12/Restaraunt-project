document.addEventListener("DOMContentLoaded", ()=>{


    const addToCart = document.querySelectorAll(".menuBtn");
    const itemNumber = document.querySelector(".itemNumber");
    let count = 0;
    let cart =[];

    addToCart.forEach(button => {
        button.onclick = function(){
            count++;
            itemNumber.textContent = count;

         const card = button.closest(".menu-card")
         const name = card.querySelector(".card-heading h3").textContent;
         const priceText = card.querySelector(".price p").textContent;
         const price = parseInt(priceText.replace("Ksh","").replace(",",""))

         cart.push({name , price});

         displayCart();

         console.log(cart)
        };

        button.addEventListener('click' , () =>{
            itemNumber.style.display = "block";
        });
    });

    const cartBtn = document.querySelector(".cartBtn");
    const closeCart = document.querySelector(".closeCart");
    const cartWindow = document.querySelector(".cart-window");
    const overlay = document.querySelector(".overlay");

    cartBtn.addEventListener('click', () =>{
        cartWindow.classList.add("active")
        overlay.classList.add("active")
    });

    closeCart.addEventListener('click', () =>{
        cartWindow.classList.remove("active");
        overlay.classList.remove("active");
    })

    function displayCart() {
        const cartItems = document.querySelector(".cart-items");
        const totalElement = document.querySelector(".total");

        cartItems.innerHTML = "";
        let total = 0;

        cart.forEach(item => {
            cartItems.innerHTML += `
            <p>${item.name} - Ksh ${item.price}</p>
            `;
            total += Number(item.price);
        });

        totalElement.textContent=total;
    };


    const MenuToggle= document.getElementById("menu-toggle");
    const navMenu= document.getElementById("nav-menu");
    const navLink = document.querySelector(".nav-link")

    MenuToggle.addEventListener('click' , () =>{
        navMenu.classList.toggle('active');
    });

    navLink.addEventListener('click', () =>{
        navMenu.classList.remove("active");
    });


});    