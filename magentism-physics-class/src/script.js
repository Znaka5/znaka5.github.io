import { showScrolls, showBtn, hideBtn } from "./showAndHide.js"
import { bulgarian, english } from "./translate.js"

document.addEventListener("DOMContentLoaded", function (ev) {
    ev.preventDefault();

    document.getElementById("para-btn").addEventListener("click", paraShow)
    document.getElementById("para-hide").addEventListener("click", paraHide)

    document.getElementById("dia-btn").addEventListener("click", diaShow)
    document.getElementById("dia-hide").addEventListener("click", diaHide)

    document.getElementById("ferro-btn").addEventListener("click", ferroShow)
    document.getElementById("ferro-hide").addEventListener("click", ferroHide)

    document.getElementById("credits-btn").addEventListener("click", creditShow)
    document.getElementById("credits-hide").addEventListener("click", creditsHide)

    document.getElementById("bg").addEventListener("click", translateBg)
    document.getElementById("en").addEventListener("click", translateEn)

    setTimeout(() => {
        $(document.getElementById("main-text")).fadeIn(3500)
        $(document.getElementById("basic-introduction")).fadeIn(3000)
        $(document.getElementById("basic-introduction01")).fadeIn(2500)
        $(document.getElementById("translate")).fadeIn(2000)
        const list = Array.from(document.querySelectorAll("li"))
        list.forEach(element => {
            $(element).fadeIn(1500)
        });
    }, "150")

});
const infoText = Array.from(document.querySelectorAll("#text"))
const infoVids = Array.from(document.querySelectorAll("#vid"))
const infoBoxes = Array.from(document.querySelectorAll("#boxes"))
const CreditsText = Array.from(document.querySelectorAll("#info"))
const link = document.querySelector("#download")

function paraShow(ev) {
    ev.preventDefault();

    showBtn("para-hide")
    hideBtn("para-btn")

    setTimeout(() => {
        $(infoBoxes[0]).slideUp()
        $(infoBoxes[0]).slideDown()
        showScrolls(infoBoxes[0])
    }, "100")
    
    $(infoVids[0]).fadeIn("slow")
    $(infoText[0]).fadeIn("slow")
}

function paraHide(ev) {
    ev.preventDefault();

    hideBtn("para-hide")
    showBtn("para-btn")

    setTimeout(() => {
        $(infoBoxes[0]).slideDown()
        $(infoBoxes[0]).slideUp()
    }, "100")
    
    $(infoVids[0]).fadeOut("slow")
    $(infoText[0]).fadeOut("slow")
}

function diaShow(ev) {
    ev.preventDefault();

    showBtn("dia-hide")
    hideBtn("dia-btn")

    setTimeout(() => {
        $(infoBoxes[1]).slideUp()
        $(infoBoxes[1]).slideDown()
        showScrolls(infoBoxes[1])
    }, "100")

    $(infoVids[1]).fadeIn("slow")
    $(infoText[1]).fadeIn("slow")
}

function diaHide(ev) {
    ev.preventDefault();

    hideBtn("dia-hide")
    showBtn("dia-btn")

    setTimeout(() => {
        $(infoBoxes[1]).slideDown()
        $(infoBoxes[1]).slideUp()
    }, "100")
    
    $(infoVids[1]).fadeOut("slow")
    $(infoText[1]).fadeOut("slow")
}

function ferroShow(ev) {
    ev.preventDefault();

    showBtn("ferro-hide")
    hideBtn("ferro-btn")

    setTimeout(() => {
        $(infoBoxes[2]).slideUp()
        $(infoBoxes[2]).slideDown()
        showScrolls(infoBoxes[2])
    }, "100")

    $(infoVids[2]).fadeIn("slow")
    $(infoText[2]).fadeIn("slow")
}

function ferroHide(ev) {
    ev.preventDefault();

    hideBtn("ferro-hide")
    showBtn("ferro-btn")

    setTimeout(() => {
        $(infoBoxes[2]).slideDown()
        $(infoBoxes[2]).slideUp()
    }, "100")
    
    $(infoVids[2]).fadeOut("slow")
    $(infoText[2]).fadeOut("slow")
}

function creditShow(ev) {
    ev.preventDefault();

    showBtn("credits-hide")
    hideBtn("credits-btn")
    
    setTimeout(() => {
        $(infoBoxes[3]).slideUp()
        $(infoBoxes[3]).slideDown()
        showScrolls(infoBoxes[3])
    }, "100")

    $(CreditsText[0]).fadeIn("slow")
    $(CreditsText[1]).fadeIn("slow")
    $(link).fadeIn("slow")
}

function creditsHide(ev) {
    ev.preventDefault();

    hideBtn("credits-hide")
    showBtn("credits-btn")

    setTimeout(() => {
        $(infoBoxes[3]).slideDown()
        $(infoBoxes[3]).slideUp()
    }, "100")
    
    $(CreditsText[0]).fadeOut("slow")
    $(CreditsText[1]).fadeOut("slow")
    $(link).fadeOut("slow")
}

function translateBg(ev) {
    ev.preventDefault();

    bulgarian()
    document.getElementById("bg").style.display = "none"
    document.getElementById("en").style.display = "inline-block"

}


function translateEn(ev) {
    ev.preventDefault();

    english()
    document.getElementById("en").style.display = "none"
    document.getElementById("bg").style.display = "inline-block"
}