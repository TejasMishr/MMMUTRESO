//     $("#search-icon").click(function() {
//     $(".nav").toggleClass("search");
//     $(".nav").toggleClass("no-search");
//     $(".search-input").toggleClass("search-active");
//   });

//   $('.menu-toggle').click(function(){
//      $(".nav").toggleClass("mobile-nav");
//      $(this).toggleClass("is-active");
//     });


//   obj.data= "UNIT 1.pdf";

// console.log("hello");




var bari1 = document.querySelector('#bar1');
var bari2 = document.querySelector('#bar2');
var bari3 = document.querySelector('#bar3');

var navi = document.querySelector('.navbar ul');
var menu = document.querySelector('#mobile-menu');
// /transform: translate(-101%);

var count = 0;


var f1 = () => {
    // alert('ok');
    count++;


    if (count % 2 == 0) {
        // alert("ok");
        navi.style.transform = "translate(-101%)";

        bari2.style.display = "flex";
        bari1.style.transform = "rotate(0) translateY(0px)";
        bari3.style.transform = "rotate(0)  translateY(0px)";
    } else {

        navi.style.display = "flex";
        navi.style.transform = "translate(0%)";
        bari2.style.display = "none";
        bari1.style.transform = "rotate(45deg) translateY(6px)";
        bari3.style.transform = "rotate(-45deg)  translateY(-5px)";
    }




}

// marquee bug fixing
// <!-- block right -->
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
})

window.addEventListener('keydown', function (event) {

    event.preventDefault();

});

// window.onresize = function () {
//     if ((window.outerHeight - window.innerHeight) > 100) {
//         window.close();
//     }
// }



//scroll effect


document.addEventListener("DOMContentLoaded", function () {

    const exploreResources = document.getElementById("explore-resources");


    exploreResources.addEventListener("click", function () {
        // Calculate the scroll position to scroll by 98%
        const scrollPosition = window.innerHeight * 1;


        window.scrollTo({
            top: scrollPosition,
            behavior: "smooth", //smoooth scroll
        });
    });
});





//error handle
try {
    // Code that might produce an error
} catch (error) {
    // Handle the error silently, or do nothing
}