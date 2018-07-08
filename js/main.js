function showOrCloseMenu() {
  var x = document.getElementById("headermenu");
  if (x.className === "headerlist") {
      x.className += " responsive";
  } else {
      x.className = "headerlist";
  }
} 


function fnemu(e) {
  var headerlangbar = document.getElementsByClassName("headerlangbar__link");
  for( i = 0 ; i < headerlangbar.length ; i++ ){
    headerlangbar[i].className = headerlangbar[i].className.replace("active", "")
  }
  headerlangbar[e-1].classList.add("activelang");
}



var slideIndex = 1;
showSlides( slideIndex );

function currentSlide( n ){
  showSlides( slideIndex = n );
}

function showSlides( n ){
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if( n > slides.length){
    slideIndex = 1;
  }
  if( n < 1 ){
    slideIndex = slides.length;
  }
  for( i = 0; i < slides.length ; i++ ){
    slides[i].style.display = "none";
  }
  for( i = 0 ; i < dots.length ; i++ ){
    dots[i].className = dots[i].className.replace("active", "")
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex- 1].className += " active";
}