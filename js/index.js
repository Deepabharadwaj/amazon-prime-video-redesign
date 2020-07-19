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