
var link = document.querySelector(".btn--init-popup");
var popup = document.querySelector(".popup");
var close = document.querySelector(".popup__btn");
var form = popup.querySelector(".write-us__form");
var login = popup.querySelector("[name=login]");
var email = popup.querySelector("[name=email]");

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