let airbods = document.getElementById("airbods");
let conect = document.getElementById("conect");
let contentPargraph = document.getElementById("content_pargraph");
let backphone = document.getElementById("backphone");
let caverphone = document.getElementById("caverphone");
let usephone = document.getElementById("usephone");
let useingPargraph = document.getElementById("useing_pargraph");


window.onscroll = function () {
    let value = scrollY ;
    if (scrollY >= 520) {
        airbods.style.visibility =  "visible" ;
        airbods.style.opacity = value/600 + "0" ;
    }else {
        airbods.style.opacity = value/800 - "0" ;
    }
    if (scrollY >= 600) {
        conect.style.visibility =  "visible" ;
        contentPargraph.style.visibility =  "visible" ;
        contentPargraph.style.top =  60 + "%" ;
        conect.style.opacity = value/800 + "0" ;
        contentPargraph.style.top =  50 + "%" ;
        contentPargraph.style.opacity = value/800 + "0" ;
    }else {
        conect.style.visibility =  "hidden" ;
        contentPargraph.style.visibility =  "hidden" ;
        conect.style.opacity = value/800 - "0" ;
        contentPargraph.style.opacity = value/800 - "0" ;
        contentPargraph.style.top =  60 + "%" ;
    }
    if (scrollY >= 800){
        conect.style.display = "none";
        contentPargraph.style.top =  20 + "%" ;
        contentPargraph.style.opacity = "0" ;
        backphone.style.visibility =  "visible" ;
        caverphone.style.visibility =  "visible" ;
        usephone.style.visibility =  "visible" ;
        useingPargraph.style.visibility =  "visible" ;
        backphone.style.opacity = value/1200 + "0" ;
        caverphone.style.opacity = value/1200 + "0" ;
        usephone.style.opacity = value/1200 + "0" ;
        useingPargraph.style.opacity = value/1200 + "0" ;
        useingPargraph.style.top =  50 + "%" ;
    }else{
        conect.style.display = "block";
        contentPargraph.style.display = "block";
        backphone.style.visibility =  "hidden" ;
        caverphone.style.visibility =  "hidden" ;
        usephone.style.visibility =  "hidden" ;
        useingPargraph.style.visibility =  "hidden" ;
        backphone.style.opacity = value/1200 - "0" ;
        caverphone.style.opacity = value/1200 - "0" ;
        usephone.style.opacity = value/1200 - "0" ;
        useingPargraph.style.opacity = value/1200 - "0" ;
        useingPargraph.style.top =  80 + "%" ;
    }
    console.log(value);
};
