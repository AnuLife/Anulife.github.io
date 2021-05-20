"use strict";

//图片轮播
$('#wrap li').click(function () {
  if (!$(this).hasClass('curr')) {
    $('#wrap li').removeClass('curr');
    $(this).addClass('curr');
    $('.curr').stop().animate({
      width: 100
    }, 200, 'linear');
    $('#wrap li').not('.curr').stop().animate({
      width: 100
    }, 200, 'linear');
  }
});
$(".text").mouseenter(function () {
  $(this).animate({
    opacity: 0.5
  }, 150);
});
$(".text").mouseleave(function () {
  $(this).animate({
    opacity: 0.8
  }, 150);
}); //饮茶

$(".back-to-main").click(function () {
  $(".drink-time").fadeOut();
}); //新版头图

$(".note_guide").mouseenter(function () {
  $('.zhegaia').stop().animate({
    width: "100%"
  }, 150);
  $('.zhegaib,.zhegaic,.zhegaid').stop().animate({
    width: "0"
  }, 150);
  $(".guidePic").css({
    backgroundImage: "url('https://s1.ax1x.com/2020/05/18/YfLHgA.jpg')"
  });
});
$(".nintendo_guide").mouseenter(function () {
  $('.zhegaib').stop().animate({
    width: "100%"
  }, 150);
  $('.zhegaia,.zhegaic,.zhegaid').stop().animate({
    width: "0"
  }, 150);
  $(".guidePic").css({
    backgroundImage: "url('https://z3.ax1x.com/2021/05/12/gddtaj.jpg')"
  });
});
$(".jay_guide").mouseenter(function () {
  $('.zhegaic').stop().animate({
    width: "100%"
  }, 150);
  $('.zhegaia,.zhegaib,.zhegaid').stop().animate({
    width: "0"
  }, 150);
  $(".guidePic").css({
    backgroundImage: "url('https://s1.ax1x.com/2020/05/18/YfL73d.jpg')"
  });
});
$(".home_guide").mouseenter(function () {
  $('.zhegaid').stop().animate({
    width: "100%"
  }, 150);
  $('.zhegaia,.zhegaib,.zhegaic').stop().animate({
    width: "0"
  }, 150);
  $(".guidePic").css({
    backgroundImage: "url('https://s1.ax1x.com/2020/09/12/waoh6O.jpg')"
  });
}); //回到旧站

$(".backtoanulife").mouseenter(function () {
  $(this).css({
    boxShadow: "0"
  });
  $(this).css({
    backgroundColor: "#141145"
  });
});
$(".backtoanulife").mouseleave(function () {
  $(this).css({
    boxShadow: "rgb(20, 17, 69) 2px 2px 0px;"
  });
  $(this).css({
    backgroundColor: "#FD4300"
  });
}); //gitalk&valine双评论端

$(".gitalk_btn").click(function () {
  $("#vcomments").css({
    display: "none"
  });
  $("#gitalk-container").css({
    display: "block"
  });
  $(".valine_btn").css({
    color: "black"
  });
  $(".gitalk_btn").css({
    color: "blue"
  });
  $(".moving").animate({
    "width": "180px",
    "marginLeft": "120px"
  });
});
$(".valine_btn").click(function () {
  $("#gitalk-container").css({
    display: "none"
  });
  $("#vcomments").css({
    display: "block"
  });
  $(".valine_btn").css({
    color: "blue"
  });
  $(".gitalk_btn").css({
    color: "black"
  });
  $(".moving").animate({
    "width": "120px",
    "marginLeft": "0px"
  });
}); //游戏页面

$(".gameto").mouseenter(function () {
  $(this).find('.gamepages').animate({
    right: "0"
  }, 150);
  $(this).find('.bp').animate({
    opacity: 0.3
  }, 150);
});
$(".gameto").mouseleave(function () {
  $(this).find('.gamepages').animate({
    right: "-80"
  }, 150);
  $(this).find('.bp').animate({
    opacity: 0
  }, 150);
}); // //banner链接
// $(".gameto").click(function () {
//     $(location).attr('href', '/me/404/')
// });
//作品

$(".shits>div").mouseenter(function () {
  $(this).find(".shit_title_img").animate({
    width: "340px",
    height: "220px",
    marginTop: "-6px",
    marginLeft: "-6px"
  }, 150);
  $(this).find("span:first-of-type").animate({
    bottom: "5px",
    fontSize: "22px"
  }, 80);
  $(this).find("span:last-of-type").animate({
    height: "0px"
  }, 200);
}).stop().mouseleave(function () {
  $(this).find(".shit_title_img").animate({
    width: "320px",
    height: "200px",
    marginTop: "4px",
    marginLeft: "4px"
  }, 150);
  $(this).find("span:first-of-type").animate({
    bottom: "20px",
    fontSize: "18px"
  }, 80);
  $(this).find("span:last-of-type").animate({
    height: "12px"
  }, 200);
}).stop();
$(".shits>.toys_div").click(function () {
  var url = $(this).find("i").html();
  window.open(url);
}); //头图互动

$("#wrap>ul>li").mouseenter(function () {
  $(this).stop().animate({
    "opacity": "0.8"
  }, 150);
}).mouseleave(function () {
  $(this).stop().animate({
    "opacity": "1"
  }, 150);
}); //右下角链接互动

$(".link_l").mouseenter(function () {
  $(this).stop().css({
    backgroundColor: "white"
  });
  $(this).find("span").css({
    color: "#3B3E40"
  });
  $(this).find("div").css({
    "background-position": "0 -29px"
  });
}).stop().mouseleave(function () {
  $(this).stop().css({
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    border: "0"
  });
  $(this).find("span").css({
    color: "white"
  });
  $(this).find("div").css({
    "background-position": "0 0"
  });
}); //获取右下角宽度

function setWidth() {
  var rightWidth = $(".col-2").innerWidth();
  $(".bottom").css({
    width: rightWidth
  });
} //宽度过低时对页面进行调整


function hidePics() {
  //头图切换
  $(".newGuide").hide();
  $(".backlogo").hide();
  $(".mobileimg").show(); //音乐播放器调整

  $(".player__albumImg.active-song").hide();
  $(".player i").hide(); //作品栏调整

  $(".shits>div").css({
    marginLeft: "0px"
  }); //图集页调整

  $(".textnintendoswitch").hide();
  $(".textPC").hide();
  $(".gameto").css({
    width: "100%",
    height: "80%",
    fontSize: "17px"
  });
  $(".gametitle").css({
    textAlign: "left",
    marginLeft: "10px"
  });
} //正常展示图片


function showPics() {
  //头图切换
  $(".newGuide").show();
  $(".mobileimg").hide();
  $(".backlogo").show(); //音乐播放器调整

  $(".player__albumImg.active-song").show();
  $(".player i").show();
  $(".gameto").css({
    width: "670px"
  }); //图集页调整

  $(".textnintendoswitch").show();
  $(".textPC").show();
  $(".gameto").css({
    width: "670px",
    height: "100px",
    fontSize: "30px"
  });
  $(".gametitle").css({
    textAlign: "center",
    marginLeft: "0"
  });
}