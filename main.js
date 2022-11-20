const navbarEmail = document.querySelector('.navbar-email');
const emailMenu = document.querySelector('.desktop-menu');
//mobile menu
const menuMobile = document.querySelector('.mobile-menu');
const menuHamMenu = document.querySelector('.ham-menu');
// carrito
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shopping-cart');
// lista de productos
const cardsContainer =  document.querySelector('.cards-container');
const productList = [];
// Product Detail
const productDetailContainer = document.querySelector('#product-detail');
const closeProductDetailContainer = document.querySelector('.product-detail-close');
// agregando productos de ejemplo  
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Bike2',
    price: 122,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Bike3',
    price: 123,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Bike4',
    price: 124,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

/*<div class="product-card">
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
</div> */

productList.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetail);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDetail = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.innerText = 'GTQ. ' + product.price;
    const productName = document.createElement('p');
    productName.innerText = 'GTQ. ' + product.name;
    productInfoDetail.appendChild(productPrice);
    productInfoDetail.appendChild(productName);

    const productInfoFigure = document.createElement('figure')
    const productInfoImg = document.createElement('img');
    productInfoImg.setAttribute('src', "./icons/bt_add_to_cart.svg");
    productInfoFigure.appendChild(productInfoImg);

    productInfo.appendChild(productInfoDetail);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild( productImg);
    productCard.appendChild( productInfo);

    cardsContainer.appendChild(productCard);

});

navbarEmail.addEventListener( 'click', ()=>{
    const isAsideOpen      = !shoppingCartContainer.classList.contains('inactive');
    const isProdDetaiLOpen = !productDetailContainer.classList.contains('inactive');

    if (isAsideOpen) {
        shoppingCartContainer.classList.toggle('inactive');
    }

    if (isProdDetaiLOpen){
        productDetailContainer.classList.toggle('inactive');
    }
    
    emailMenu.classList.toggle('inactive');
});

menuHamMenu.addEventListener('click', ()=>{
    const isAsideOpen      = !shoppingCartContainer.classList.contains('inactive');
    const isProdDetaiLOpen = !productDetailContainer.classList.contains('inactive');

    if (isAsideOpen) {
        shoppingCartContainer.classList.toggle('inactive');
    }

    if (isProdDetaiLOpen){
        productDetailContainer.classList.toggle('inactive');
    }

    menuMobile.classList.toggle('inactive');
});

menuCarritoIcon.addEventListener('click', () => {

    const isMobileMenuOpen = !menuMobile.classList.contains('inactive');
    const isEmailMenuOpen  = !emailMenu.classList.contains('inactive');
    const isProdDetaiLOpen = !productDetailContainer.classList.contains('inactive');

    if (isMobileMenuOpen) {
        menuMobile.classList.toggle('inactive');
    }

    if (isEmailMenuOpen){
        emailMenu.classList.toggle('inactive');
    }

    if (isProdDetaiLOpen){
        productDetailContainer.classList.toggle('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');
});

closeProductDetailContainer.addEventListener('click', () => {
    productDetailContainer.classList.add('inactive');
});


function openProductDetail(){
    const isAsideOpen      = !shoppingCartContainer.classList.contains('inactive');
    const isMobileMenuOpen = !menuMobile.classList.contains('inactive');
    const isEmailMenuOpen  = !emailMenu.classList.contains('inactive');

    if (isAsideOpen) {
        shoppingCartContainer.classList.toggle('inactive');
    }

    if (isMobileMenuOpen) {
        menuMobile.classList.toggle('inactive');
    }

    if (isEmailMenuOpen){
        emailMenu.classList.toggle('inactive');
    }

    productDetailContainer.classList.remove('inactive');
}
