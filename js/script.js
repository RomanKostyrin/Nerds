
var link = document.querySelector(".btn--init-popup");
var popup = document.querySelector(".popup");
var close = document.querySelector(".popup__btn");
var form = popup.querySelector(".write-us__form");
var login = popup.querySelector("[name=login]");
var email = popup.querySelector("[name=email]");
var radio1 = document.getElementById("radio-1");
var radio2 = document.getElementById("radio-2");
var radio3 = document.getElementById("radio-3");
var slider1 = document.querySelector(".slider-1");
var slider2 = document.querySelector(".slider-2");
var slider3 = document.querySelector(".slider-3");

link.addEventListener("click", function(event) {
event.preventDefault();
popup.classList.add("popup--show");
});

close.addEventListener("click", function(event) {
event.preventDefault();
popup.classList.remove("popup--show");
popup.classList.remove("popup--error");
});

form.addEventListener("submit", function(event) {
if (!login.value || !email.value) {
event.preventDefault();
popup.classList.add("popup--error");
}
});

window.addEventListener("keydown", function(event) {
if (event.keyCode === 27) {
if (popup.classList.contains("popup--show")) {
popup.classList.remove("popup--show");
}
}
});

radio1.addEventListener("click", function(event) {
if (!slider1.classList.contains("slider--show")) {
slider1.classList.add("slider--show");
slider2.classList.remove("slider--show");
slider3.classList.remove("slider--show");
}
});

radio2.addEventListener("click", function(event) {
if (!slider2.classList.contains("slider--show")) {
slider1.classList.remove("slider--show");
slider2.classList.add("slider--show");
slider3.classList.remove("slider--show");
radio2.checked;
}
});

radio3.addEventListener("click", function(event) {
if (!slider3.classList.contains("slider--show")) {
slider1.classList.remove("slider--show");
slider2.classList.remove("slider--show");
slider3.classList.add("slider--show");
}
});