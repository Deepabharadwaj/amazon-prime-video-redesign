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



$(document).ready(function(){
    $("#carouselControls1").on('slid.bs.carousel', function () {
      console.log('Finished sliding');
      currentIndexPop = $('#carouselControls1 div.active').index() + 1;
      if(currentIndexPop == 1)
      {
        var item = document.getElementById("c1-p1");
        $(item).attr("src", "icons/card_icons/progressbar_highlighted.svg");
        var item = document.getElementById("c1-p2");
        $(item).attr("src", "icons/card_icons/progressbar_default.svg");
      } else {
        var item = document.getElementById("c1-p2");
        $(item).attr("src", "icons/card_icons/progressbar_highlighted.svg");
        var item = document.getElementById("c1-p1");
        $(item).attr("src", "icons/card_icons/progressbar_default.svg");
      }
    });

    $("#carouselControls2").on('slid.bs.carousel', function () {
        console.log('Finished sliding');
        currentIndexPop = $('#carouselControls2 div.active').index() + 1;
        if(currentIndexPop == 1)
        {
          var item = document.getElementById("c2-p1");
          $(item).attr("src", "icons/card_icons/progressbar_highlighted.svg");
          var item = document.getElementById("c2-p2");
          $(item).attr("src", "icons/card_icons/progressbar_default.svg");
        } else {
          var item = document.getElementById("c2-p2");
          $(item).attr("src", "icons/card_icons/progressbar_highlighted.svg");
          var item = document.getElementById("c2-p1");
          $(item).attr("src", "icons/card_icons/progressbar_default.svg");
        }
      });

      $("#carouselControls3").on('slid.bs.carousel', function () {
        console.log('Finished sliding');
        currentIndexPop = $('#carouselControls3 div.active').index() + 1;
        if(currentIndexPop == 1)
        {
          var item = document.getElementById("c3-p1");
          $(item).attr("src", "icons/card_icons/progressbar_highlighted.svg");
          var item = document.getElementById("c3-p2");
          $(item).attr("src", "icons/card_icons/progressbar_default.svg");
        } else {
          var item = document.getElementById("c3-p2");
          $(item).attr("src", "icons/card_icons/progressbar_highlighted.svg");
          var item = document.getElementById("c3-p1");
          $(item).attr("src", "icons/card_icons/progressbar_default.svg");
        }
      });

      $("#carouselControls4").on('slid.bs.carousel', function () {
        console.log('Finished sliding');
        currentIndexPop = $('#carouselControls4 div.active').index() + 1;
        if(currentIndexPop == 1)
        {
          var item = document.getElementById("c4-p1");
          $(item).attr("src", "icons/card_icons/progressbar_highlighted.svg");
          var item = document.getElementById("c4-p2");
          $(item).attr("src", "icons/card_icons/progressbar_default.svg");
        } else {
          var item = document.getElementById("c4-p2");
          $(item).attr("src", "icons/card_icons/progressbar_highlighted.svg");
          var item = document.getElementById("c4-p1");
          $(item).attr("src", "icons/card_icons/progressbar_default.svg");
        }
      });

      $("#carouselControls5").on('slid.bs.carousel', function () {
        console.log('Finished sliding');
        currentIndexPop = $('#carouselControls5 div.active').index() + 1;
        if(currentIndexPop == 1)
        {
          var item = document.getElementById("c5-p1");
          $(item).attr("src", "icons/card_icons/progressbar_highlighted.svg");
          var item = document.getElementById("c5-p2");
          $(item).attr("src", "icons/card_icons/progressbar_default.svg");
        } else {
          var item = document.getElementById("c5-p2");
          $(item).attr("src", "icons/card_icons/progressbar_highlighted.svg");
          var item = document.getElementById("c5-p1");
          $(item).attr("src", "icons/card_icons/progressbar_default.svg");
        }
      });
 });