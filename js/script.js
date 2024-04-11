
var video = document.querySelector("#video");
var btnSonido = document.querySelector(".sec__hero__audio");


btnSonido.addEventListener("click", e => {
    video.muted = !video.muted;
})

var secMnResponsive = document.querySelector(".sec__mn__responsive");
var iconMn = document.querySelector(".icon__mn");
var iconX = document.querySelector(".icon__x");
var secMnResponsiveLi = document.querySelectorAll(".sec__mn__Responsive__li");

iconMn.addEventListener("click", () => {
    secMnResponsive.classList.add("activeMnResponsive");
    secMnResponsiveLi[0].classList.add("activeMnResponsiveLi");
    secMnResponsiveLi[1].classList.add("activeMnResponsiveLi");
    secMnResponsiveLi[2].classList.add("activeMnResponsiveLi");
    secMnResponsiveLi[3].classList.add("activeMnResponsiveLi");
    secMnResponsiveLi[4].classList.add("activeMnResponsiveLi");
    secMnResponsiveLi[5].classList.add("activeMnResponsiveLi");
    secMnResponsiveLi[6].classList.add("activeMnResponsiveLi");
})

iconX.addEventListener("click", () => {
    secMnResponsive.classList.remove("activeMnResponsive");
    secMnResponsiveLi[0].classList.remove("activeMnResponsiveLi");
    secMnResponsiveLi[1].classList.remove("activeMnResponsiveLi");
    secMnResponsiveLi[2].classList.remove("activeMnResponsiveLi");
    secMnResponsiveLi[3].classList.remove("activeMnResponsiveLi");
    secMnResponsiveLi[4].classList.remove("activeMnResponsiveLi");
    secMnResponsiveLi[5].classList.remove("activeMnResponsiveLi");
    secMnResponsiveLi[6].classList.remove("activeMnResponsiveLi");
})