var indexValue = 1;
showImg(indexValue);

function side_slide(e) {
  showImg(indexValue += e)
}

function showImg(e) {
  var i;
  const img = document.querySelectorAll('.product_image');
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

const decreaseProductQtty = document.querySelector('.minus');
const increaseProductQtty = document.querySelector('.plus');
let productQuantity = document.querySelector('.product_quantity');

productQuantityValue = parseInt(productQuantity.textContent);

decreaseProductQtty.addEventListener('click', (e) => {
  e.preventDefault();
  if (productQuantityValue <= 0) {
    productQuantityValue = 0;
    productQuantity.textContent = productQuantityValue;
  } else {
    productQuantityValue = productQuantityValue - 1;
    productQuantity.textContent = productQuantityValue;
  }
});

increaseProductQtty.addEventListener('click', (e) => {
  e.preventDefault();
  productQuantityValue = productQuantityValue + 1;
  productQuantity.textContent = productQuantityValue;
});

let thumbnails = document.querySelectorAll('.product_image_thumbnail')
let productImage = document.querySelector('.product_image')
let activeImages = document.querySelectorAll('.active')

for (var i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener('click', function (e) {
    e.preventDefault();
    //Remove active class
    [...document.querySelectorAll('.thumbnail')]
    .map(x => x.classList.remove('active'));
    //Add active class
    this.parentElement.classList.add('active');
    //Change product image after clicking thumbnail
    productImage.src = this.src;
  })
}

const addCartBTN = document.querySelector('.add_cart_btn');
const productQTTY = document.querySelector('.product_quantity');
const emptyCart = document.querySelector('.empty_cart');
const AddProductToCart = document.querySelector('.add_product');
const productNewPrice = document.querySelector('.new_price');
const QttyOfCartProducts = document.querySelector('.cart span');

addCartBTN.addEventListener('click', (e) => {
  e.preventDefault();
  productQttyValue = parseInt(productQTTY.textContent);
  if (productQttyValue == 0) {
    emptyCart.style.display = 'flex';
  } else {
    emptyCart.style.display = 'none';
    let AddProduct = document.createElement('div');
    AddProduct.innerHTML = `
    <div class="product_in_cart">
              <img class="product_image_in_cart" src="./images/image-product-1-thumbnail.jpg" alt="Product Image">
              <div class="cart_infos">
                <p class="product_title">Fall Limited Edition Sneakers</p>
                <div class="pricing">
                  <p class="price">${productNewPrice.textContent}</p>&nbsp;
                  <span>x</span>&nbsp;
                  <p class="quantity">${productQttyValue}</p>&nbsp;
                  <p class="total">$${parseInt((productNewPrice.textContent).substr(1))*parseInt(productQttyValue)}</p>
                </div>
              </div>
              <div class="delete_product">
                <img class="delete_icon" src="./images/icon-delete.svg" alt="Icon Delete">
              </div>
            </div>
            <div class="checkout_btn">
              <a href="#">Checkout</a>
            </div>
      `;
    AddProductToCart.appendChild(AddProduct);
    QttyOfCartProducts.style.display = 'block';
    QttyOfCartProducts.textContent = productQttyValue;
  }
});

//Remove the product from the cart 

AddProductToCart.addEventListener('click', (e) => {
  if (e.target.classList.contains("delete_icon")) {
    e.target.parentElement.parentElement.parentElement.remove();
    emptyCart.style.display = 'flex';
    QttyOfCartProducts.style.display = 'none';
  }
})

const productImages = document.querySelector('.product_images');
const productLightbox = document.querySelector('.product_lightbox');
const closeLightbox = document.querySelector('.close_lightbox');

productImages.addEventListener('click', () => {
  productLightbox.style.display = 'block';
});

closeLightbox.addEventListener('click', () => {
  productLightbox.style.display = 'none';
});

//Lightbox slider

var indexValue = 1;
showImgLb(indexValue);

function side_slide_lb(e) {
  showImgLb(indexValue += e)
}

function showImgLb(e) {
  var i;
  const img = document.querySelectorAll('.lb_product_image');
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

let lbThumbnails = document.querySelectorAll('.lb_product_image_thumbnail');
let lbProductImage = document.querySelector('.lb_product_image');

for (var i = 0; i < lbThumbnails.length; i++) {
  lbThumbnails[i].addEventListener('click', function (e) {
    e.preventDefault();
    //Remove active class
    [...document.querySelectorAll('.lb_thumbnail')]
    .map(x => x.classList.remove('active'));
    //Add active class
    this.parentElement.classList.add('active');
    //Change product image after clicking thumbnail
    lbProductImage.src = this.src;
  })
}