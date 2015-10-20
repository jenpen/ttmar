

// First Link
var firstLink = document.querySelector("#first_paragraph");

firstLink.addEventListener("click", function () {
  document.body.style.background = "#FCD33D";
});


// Second Link
// Select the element and store it in a variable
// attach an event listener
// write a function that:
  // change the stule: display to not none or remove style
  // prevent default action of going to a broken link

var secondLink = document.querySelector("#second_paragraph");
secondLink.addEventListener("click", function () {
    document.querySelector(".second_paragraph").style.display = "";
});

//  Third Link
//  Prevent default action

var thirdLink = document.querySelector("#first_chorus");
thirdLink.addEventListener("click", function() {
    document.querySelector(".first_chorus").style.display = "";
});
thirdLink.addEventListener("click", brokenLink);


var fourthLink = document.querySelector("#third_paragraph");
fourthLink.addEventListener("click", brokenLink)
fourthLink.addEventListener("click", function () {
  document.querySelector(".third_paragraph").style.display = "";
});

var fifthLink = document.querySelector("#fourth_paragraph");
fifthLink.addEventListener("click", brokenLink); fifthLink.addEventListener("click", function () {
  document.querySelector(".fourth_paragraph").style.display = "";
});

var sixthLink = document.querySelector("#second_chorus");


// sixthLink.addEventListener("click", )


// Funciton to prevent the broken links from displaying
function brokenLink (evt) {
   evt.preventDefault();
 }
