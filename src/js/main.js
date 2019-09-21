$(window).scroll(function () {
    var $this = $(this)
    $head = $('#menu');
    if ($this.scrollTop() > 120) {
        $("#circle").css("background-color", "#ffffff");
        $("#menu").css("background-color", "#ffffff");
        $("#menu").css("border-bottom", "5px solid #DCECF2");
        $("#circle").css("border-bottom", "7px solid #DCECF2");
        $("#circle").html('<a href="index.html"><img src="images/logo2.svg" alt="Logotyp"></a>')
        $(".links >a").css("color", "#123859");
        $(".links > i").css("color", "#123859");
        $(".links > a > i").css("color", "#123859");
    } else {
        $("#circle").css("background-color", "transparent");
        $("#menu").css("background-color", "transparent");
        $("#menu").css("border-bottom", "none");
        $("#circle").css("border-bottom", "none");
        $("#circle").html('<a href="index.html"><img src="images/logo.svg" alt="Logotyp"></a>');
        $(".links > a > i").css("color", "rgb(255, 255, 255)");
        $(".links > a").css("color", "rgb(255, 255, 255)");
    }
});
/* HEADER SLIDER */
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
}
