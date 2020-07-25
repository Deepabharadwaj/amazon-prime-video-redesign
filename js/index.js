function image_toggle(location, image1, image2){ 
    if ($(location).attr("src") ==  image1){
        $(location).attr("src", image2);
    } else {
        $(location).attr("src", image1);
    }
}

function on_off_toggle(item){ 
    var img_file = $(item).attr("src");
    if (img_file.indexOf("_on_") != -1 ){
        var res = img_file.replace("_on_", "_off_");
        $(item).attr("src", res);
    } else {
        var res = img_file.replace("_off_", "_on_");
        $(item).attr("src", res);
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

function updateHero() {
    var item = document.getElementById("hero-gif");
    item.style.opacity= "1";
}
  
var heroTimer = window.setInterval(updateHero, 3000);
  