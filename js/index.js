function image_toggle(location, image1, image2){ 
    if ($(location).attr("src") ==  image1){
        $(location).attr("src", image2);
    } else {
        $(location).attr("src", image1);
    }
}

function image_swap(location, image){ 
    $(location).attr("src", image);
}

function image_on_out(img_id) {
    var item = document.getElementById(img_id);
    var img_file = ($(item).attr("src"));
    var res = img_file.replace("hover", "default");
    $(item).attr("src", res);
}

function image_on_hover(img_id) {
    var item = document.getElementById(img_id);
    var img_file = ($(item).attr("src"));
    var res = img_file.replace("default", "hover");
    $(item).attr("src", res);
}

function img_hover(item) {
    var img_file = ($(item).attr("src"));
    var res = img_file.replace("default", "hover");
    $(item).attr("src", res);
}
function img_out(item) {
    var img_file = ($(item).attr("src"));
    var res = img_file.replace("hover", "default");
    $(item).attr("src", res);
}

// function change_hero_image() {
//     var item = document.getElementById("hero-image");
//     console.log(item);
//     item.style.backgroundImage = "url('../img/marvelousmaisel.jpg');";
// }

// function updateTransition() {
//     var el = document.querySelector("div.hero-overlay");
     
//     if (el) {
//         var res = el.className.replace("hero-overlay", "hero-overlay-gif");
//       el.className = res;
//     } 
//     return el;
//   }
  
//   var intervalID = window.setInterval(updateTransition, 3000);
  

function updateHero() {
    var item = document.getElementById("hero-gif");
    item.style.opacity= "1";
}
  
var heroTimer = window.setInterval(updateHero, 3000);
  