let airbods = document.getElementById("airbods");
let backphone = document.getElementById("backphone");
let caverphone = document.getElementById("caverphone");
let conect = document.getElementById("conect");
let usephone = document.getElementById("usephone");
// let airbods = document.getElementById("airbods");


window.onscroll = function () {
    let value = scrollY ;
    if (scrollY >= 5000) {
        airbods.style.opacity = value/800 + "0" ;
    } else {
        airbods.style.opacity = value/800 - "0" ;
    }
    if (scrollY >= 844) {
        backphone.style.opacity = value/800 + "0" ;
        caverphone.style.opacity = value/800 + "0" ;
        conect.style.opacity = value/800 + "0" ;
    }
}