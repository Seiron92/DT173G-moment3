$(window).scroll(function () {
  var e = $(this);
  $head = $("#menu"), e.scrollTop() > 120 ? ($("#circle").css("background-color", "#ffffff"), $("#menu").css("background-color", "#ffffff"), $("#menu").css("border-bottom", "5px solid #DCECF2"), $("#circle").css("border-bottom", "7px solid #DCECF2"), $("#circle").html('<a href="index.html"><img src="images/logo2.svg" alt="Logotyp"></a>')) : ($("#circle").css("background-color", "transparent"), $("#menu").css("background-color", "transparent"), $("#menu").css("border-bottom", "none"), $("#circle").css("border-bottom", "none"), $("#circle").html('<a href="index.html"><img src="images/logo.svg" alt="Logotyp"></a>'));
});
var slideIndex = 0;

function showSlides() {
  var e,
      s = document.getElementsByClassName("mySlides");

  for (e = 0; e < s.length; e++) s[e].style.display = "none";

  ++slideIndex > s.length && (slideIndex = 1), s[slideIndex - 1].style.display = "block", setTimeout(showSlides, 4e3);
}

showSlides(), $(".menu-wrapper").on("click", function (e) {
  $(this).toggleClass("change"), $(this).closest(".fmenu").find(".menu").toggleClass("menuActive"), $(this).closest(".fmenu").find(".menu").show();
});
//# sourceMappingURL=main.js.map
