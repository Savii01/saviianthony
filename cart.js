console.log("run");

let carts = document.querySelectorAll(".add-cart");

let products = [
  { 
    name: 'Logo Designs',
    tag: 'anny',
    price: 50,
    inCart: 0
  },

  { 
    name: 'Mascot Design',
    tag: 'FB_IMG_16284046582783728',
    price: 50,
    inCart: 0
  },

  { 
    name: 'Book Cover',
    tag: 'template4',
    price: 50,
    inCart: 0
  },

  { 
    name: 'Business Card',
    tag: 'mark',
    price: 50,
    inCart: 0
  },

  { 
    name: 'Letterhead',
    tag: 'mockup_3',
    price: 50,
    inCart: 0
  },

  { 
    name: 'Real Estates',
    tag: 'propertio_d_second_1',
    price: 50,
    inCart: 0
  },

  { 
    name: 'Logo Animation',
    tag: 'anny1',
    price: 50,
    inCart: 0
  },

  { 
    name: 'Website design',
    tag: 'web',
    price: 50,
    inCart: 0
  }
]; 

for (let i=0; i < carts.length; i++){
  carts[i].addEventListener('click',() =>{
   cartNumbers(products[i]);
   totalCost(products[i]);
  })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers){
      document.querySelector('.total-count').textContent = productNumbers;
    }
}

function cartNumbers(product){
  console.log('the product selected is', product)
  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers);

 if( productNumbers){
 localStorage.setItem('cartNumbers', productNumbers + 1);
 document.querySelector('.total-count').textContent = productNumbers + 1;
 }else{
 localStorage.setItem('cartNumbers', 1);
  document.querySelector('.total-count').textContent = 1;
 }
  setItems(product);
}

function setItems(product){
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

if (cartItems != null){
   if(cartItems[product.tag] == undefined){
    cartItems = {
      ...cartItems,
      [product.tag]: product
  }
}
      cartItems[product.tag].inCart += 1;
  }else {
    product.inCart = 1;
    cartItems = {
    [product.tag]: product
    }

  }
localStorage.setItem('productsInCart', JSON.stringify(cartItems));

}

function totalCost(product){
  console.log('the product price is', product.price);
  let cost = localStorage.getItem('totalCost');

if(cost !=null){
  cost = parseInt(cost); 
  localStorage.setItem('totalCost',cost + product.price)
}else{
  localStorage.setItem('totalCost' , product.price)
}
}

// ................CART PAGE.............................

function displayCart(){
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
let productContainer = document.querySelector(".product");
let cost = localStorage.getItem('totalCost');
console.log(cartItems);
if(cartItems && productContainer){
  productContainer.innerHTML='';
  Object.values(cartItems).map(item => {
    productContainer.innerHTML += `
   
    <div class="product">
      <div class="product-items">  
        
     
      <div class = "product-title"><img src = "images/${item.tag}.jpg"></div>
            <div class = "product-name"><span>${item.name}</span></div>
           
            <div class = "product-price"><span>$${item.price}.00</span></div>
    <div class = "product-qty">
        <div class='input-group'>
            <button class='minus-item'>-</button>
                <span>${item.inCart}</span>
            <button class='plus-item'>+</button>
        </div>
    </div>   
  
   <div class = "product-total">$${item.inCart * item.price}.00</div>
   <div class = "clear-all"><i class="fa fa-trash"></i></div>
   
           
      </div> 
    </div>
    `
    ;
  });

  productContainer.innerHTML+=`
  <div class = "totalContainer">
      <h4 class = "basketTotalTitle">CART TOTAL</h4>
      <h4 class = "basketTotal">$${cost}.00</h4>
  </div>
  `


  console.log("ITEMS");
}
  
}



onLoadCartNumbers();
displayCart();