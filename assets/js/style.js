var body = document.querySelector("body");
var work_meniu = document.getElementById("works_meniu_id");
var works = document.getElementById("works");
var meniu = document.getElementById("meniu_id");
var meniu_top = document.getElementById("meniu_top");
var colapse = document.querySelector("body .colapse");
var colapse_top = document.querySelector("body .colapse_top");

function myFunction() {
  event.preventDefault();
  if (work_meniu.style.display === "flex") {
    work_meniu.style.display = "none";
  } else {
    work_meniu.style.display = "flex";
  }
}
function myFunction2() {
  event.preventDefault();

  if (meniu.style.display === "flex") {
    meniu.style.display = "none";
    colapse.style.transform = "rotate(-180deg)";
    colapse.style.transition = "all 1s ease";
  } else {
    meniu.style.display = "flex";
    colapse.style.transform = "rotate(90deg)";
    colapse.style.transition = "all 1s ease";
  }
}
// top meniu hamburger
function myFunction3() {
  event.preventDefault();

  if (meniu_top.style.display === "flex") {
    meniu_top.style.display = "none";
    colapse_top.style.transform = "rotate(-180deg)";
    colapse_top.style.transition = "all 1s ease";
  } else {
    meniu_top.style.display = "flex";
    meniu_top.classList.add("fade");
    colapse_top.style.transform = "rotate(90deg)";
    colapse_top.style.transition = "all 1s ease";
  }
}

// function myMove() {
//   var elem = document.getElementById("animate");
//   var pos = 0;
//   var id = setInterval(frame, 5);
//   function frame() {
//     if (pos == 350) {
//       clearInterval(id);
//     } else {
//       pos++;
//       elem.style.top = pos + "px";
//       elem.style.left = pos + "px";
//     }
//   }
// }
