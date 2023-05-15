
let buttonElement = document.querySelector(".js-header__button");
let bodyElement = document.querySelector(".js-body");
let themeElement = document.querySelector(".js-header__themeName");

buttonElement.addEventListener("click", () => {
    bodyElement.classList.toggle("js-body--dark");
    themeElement.innerText = bodyElement.classList.contains("js-body--dark") ? "jasny" : "ciemny";
});