const menuEmail = document.querySelector('.navbar-email');
const DeskTopMenu = document.querySelector('.desktop-menu');
let blDesktopMenuPointerOver = false;

menuEmail.addEventListener('click', showDesktopMenu);
DeskTopMenu.addEventListener('pointerleave', hideDesktopMenu);
DeskTopMenu.addEventListener('pointerenter', setDesktopMenu);

function showDesktopMenu(){
    DeskTopMenu.classList.toggle("inactive");
}

function hideDesktopMenu(){
    //console.log( 'Ingresó al hideDesktopMenu. blDesktopMenuPointerOver: ' + blDesktopMenuPointerOver );
    if (blDesktopMenuPointerOver && !DeskTopMenu.classList.contains("inactive") ) {
        DeskTopMenu.classList.add("inactive");
        blDesktopMenuPointerOver = false;
    }
}

function setDesktopMenu(){
    //console.log( 'Ingresó al setDesktopMenu' );
    blDesktopMenuPointerOver = true;
}