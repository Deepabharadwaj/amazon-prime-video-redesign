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