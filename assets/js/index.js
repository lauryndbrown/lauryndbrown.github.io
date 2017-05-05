var slideIndex = 0;
carousel();

function carousel(){
    var slides = document.getElementsByClassName("slide");
    for (var i = 0; i<slides.length;i++){
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex >= slides.length){
        slideIndex = 0;
    }
    slides[slideIndex].style.display = "block";
    //setTimeout(carousel, 2000);
}


