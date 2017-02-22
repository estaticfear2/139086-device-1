var link = document.querySelector(".js-feedback-open");
var openmap = document.querySelector(".js-open-map");
var popup = document.querySelector(".modal-content");
var mappopup = document.querySelector(".modal-content-map");
var close = popup.querySelector(".modal-content-close");
var closemap = mappopup.querySelector(".modal-content-close");

link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
    login.focus();
});

openmap.addEventListener("click", function(event) {
    event.preventDefault();
    mappopup.classList.add("map-show");
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
});

closemap.addEventListener("click", function(event) {
    event.preventDefault();

    mappopup.classList.remove("map-show");
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
        }
        if (mappopup.classList.contains("map-show")) {
            mappopup.classList.remove("map-show");
        }
    }
});