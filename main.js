var btn = document.getElementsByClassName("ham-menu");
var CloseBtn = document.querySelector("#close");
var menu = document.querySelector("nav");

btn.onclick = function() {
    menu.style.display = "block";
}

CloseBtn.onclick = function() {
    menu.style.display = "none";
}