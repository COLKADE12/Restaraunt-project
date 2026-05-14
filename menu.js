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
         const existingItem = cart.find(item => item.name === name);

         if(existingItem){
            existingItem.quantity++;
         }else{
            cart.push({name , price , quantity: 1});
         };

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
        cartWindow.classList.add("active");
        overlay.classList.add("active");
        document.body.style.overflow = "hidden"
    });

    closeCart.addEventListener('click', () =>{
        cartWindow.classList.remove("active");
        overlay.classList.remove("active");
        document.body.style.overflow = "auto"
    });

    function displayCart() {
        const cartItems = document.querySelector(".cart-items");
        const totalElement = document.querySelector(".total");

        if(cart.length === 0){
        cartItems.innerHTML = `
            <div class="emptyCart">
                Your cart is empty!!
            </div>
        `;
        return;
        }

        cartItems.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {

            total +=item.price * item.quantity

            cartItems.innerHTML += `

            <div class="cart-item">
                <div class="item-detail">
                    <h3>${item.name}</h3>
                    <p> Ksh ${item.price}</p>
                    <div class="quantity-controls">
                        <p>Quantity: </p>
                        <button onclick="decreaseItems(${index})"> - </button>
                        <span>${item.quantity}</span>
                        <button onclick="increaseItems(${index})"> + </button>
                    </div>
                </div>
                <div class="removeBtn">
                    <button onclick="removeItem(${index})">REMOVE</button>
                </div>
            </div>
            `;
            
        });

        totalElement.textContent=total;

    };

    function updateCartCount(){
    count = cart.reduce((sum, item) => sum + item.quantity, 0);

    if(count > 0){
        itemNumber.style.display = "block";
        itemNumber.textContent = count;
    } else {
        itemNumber.style.display = "none";
        itemNumber.textContent = 0;
    };
    };


    window.increaseItems = function(index){
        cart[index].quantity++

        updateCartCount();
        displayCart();
    };

    window.decreaseItems = function(index){
        if(cart[index].quantity > 1){
            cart[index].quantity--;
        }else{
            cart.splice(index, 1);
        };

        updateCartCount();
        displayCart();
    };

    window.removeItem = function(index){
        cart.splice(index, 1);

        updateCartCount();
        displayCart();
    };

    window.clearCart = function() {
        cart=[]
        count=0
        itemNumber.style.display = "none"

        displayCart();
    };

    


        

    const MenuToggle= document.getElementById("menu-toggle");
    const navMenu= document.getElementById("nav-menu");

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

   

    displayCart();
});
    