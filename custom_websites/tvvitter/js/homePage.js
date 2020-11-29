$(function () {
    $(".hoverbtn").stop().mouseenter(function () {
        console.log(23)
        $(this).animate({backgroundColor: "#E8F5FE"}, 100 );
    })
    $(".hoverbtn").stop().mouseleave(function () {
        $(this).animate({backgroundColor: "rgba(0, 0, 0, 0.0)"}, 100 );
    })

    $("article").css("height",$(window).height());

    $(".top_op ul.hoverbtn").stop().click(function () {
        $(this).css({"color":"#1DA1F2"})
    })
    $(".top_op ul .hoverbtn").stop().mouseenter(function () {
        $(this).children("div").css({"background-position-x":"-24px"})
    })
    $(".top_op ul .hoverbtn:not(.chosen)").stop().mouseleave(function () {
        $(this).css({"color":"black"})
        $(this).children("div").css({"background-position-x":"0px"})
    })

    $(".chosen").css({"color": "#1DA1F2"}).children("div").css({"background-position-x":" -24px"})

    $(".btn").stop().mouseenter(function () {
        $(this).animate({backgroundColor: "#1b94de"}, 100 );
    })
    $(".btn").stop().mouseleave(function () {
        $(this).animate({backgroundColor: "#1DA1F2"}, 100 );
    })

    $(".head").css({"background-image":"url('../img/head.jpg')"})
    $(".head").next().children("b").html("Anuluca");
    $(".head").next().children("span").html("@"+"TIlucario");

    $(".search_div input").click(function () {
        $(".search_div").css({"background-color":"white","border":"1px solid #1DA1F2"}).children("div").eq(0).css({"background-position-x":"-18px"})
        $(".search_div").children("div").eq(1).css({"display":"block"})
    })
    $(".search_div input").blur(function () {
        $(".search_div").css({"background-color":"#E6ECF0","border":"0"}).children("div").eq(0).css({"background-position-x":"0px"})
        $(".search_div").children("div").eq(1).css({"display":"none"})
    })

    $(".upload1").css({"cursor":"default","background-color":"#8ED0F8","border":"0"})

    $("textarea").keyup(function () {
        if($("textarea").val().length>0){
            $(".upload1").css({"display":"none"})
            $(".upload2").css({"display":"block"})
        }else{

            $(".upload2").css({"display":"none"});
            $(".upload1").css({"display":"block"});
        }
    })
    $(".upload2").click(function () {
        if($(".upload2").css("display") == "block"){
            $(".main_articles").prepend(sendTwit())
            var curHeight = $(".main_articles").children(".article_slip").eq(0).height();
            $(".main_articles").children(".article_slip").eq(0).css({"height":"0"}).animate({height:curHeight},100)
            func()
            $("textarea").val("")
        }
    })



    // 动态添加热点新闻和趋势
    var hot_news = "<div class=\"hot_news\">\n" +
        "                    <div class=\"news_left\">\n" +
        "                        <h3>测试</h3>\n" +
        "                        <h3>&nbsp;· 2020年1月1日</h3>\n" +
        "                        <p>测试内容测试内容测试内容测试内容</p>\n" +
        "                    </div>\n" +
        "                    <div class=\"news_right\"></div>\n" +
        "                </div>";
    var hot_rank = "<div class=\"hot_rank\">\n" +
        "                    <div class=\"hoverbtn\">ˇ</div>\n" +
        "                    <span class=\"city_name\">测试</span><span> 的趋势</span>\n" +
        "                    <h2>测试</h2>\n" +
        "                    <span class=\"hot_count\">测试</span><span> 推文</span>\n" +
        "                </div>";
    $(".hot_div>div").eq(0).prepend(hot_news)
    $(".hot_div>div").eq(0).prepend(hot_news)
    $(".hot_div>div").eq(0).prepend(hot_news)
    $(".hot_div>div").eq(0).prepend(hot_rank)
    $(".hot_div>div").eq(0).prepend(hot_rank)

    // 动态添加推荐关注
    $(".reco_div>div").eq(0).prepend(addRec_acc(1))
    $(".reco_div>div").eq(0).prepend(addRec_acc(2))
    $(".reco_div>div").eq(0).prepend(addRec_acc(3))



    func()

})

