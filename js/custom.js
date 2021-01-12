//图片轮播
$('#wrap li').click(function () {
    if (!$(this).hasClass('curr')) {
        $('#wrap li').removeClass('curr');
        $(this).addClass('curr');

        $('.curr').stop().animate({
            width: 900
        }, 200, 'linear');
        $('#wrap li').not('.curr').stop().animate({
            width: 50
        }, 200, 'linear');
    }
});
$(".text").mouseenter(function () {
    $(this).animate({ opacity: 0.5 }, 150)
});
$(".text").mouseleave(function () {
    $(this).animate({ opacity: 0.8 }, 150)
});


//音乐播放器
$(document).ready(function () {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', $('.active-song').attr('data-src'));

    var tl = new TimelineMax();
    tl.to('.player__albumImg', 15, {
        rotation: '360deg',
        repeat: -1,
        ease: Power0.easeNone
    }, '-=0.2');
    tl.pause();

    $('.player__play').click(function () {

        if ($('.player').hasClass('play')) {
            $('.player').removeClass('play');
            audioElement.pause();
            TweenMax.to('.player__albumImg', 0.2, {
                scale: 1,
                ease: Power0.easeNone
            })
            tl.pause();
        } else {
            $('.player').addClass('play');
            audioElement.play();
            TweenMax.to('.player__albumImg', 0.2, {
                scale: 1.1,
                ease: Power0.easeNone
            })
            tl.resume();
        }

    });


    var playhead = document.getElementById("playhead");
    audioElement.addEventListener("timeupdate", function () {
        var duration = this.duration;
        var currentTime = this.currentTime;
        var percentage = (currentTime / duration) * 100;
        playhead.style.width = percentage * 4 + 'px';
    });

    function updateInfo() {
        $('.player__author').text($('.active-song').attr('data-author'));
        $('.player__song').text($('.active-song').attr('data-song'));
    }
    updateInfo();

    $('.player__next').click(function () {
        if ($('.player .player__albumImg.active-song').is(':last-child')) {
            $('.player__albumImg.active-song').removeClass('active-song');
            $('.player .player__albumImg:first-child').addClass('active-song');
            audioElement.addEventListener("timeupdate", function () {
                var duration = this.duration;
                var currentTime = this.currentTime;
                var percentage = (currentTime / duration) * 100;
                playhead.style.width = percentage * 4 + 'px';
            });
        } else {
            $('.player__albumImg.active-song').removeClass('active-song').next().addClass('active-song');
            audioElement.addEventListener("timeupdate", function () {
                var duration = this.duration;
                var currentTime = this.currentTime;
                var percentage = (currentTime / duration) * 100;
                playhead.style.width = percentage + '%';
            });
        }
        updateInfo();
        audioElement.setAttribute('src', $('.active-song').attr('data-src'));
        audioElement.play();
    });

    $('.player__prev').click(function () {
        if ($('.player .player__albumImg.active-song').is(':first-child')) {
            $('.player__albumImg.active-song').removeClass('active-song');
            $('.player .player__albumImg:last-child').addClass('active-song');
            audioElement.addEventListener("timeupdate", function () {
                var duration = this.duration;
                var currentTime = this.currentTime;
                var percentage = (currentTime / duration) * 100;
                playhead.style.width = percentage * 4 + 'px';
            });
        } else {
            $('.player__albumImg.active-song').removeClass('active-song').prev().addClass('active-song');
            audioElement.addEventListener("timeupdate", function () {
                var duration = this.duration;
                var currentTime = this.currentTime;
                var percentage = (currentTime / duration) * 100;
                playhead.style.width = percentage + 'px';
            });
        }
        updateInfo();
        audioElement.setAttribute('src', $('.active-song').attr('data-src'));
        audioElement.play();
    });

});

//回到旧站
$(".backtoanulife").mouseenter(function () {
    $(this).css({ boxShadow: "0" });
    $(this).css({ backgroundColor: "#141145" });
});
$(".backtoanulife").mouseleave(function () {
    $(this).css({ boxShadow: "rgb(20, 17, 69) 2px 2px 0px;" });
    $(this).css({ backgroundColor: "#FD4300" });
});

