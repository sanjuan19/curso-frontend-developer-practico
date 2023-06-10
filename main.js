// Lanzadores
const menuEmail = document.querySelector('.navbar-email');
const imgMobileMenu = document.querySelector('.menu');
const imgCarrito = document.querySelector('.navbar-shopping-cart');
const imgCerrarDetalleProd = document.querySelector(".product-detail-close");

// Menús y elementos que se accionan y se retiran
const DeskTopMenu = document.querySelector('.desktop-menu');
const MobileTopMenu = document.querySelector('.mobile-menu');
const Carrito = document.querySelector('#Carrito');
const VistaProducto = document.querySelector("#VistaProducto");

// Lista de productos
const productList = [];
const CardsContainer = document.querySelector('.cards-container');
const formatMoney = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 });


let blDesktopMenuPointerOver = false;
let blMobiletopMenuPointerOver = false;
let blCarritoPointerOver = false;
let blVistaProductoPointerOver = false;

menuEmail.addEventListener('click', showDesktopMenu);
imgMobileMenu.addEventListener('click', showMobiletopMenu);
imgCarrito.addEventListener('click', showCarrito);
imgCerrarDetalleProd.addEventListener('click', hideVistaProducto);

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
    hideVistaProducto();
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
    hideVistaProducto();
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
    hideVistaProducto();
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

function hideVistaProducto(){
    VistaProducto.classList.add("inactive");
}

function showVistaProducto(){
    VistaProducto.classList.remove("inactive");
    blMobiletopMenuPointerOver = true;
    hideMobiletopMenu();
    blDesktopMenuPointerOver = true;
    hideDesktopMenu();
    blCarritoPointerOver = true;
    hideCarrito();
}

function getProducts(arrProdList) {

    for (let i = 0; i < 10; i++) {

        arrProdList.push({
            name: 'Bicicleta ' + i,
            price: 120 * (i + 1),
            image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        })
    }

}

function showProducts(arrProdList) {



    for (product of arrProdList) {


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
        img.setAttribute('src', product.image);
        img.addEventListener('click', showVistaProducto );
        div_productCard.append(img);

        const div_productInfo = document.createElement('div');
        div_productInfo.classList.add('product-info');
        const div_subProductInfo = document.createElement('div');
        const pPrice = document.createElement('p');
        pPrice.innerText = formatMoney.format(product.price);

        const pName = document.createElement('p');

        pName.innerText = product.name;
        div_subProductInfo.append(pPrice);
        div_subProductInfo.append(pName);
        div_productInfo.append(div_subProductInfo);

        const fig = document.createElement('figure');
        const icon = document.createElement('img');
        icon.setAttribute('src', './icons/bt_add_to_cart.svg');
        fig.append(icon);
        div_productInfo.append(fig);
        div_productCard.append(div_productInfo);

        CardsContainer.append(div_productCard);

    }
}

// Código general

getProducts( productList );
showProducts( productList );