$(window).resize(function () {
    $("article").css("height",$(window).height());
    ifWidth()
})

function ifWidth(){

}

function clickLike() {
    $(".like_btn").click(function () {
        var like_count = $(this).next().children(".like_count").eq(0).html()||0;
        like_count++;
        $(this).next().children(".like_count").eq(1).html(like_count);
        $(this).next().children(".like_count").eq(0).animate({"margin-top":"-18px"},200)
        $(this).next().children(".like_count").eq(0).html(like_count);

        $(this).next().children(".like_count").eq(0).animate({"margin-top":"10px"},0)

        $(this).animate({backgroundColor: "rgba(0, 0, 0, 0.0)"}, 100 ).off("mouseleave").off("mouseenter");
        $(this).children("div").css({"background-position-y":"-37px"});
    })
}


function sendTwit() {
    var nowDate = new Date();
    var new_twit = "<div class=\"article_slip\">\n" +
        "                <div class=\"article_left\"><div class=\"acc_head\"></div></div>\n" +
        "                <div class=\"article_right\">\n" +
        "                    <div class=\"self_msg\"><span>"+$(".bottom_op b").html()+"</span><span>"+$(".bottom_op span").html()+"</span><span>&nbsp;· <span>"
                                +nowDate.getHours()+"时"+nowDate.getMinutes()+"分"+
        "                       </span></span></div>\n" +
        "                    <div class=\"main_text\">\n" +
        $("textarea").val() +
        "                    </div>\n" +
        "<div class=\"interacts\">\n" +
        "                        <div class=\"comment\">\n" +
        "                            <div class=\"comment_btn\"><div></div></div>\n" +
        "                            <div class=\"count\">\n" +
        "                                <span>1</span>\n" +
        "                                <span>1</span>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                        <div class=\"repost\">\n" +
        "                            <div class=\"repost_btn\"><div></div></div>\n" +
        "                            <div class=\"count\">\n" +
        "                                <span>1</span>\n" +
        "                                <span>1</span>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                        <div class=\"like\">\n" +
        "                            <div class=\"like_btn\"><div></div></div>\n" +
        "                            <div class=\"count\">\n" +
        "                                <span class=\"like_count\"></span>\n" +
        "                                <span class=\"like_count\"></span>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                        <div class=\"share\">\n" +
        "                            <div class=\"share_btn\"><div></div></div>\n" +
        "                            <div class=\"count\">\n" +
        "                                <span>1</span>\n" +
        "                                <span>1</span>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>" +
        "                </div>\n" +
        "            </div>";

    return new_twit
}

function func() {
    // 推特互动
    $(".comment_btn,.share_btn").stop().mouseenter(function () {
        $(this).animate({backgroundColor: "#E8F5FE"}, 100 );
        $(this).children("div").css({"background-position-y":"-17px"});
    })
    $(".repost_btn").stop().mouseenter(function () {
        $(this).animate({backgroundColor: "#DEF2EA"}, 100 );
        $(this).children("div").css({"background-position-y":"-17px"});
    })
    $(".like_btn").stop().mouseenter(function () {
        $(this).animate({backgroundColor: "#F3E1E9"}, 100 );
        $(this).children("div").css({"background-position-y":"-18px"});
    })
    $(".interacts>div>div").stop().mouseleave(function () {
        $(this).animate({backgroundColor: "rgba(0, 0, 0, 0.0)"}, 100 );
        $(this).children("div").css({"background-position-y":"0"});
    })
    clickLike()
}

function  addRec_acc(num) {
    return "<div class=\"rec_acc\">\n" +
        "                    <div class=\"acc_head\" style='background-image: url(\"../img/acc_head"+num+".jpg\")'></div>\n" +
        "                    <div class=\"acc_name\">\n" +
        "                        <span>测试试试试试</span>\n" +
        "                        <span>@<span>testststst</span></span>\n" +
        "                    </div>\n" +
        "                    <div class=\"follow_btn hoverbtn\">关注</div>\n" +
        "                </div>";
}