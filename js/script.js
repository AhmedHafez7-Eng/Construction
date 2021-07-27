window.addEventListener("load", function () {
    /* -------------------- Page Loader--------------------- */
    document.querySelector(".pageLoader").classList.add("fade-out");
    setTimeout(function () {
        document.querySelector(".pageLoader").style.display = "none";
    }, 600);
    /* -------------------- Animation On Scroll--------------------- */
    AOS.init();
});


/* -----------------
Trigger To Top Button
--------------*/

$(window).scroll(function () {
    if ($(this).scrollTop()) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});

$("#toTop").click(function () {
    //1 second of animation time
    //html works for FFX but not Chrome
    //body works for Chrome but not FFX
    //This strange selector seems to work universally
    $("html, body").animate({
        scrollTop: 0
    }, 800);
});

/* -----------------
Tabs Active and Show Content according to activated tab
--------------*/
let tabs = document.querySelectorAll(".categories .btn2");
let tabsArray = Array.from(tabs);
let divs = document.querySelectorAll(".portfolio > div.container");
let divsArray = Array.from(divs);

// console.log(tabsArray);

tabsArray.forEach((ele) => {
    ele.addEventListener("click", function (e) {
        // console.log(ele);
        tabsArray.forEach((ele) => {
            ele.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        divsArray.forEach((div) => {
            div.style.display = "none";
        });
        // console.log(e.currentTarget.dataset.cont);
        document.querySelector(e.currentTarget.dataset.cont).style.display = "flex";
        AOS.init();
    });
});

/* -----------------
Gallery Popup
--------------*/

var modal = document.getElementById("myModal");
var image = document.querySelectorAll(".portfolio .container img");
var modalImg = document.getElementById("imgModal");
for (i in image) {
    image[i].onclick = function () {
        modal.style.display = "block";
        /* apply more than one style to an element in one javascript line
        modal.style.cssText = "display:block; background-color:red;"; */
        modalImg.src = this.src;
        document.body.classList.add("stopScroll");
        document.getElementById("toTop").style.display = "none";
    }

    var span = document.getElementById("close");

    span.onclick = function () {
        modal.style.display = "none";
        document.body.classList.remove("stopScroll");
        document.getElementById("toTop").style.display = "block";
    }
}