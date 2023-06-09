// Lanzadores
const menuEmail = document.querySelector('.navbar-email');
const imgMobileMenu = document.querySelector('.menu');
const imgCarrito = document.querySelector('.navbar-shopping-cart');

// Menús y elementos que se accionan y se retiran
const DeskTopMenu = document.querySelector('.desktop-menu');
const MobileTopMenu = document.querySelector('.mobile-menu');
const Carrito = document.querySelector('.product-detail');

// Lista de productos
const productList = [];
const CardsContainer = document.querySelector('.cards-container');
const formatMoney = new Intl.NumberFormat('en-US',{style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2});



let blDesktopMenuPointerOver = false;
let blMobiletopMenuPointerOver = false;
let blCarritoPointerOver = false;

menuEmail.addEventListener('click', showDesktopMenu);
imgMobileMenu.addEventListener('click', showMobiletopMenu);
imgCarrito.addEventListener('click', showCarrito);

DeskTopMenu.addEventListener('pointerleave', hideDesktopMenu);
MobileTopMenu.addEventListener('pointerleave', hideMobiletopMenu);
Carrito.addEventListener('pointerleave', hideCarrito);

DeskTopMenu.addEventListener('pointerenter', setDesktopMenu);
MobileTopMenu.addEventListener('pointerenter', setMobiletopMenu);
Carrito.addEventListener('pointerenter', setCarrito);

function showDesktopMenu() {
    DeskTopMenu.classList.toggle("inactive");
    blCarritoPointerOver = true;
    hideCarrito();
    blMobiletopMenuPointerOver = true;
    hideMobiletopMenu();
}

function hideDesktopMenu() {
    //console.log( 'Ingresó al hideDesktopMenu. blDesktopMenuPointerOver: ' + blDesktopMenuPointerOver );
    if (blDesktopMenuPointerOver && !DeskTopMenu.classList.contains("inactive")) {
        DeskTopMenu.classList.add("inactive");
        blDesktopMenuPointerOver = false;
    }
}

function setDesktopMenu() {
    //console.log( 'Ingresó al setDesktopMenu' );
    blDesktopMenuPointerOver = true;
}

function showMobiletopMenu() {
    MobileTopMenu.classList.toggle("inactive");
    blCarritoPointerOver = true;
    hideCarrito();
    blDesktopMenuPointerOver = true;
    hideDesktopMenu();
}

function hideMobiletopMenu() {
    if (blMobiletopMenuPointerOver && !MobileTopMenu.classList.contains("inactive")) {
        MobileTopMenu.classList.add("inactive");
        blMobiletopMenuPointerOver = false;
    }
}

function setMobiletopMenu() {
    blMobiletopMenuPointerOver = true;
}

function showCarrito() {
    Carrito.classList.toggle("inactive")
    blMobiletopMenuPointerOver = true;
    hideMobiletopMenu();
    blDesktopMenuPointerOver = true;
    hideDesktopMenu();
}

function hideCarrito() {
    if (blCarritoPointerOver && !Carrito.classList.contains("inactive")) {
        Carrito.classList.add("inactive");
        blCarritoPointerOver = false;
    }
}

function setCarrito() {
    blCarritoPointerOver = true;
}



for (let i = 0; i < 10; i++) {

    productList.push({
        name: 'Bicicleta ' + i,
        price: 120 * ( i+1 ),
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    })
}

for( product of productList){


    /** 
     * Se requiere insertar este formato por cada producto
    <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>
    */ 

    const div_productCard = document.createElement('div');
    div_productCard.classList.add('product-card');
    const img = document.createElement('img');
    img.setAttribute('src', product.image );
    div_productCard.append( img );

    const div_productInfo = document.createElement('div');
    div_productInfo.classList.add('product-info');
    const div_subProductInfo = document.createElement('div');
    const pPrice = document.createElement('p');
    pPrice.innerText = formatMoney.format( product.price );
    
    const pName = document.createElement('p');

    pName.innerText = product.name;
    div_subProductInfo.append(pPrice);
    div_subProductInfo.append(pName);
    div_productInfo.append(div_subProductInfo);

    const fig = document.createElement('figure');
    const icon = document.createElement('img');
    icon.setAttribute('src', './icons/bt_add_to_cart.svg' );
    fig.append(icon);
    div_productInfo.append(fig);
    div_productCard.append(div_productInfo);

    CardsContainer.append(div_productCard);


};