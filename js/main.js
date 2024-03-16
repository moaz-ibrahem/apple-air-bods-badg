let airbods = document.getElementById("airbods");
let backphone = document.getElementById("backphone");
let caverphone = document.getElementById("caverphone");
let conect = document.getElementById("conect");
let usephone = document.getElementById("usephone");
// let airbods = document.getElementById("airbods");


window.onscroll = function () {
    let value = scrollY ;
    if (scrollY >= 500) {
        airbods.style.visibility =  "visible" ;
        if (airbods.style.visibility =  "visible"){
            airbods.style.opacity = value/800 + "0" ;
        }
    }else {
        airbods.style.opacity = value/800 - "0" ;
    }
    if (scrollY >= 750) {
        conect.style.visibility =  "visible" ;
        if (conect.style.visibility =  "visible"){
            conect.style.opacity = value/1500 + "0" ;
        }
        // backphone.style.opacity = value/800 + "0" ;
        // caverphone.style.opacity = value/800 + "0" ;
    }else {
        conect.style.visibility =  "hidden" ;
        conect.style.opacity = value/1500 - "0" ;
    }
    console.log(value);
};
