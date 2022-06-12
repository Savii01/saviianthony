let addToCart = document.getElementById(add);

function add(){
  console.log ("the button was clicked")
  // alert("Item added to cart");
  let itemAdded = document.getElementById("item");
  itemAdded.className = "show";
    setTimeout(function(){ itemAdded.className = itemAdded.className.replace("show", ""); }, 5000);

}
