var indexValue = 1;
showImg(indexValue);

function side_slide(e) {
  showImg(indexValue += e)
}

function showImg(e) {
  var i;
  const img = document.querySelectorAll('.product_image')
  if (e > img.length) {
    indexValue = 1;
  }
  if (e < 1) {
    indexValue = img.length;
  }
  for (i = 0; i < img.length; i++) {
    img[i].style.display = "none";
  }
  img[indexValue - 1].style.display = "block";
}

const openMenu = document.querySelector('.burger');
const closeMenu = document.querySelector('.close_menu');
const menu = document.querySelector('.menu');
const overflowHidden = document.querySelector('body');

openMenu.addEventListener('click', () => {
  menu.classList.add('show');
  overflowHidden.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () => {
  menu.classList.remove('show');
  overflowHidden.style.overflow = 'visible';
});

const openCart = document.querySelector('.cart');
const cartModel = document.querySelector('.cart_model');

openCart.addEventListener('click', () => {
  cartModel.classList.toggle('show');
});