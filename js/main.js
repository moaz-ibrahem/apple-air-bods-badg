let airbods = document.getElementById("airbods");
let conect = document.getElementById("conect");
let contentPargraph = document.getElementById("content_pargraph");
let backphone = document.getElementById("backphone");
let caverphone = document.getElementById("caverphone");
let usephone = document.getElementById("usephone");
let useingPargraph = document.getElementById("useing_pargraph");

// control scroll padge 
window.onscroll = function () {
    let value = scrollY ;

    // control airbods pro with scroll  
    if (scrollY >= 490) {
        airbods.style.visibility =  "visible" ;
        airbods.style.opacity = value/600 + "0" ;
        airbods.style.top = 78 + "%" ;
        airbods.style.width = 270 + "px" ;
    }else {
        airbods.style.visibility =  "hidden" ;
        airbods.style.opacity = value/600 - "0" ;
        airbods.style.top = 70 + "%" ;
        airbods.style.width = 300 + "px" ;
    }

    // control img content pro with scroll  
    if (scrollY >= 561) {
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

        // control img use airbods pro with scroll  
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
    
    // view scroll padge 
    console.log(value);
};
