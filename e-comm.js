let cartCount = localStorage.getItem("cartCount")? parseInt(localStorage.getItem("cartCouunt")) : 0;

document.querySelector('.js-cart-count').innerHTML = cartCount

function addToCart() {
    cartCount++;
    localStorage.setItem("cartCount", cartCount);
    document.querySelector('.js-cart-count').innerHTML = cartCount;
}