//gitalk&valine双评论端
$(".gitalk_btn").click(function () {
    $("#vcomments").css({ display: "none" });
    $("#gitalk-container").css({ display: "block" });

    $(".valine_btn").css({ color: "black" })
    $(".gitalk_btn").css({ color: "blue" })
    $(".moving").animate({
        "width": "180px",
        "marginLeft": "120px"
    });
});
$(".valine_btn").click(function () {
    $("#gitalk-container").css({ display: "none" });
    $("#vcomments").css({ display: "block" });

    $(".valine_btn").css({ color: "blue" })
    $(".gitalk_btn").css({ color: "black" })
    $(".moving").animate({
        "width": "120px",
        "marginLeft": "0px"
    });
});

//游戏页面
$(".gameto").mouseenter(function () {
    $(this).find('.gamepages').animate({ right: "0" }, 150);
    $(this).find('.bp').animate({ opacity: 0.3 }, 150);
});
$(".gameto").mouseleave(function () {
    $(this).find('.gamepages').animate({ right: "-80" }, 150);
    $(this).find('.bp').animate({ opacity: 0 }, 150);
});

// //banner链接
// $(".gameto").click(function () {
//     $(location).attr('href', '/me/404/')
// });

//作品
$(".shits>div").mouseenter(function () {
    $(this).find(".shit_title_img").animate({ width: "340px", height: "220px", marginTop: "-6px", marginLeft: "-6px" }, 150)
    $(this).find("span:first-of-type").animate({ bottom: "5px", fontSize: "22px" }, 80)
    $(this).find("span:last-of-type").animate({ height: "0px" }, 200)
}).mouseleave(function () {
    $(this).find(".shit_title_img").animate({ width: "320px", height: "200px", marginTop: "4px", marginLeft: "4px" }, 150)
    $(this).find("span:first-of-type").animate({ bottom: "20px", fontSize: "18px" }, 80)
    $(this).find("span:last-of-type").animate({ height: "12px" }, 200)
})
$(".shits>.toys_div").click(function () {
    var url = $(this).find("i").html();
    window.open(url)
})

//头图互动
$("#wrap>ul>li").mouseenter(function () {
    $(this).stop().animate({ "opacity": "0.8" }, 150)
}).mouseleave(function () {
    $(this).stop().animate({ "opacity": "1" }, 150)
})

//右下角链接互动
$(".link_l").mouseenter(function () {
    $(this).stop().css({ backgroundColor: "white" })
    $(this).find("span").css({ color: "#3B3E40" })
    $(this).find("div").css({ "background-position": "0 -29px" })
}).stop().mouseleave(function () {
    $(this).stop().css({ backgroundColor: "rgba(0, 0, 0, 0.5)", border: "0" })
    $(this).find("span").css({ color: "white" })
    $(this).find("div").css({ "background-position": "0 0" })
})

//获取右下角宽度
function setWidth() {
    var rightWidth = $(".col-2").innerWidth();
    $(".bottom").css({ width: rightWidth })
}

//宽度过低时对页面进行调整
function hidePics() {
    //头图切换
    $(".pics").hide()
    $(".mobileimg").show()

    //音乐播放器调整
    $(".player__albumImg.active-song").hide()
    $(".player i").hide()

    //作品栏调整
    $(".shits>div").css({ marginLeft: "0px" })

    //图集页调整
    $(".textnintendoswitch").hide()
    $(".textPC").hide()
    $(".gameto").css({ width: "100%", height: "80%", fontSize: "17px" })
    $(".gametitle").css({ textAlign: "left", marginLeft: "10px" })
}

//正常展示图片
function showPics() {
    //头图切换
    $(".pics").show()
    $(".mobileimg").hide()

    //音乐播放器调整
    $(".player__albumImg.active-song").show()
    $(".player i").show()
    $(".gameto").css({ width: "670px" })

    //作品栏调整
    $(".shits>div").css({ marginLeft: "20px" })

    //图集页调整
    $(".textnintendoswitch").show()
    $(".textPC").show()
    $(".gameto").css({ width: "670px", height: "100px", fontSize: "30px" })
    $(".gametitle").css({ textAlign: "center", marginLeft: "0" })
}