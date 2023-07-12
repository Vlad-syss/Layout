let body = document.querySelector("body");
//header scroll nav ========================================================================================================================================================================
window.addEventListener("scroll", function () {

    let nav = document.querySelector("#header__nav");
    let navContainer = document.querySelector(".header__container");
    let viewScroll = window.pageYOffset || this.document.documentElement.scrollTo;

    if(viewScroll >= 70){
      nav.classList.add("scroll");
      navContainer.classList.add("scroll");
    }else{
      nav.classList.remove("scroll");
      navContainer.classList.remove("scroll");
    }
})
//header burger ========================================================================================================================================================================
let headerBurger = document.querySelector(".header__burger");
let headerLine = document.querySelector(".header__line");

headerBurger.addEventListener("click", (e) => {
  e.preventDefault();

  headerBurger.classList.toggle("active");
  headerLine.classList.toggle("active");
  body.classList.toggle("lock");
})