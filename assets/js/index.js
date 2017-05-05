var slideIndex = 0;
var slides = document.getElementsByClassName("slide");
init_carousel();
function init_carousel(){
    for (var i = 0; i<slides.length;i++){
        slides[i].style.display = "none";
    }
     slides[slideIndex].style.display = "block";
}
function next_slide(){
    slides[slideIndex].style.display = "none";
    slideIndex++;
    if (slideIndex >= slides.length){
        slideIndex = 0;
    }
    slides[slideIndex].style.display = "block";
}
function prev_slide(){
    slides[slideIndex].style.display = "none";
    slideIndex--;
    if (slideIndex < 0){
        slideIndex = slides.length-1;
    }
    slides[slideIndex].style.display = "block";
}


