// --------------------------------- navbar -------------------------------

$(window).scroll(function () {
  var sc = $(window).scrollTop()
  if (sc > 100) {
      $(".in_header_wrapper").addClass("sticky")
  } else {
      $(".in_header_wrapper").removeClass("sticky")
  }
});

// ----------------------------------- silder -----------------------------

$("#myDD").on("hide.bs.dropdown", function (e) {
  if (e.clickEvent) {
    e.preventDefault();
  }
});

// -------------------------------- toggle btn --------------------------------
(function () {
  //Menu Js
  $(".menu_toggle_btn,.open_btn").click(function () {
    $(".in_header_wrapper").toggleClass("menu_open");
    $("html").toggleClass("cm-overflow");
  });
})();

// ------------------------- mouse movment***watch_img_1 --------------------
var iphone = $("#iphone");

var layer = $("#main");

layer.mousemove(function (e) {
  var ivalueX = (e.pageX * -1) / 30;
  var ivalueY = (e.pageY * -1) / 30;
  console.log("ok");
  iphone.css(
    "transform",
    "translate3d(" + ivalueX + "px," + ivalueY + "px, 0)"
  );
});

// -------------------------- watch_img_2 -------------------------
var camera = $("#camera");

var layer = $("#main2");

layer.mousemove(function (e) {
  var cvalueX = (e.pageX * -1) / 40;
  var cvalueY = (e.pageY * -1) / 60;
  console.log("ok");
  camera.css(
    "transform",
    "translate3d(" + cvalueX + "px," + cvalueY + "px, 0)"
  );
});

// ------------------------ watch_img_3 ------------------------
var watch3 = $("#watch3");

var layer = $("#main3");

layer.mousemove(function (e) {
  var cvalueX = (e.pageX * -1) / 40;
  var cvalueY = (e.pageY * -1) / 60;
  console.log("ok");
  watch3.css(
    "transform",
    "translate3d(" + cvalueX + "px," + cvalueY + "px, 0)"
  );
});

// ***********************poster_img***************************
var poster = $("#poster");

var layer = $("#main4");

layer.mousemove(function (e) {
  var cvalueX = (e.pageX * -1) / 40;
  var cvalueY = (e.pageY * -1) / 60;
  console.log("ok");
  poster.css(
    "transform",
    "translate3d(" + cvalueX + "px," + cvalueY + "px, 0)"
  );
});


// ---------------------------------- scroll animation ----------------------
$(document).ready(function () {
  $(window).scroll(function () {
    var positiontop = $(document).scrollTop();
    console.log(positiontop);

    if (positiontop > 1 && positiontop < 50) {
      $("#hero_slider").addClass("animated fadeIn");
    }

    if (positiontop >2400  && positiontop < 2550) {
      $("#animated_1").addClass("animated zoomInDown");
    }

    // if ((positiontop > 800) && (positiontop < 1200)) {
    //     $('#card_two_one').addClass('animated flipInX');
    //     $('#card_two_two').addClass('animated flipInX');
    //     $('#card_two_three').addClass('animated flipInX');
    // }
  });
});


//-----------------------------------------------------------------------
// $(document).ready(function () {
//   $(".parent a").click(function () {
//     $(".parent a").parent().find(".parent").addClass("active");
//     $(this).removeClass("active");
//   });
// });
//----------------------------------------------------------------------

//----------------------------------- navbar dropdown ------------------
$(".child").slideUp();
$(".parent").click(function () {
  $(this).toggleClass("active").find(".child").slideToggle();
  $(this).siblings().removeClass("active").find(".child").slideUp();
});

//------------------------------------ search box ----------------------
$(document).ready(function() {
     
  $(".fa-search").click(function() {
     $(".search-box").toggle();
     $("input[type='text']").focus();
   });

});

//---------------------------------- footer icon -----------------------
$(".f_navbar_icon li").click(function () {
  $(this).toggleClass("active"); 
  $(this).siblings().removeClass("active");
});




