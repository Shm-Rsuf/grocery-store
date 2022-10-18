const searchForm = document.querySelector('.search-form');
const shoppingCart = document.querySelector('.shopping-cart');
const loginForm = document.querySelector('.login-form');
const navBar = document.querySelector('.navbar');

document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
  navBar.classList.remove('active');
}

document.querySelector('#cart-btn').onclick = () => {
  shoppingCart.classList.toggle('active');
  searchForm.classList.remove('active');
  loginForm.classList.remove('active');
  navBar.classList.remove('active');
}

document.querySelector('#user-btn').onclick = () => {
  loginForm.classList.toggle('active');
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  navBar.classList.remove('active');
}

document.querySelector('#menu-btn').onclick = () => {
  navBar.classList.toggle('active');
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
}

window.onscroll(() => {
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
  navBar.classList.remove('active');
})