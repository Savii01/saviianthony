

var slide1 = 1;
Slides1(slide1);

function plusSlides1(m) {
  Slides1(slide1 += m);
}

function currentSlide1(m) {
  Slides1(slide1 = m);
}

function Slides1(m) {
  var i;
  var slides1 = document.getElementsByClassName("mySlides1");
  var dots1 = document.getElementsByClassName("dot1");
  if (m > slides1.length) {slide1 = 1}    
  if (m < 1) {slide1 = slides1.length}
  for (i = 0; i < slides1.length; i++) {
      slides1[i].style.display = "none";  
  }
  for (i = 0; i < dots1.length; i++) {
      dots1[i].className = dots1[i].className.replace(" active", "");
  }
  slides1[slide1-1].style.display = "block";  
  dots1[slide1-1].className += " active";
}
 


function add(){
  console.log ("the button was clicked")
  // alert("Item added to cart");
  let itemAdded = document.getElementById("item");
  itemAdded.className = "show";
    setTimeout(function(){ itemAdded.className = itemAdded.className.replace("show", ""); }, 5000);

}


window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) 
  {
      document.getElementById("contain").style.top = "0";
  } else {
      document.getElementById("contain").style.top = "-80px";
  }
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("contain").style.display = "none";
  } else{
    document.getElementById("contain").style.display = "block";
  }
  


}






