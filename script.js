{
  const toggleBackground = () => {
    const bodyElement = document.querySelector(".js-body");
    const themeElement = document.querySelector(".js-header__themeName");
    bodyElement.classList.toggle("js-body--dark");
    themeElement.innerText = bodyElement.classList.contains("js-body--dark")
      ? "jasny"
      : "ciemny";
  };

  const init = () => {
    const buttonElement = document.querySelector(".js-header__button");
    buttonElement.addEventListener("click", toggleBackground);
  };

  init();
}
