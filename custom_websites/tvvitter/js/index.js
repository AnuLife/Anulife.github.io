$(function () {
    $("main").css("height",$(window).height()-50||"px");
    $(".btn").stop().mouseenter(function () {
        $(this).animate({backgroundColor: "#1b94de"}, 100 );
    })
    $(".btn").stop().mouseleave(function () {
        $(this).animate({backgroundColor: "#1DA1F2"}, 100 );
    })
    $(".loginbtn").stop().mouseenter(function () {
        $(this).animate({backgroundColor: "#f5f5f5"}, 100 );
    })
    $(".loginbtn").stop().mouseleave(function () {
        $(this).animate({backgroundColor: "white"}, 100 );
    })

    $("#register_box").css({"left":boxToX||"px","top":boxToY||"px"});
    $("#login_box").css({"left":boxToX||"px","top":boxToY||"px"});

    //输入姓名时即时获取输入字符串长度，添加到页面上
    $(".name").on('input propertychange', function () {
        $(".count").html($(".name").val().length+"/50")
        if($(".name").val().length>=50){
            $(".count").css({"color":"red"});
        }else{
            $(".count").css({"color":"#657786"});
        }
    });

    //输入框去掉继承于父元素的mousemove方法
    $(".re2 input").mousedown(function (e) {
        $("*").off("mousemove");
        e.stopPropagation();
    })

    //循环插入年份
    for (var i = 2020; i >= 1900; i--) {
        $("#year").html($("#year").html()+"<option value="+i+">"+i+"&nbsp;年</option>")
    }

    //循环插入日期
    for (var i = 1; i <= 31; i++) {
        $("#day").html($("#day").html()+"<option value="+i+">"+i+"</option>")
    }

    $(".birthday>div").click(function () {
        $(this).css({"border-color":"#1b94de","color":"#1b94de"})
        $(this).prevAll().css({"border-color":"#657786","color":"#657786"})
        $(this).nextAll().css({"border-color":"#657786","color":"#657786"})
    }).blur(function () {
        $(this).css({"border-color":"#657786","color":"#657786"})
    })

    //点击日期后判断天数
    $("#day").mousedown(function () {
        //判断平闰年
        if(yearkind($("#year").val()) === 0 && $("#month").val() == 2){
            $("#day").html("<option value=\"\"></option>")
            for (var i = 1; i <= 29; i++) {
                $("#day").html($("#day").html()+"<option value="+i+">"+i+"</option>")
            }
        }else if (yearkind($("#year").val()) === 1 && $("#month").val() === 2){
            $("#day").html("<option value=\"\"></option>")
            for (var i = 1; i <= 28; i++) {
                $("#day").html($("#day").html()+"<option value="+i+">"+i+"</option>")
            }
        }
        //判断大小月
        var bigMon=[1,3,5,7,8,10,12];
        var flag=0;
        for (var i = 0; i < bigMon.length; i++) {
            if(bigMon[i]==$("#month").val() && $("#month").val() != 2){
                flag=1;
                $("#day").html("<option value=\"\"></option>")
                for (var i = 1; i <= 31; i++) {
                    $("#day").html($("#day").html()+"<option value="+i+">"+i+"</option>")
                }
                break;
            }
        }
        if(flag==0  && $("#month").val() != 2 && $("#month").val() != ""){
            $("#day").html("<option value=\"\"></option>")
            for (var i = 1; i <= 30; i++) {
                $("#day").html($("#day").html()+"<option value="+i+">"+i+"</option>")
            }
        }
    })

    //当所有选项都填好后可点击“下一步”
    // if($("") &&  &&  &&  && )

    //点击“下一步”
    $(".next_btn").click(function () {
        $(this).parent().parent().next().css({"display":"block"})
        $(this).parent().parent().css({"display":"none"})
        $(".last_input>input").eq(0).val($(".name").val());
        $(".last_input>input").eq(1).val($(".tel").val());
        $(".last_input>input").eq(2).val($("#year").val()+"年"+$("#month").val()+"月"+$("#day").val()+"日");
    })

    //点击“上一步”
    $(".back").click(function () {
        $(this).parent().prev().css({"display":"block"})
        $(".tip_text_name").css({"display":"none"})
        $(".tip_text_phone").css({"display":"none"})
        $(".tip_text_mail").css({"display":"none"})
        $(this).parent().css({"display":"none"})
    })

    //点击第三步的input框回到第一步
    $(".last_input>input").eq(0).click(function () {
        $(".page2,.page3").css({"display":"none"});
        $(".page1").css({"display":"block"});
        $(".tip_text_name").css({"display":"none"})
        $(".tip_text_phone").css({"display":"none"})
        $(".tip_text_mail").css({"display":"none"})
        $(".name").focus()
    })
    $(".last_input>input").eq(1).click(function () {
        $(".page2,.page3").css({"display":"none"});
        $(".page1").css({"display":"block"});
        $(".tip_text_name").css({"display":"none"})
        $(".tip_text_phone").css({"display":"none"})
        $(".tip_text_mail").css({"display":"none"})
        $(".tel").focus()
    })

    ifWidth()
    move()
})

$(window).resize(function () {
    $("main").css("height",$(window).height()-50||"px");
    ifWidth()
})

//打开注册页面
function onRegister() {
    $("#register_box").css("display","block");
    $("#container").css("display","block");
}

//返回到登录主页面
function back() {
    $("#register_box").css("display","none");
    $("#login_box").css("display","none");
    $("#container").css("display","none");
}

//检测宽度
function ifWidth(){
    if($(window).width()<=848){
        $("article").css("display","none")
    }else{
        $("article").css("display","block")
    }
}

//注册、登陆页面窗口拖拽
function move() {
    $("#register_box,#login_box").mousedown(function (e) {
        x = e.clientX - $(this).offset().left;
        y = e.clientY - $(this).offset().top;
        $("*").mousemove(function (e) {
            var inX = e.clientX - x;
            var inY = e.clientY - y;
            $("#register_box,#login_box").css({"left": inX + "px", "top": inY + "px"})
        })
    })
    $("*").mouseup(function (e) {
        $("*").off("mousemove");
    })
}

//输入框失去焦点时验证内容是否被输入
function verify(a) {
    if($(".name").val() === "" && a === 1){
        $(".name").prev().css({"color":"red"})
        $(".name").parent().css({"border-color":"red"})
        $(".tip_text_name").css({"color":"red","display":"block"});
    }else if($(".name").val() !== "" && a === 1){
        $(".tip_text_name").css({"color":"#657786","display":"none"});
        $(".name").prev().css({"color":"#657786"})
        $(".name").parent().css({"border-color":"#657786"})
    }


    if(!(/^1[0-9]{10}$/.test($(".tel").val())) && a === 2){
        $(".tel").prev().css({"color":"red"})
        $(".tel").parent().css({"border-color":"red"})
        $(".tip_text_phone").css({"color":"red","display":"block"});
    }else if (/^1[0-9]{10}$/.test($(".tel").val()) && a === 2){
        $(".tip_text_phone").css({"color":"#657786","display":"none"});
        $(".tel").prev().css({"color":"#657786"})
        $(".tel").parent().css({"border-color":"#657786"})
    }

    if(!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test($(".mail").val())) && a === 3){
        $(".mail_tip").css({"visibility": "visible"})
        $(".tip_text_mail").css({"color":"red","display":"block"});
        $(".mail").prev().css({"color":"red"})
        $(".mail").parent().css({"border-color":"red"})
    }else if(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test($(".mail").val()) && a === 3){
        $(".tip_text_mail").css({"color":"#657786","display":"none"});
        $(".mail").prev().css({"color":"#657786"})
        $(".mail").parent().css({"border-color":"#657786"})
    }
}

//输入手机号和输入电子邮箱相互转换
function  changeWay() {
    if($(".re2 a").html() === "改用电子邮件" ) {
        $(".mail_option,.mail_tip").css({"display": "block"})
        $(".mail_tip").css({"visibility": "hidden"})
        $(".tel_option,.tel_tip").css({"display": "none"})
        $(".tel_tip").css({"visibility": "visible"})
        $(".re2 a").html("改用手机")
    }else{
        $(".tel_option,.tel_tip").css({"display": "block"})
        $(".tel_tip").css({"visibility": "hidden"})
        $(".mail_option,.mail_tip").css({"display": "none"})
        $(".mail_tip").css({"visibility": "visible"})
        $(".re2 a").html("改用电子邮件")
    }
    $(".tel,.mail").val("")
}

//判断是平年还是闰年
function yearkind(year) {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        //闰年
        return 0;
    } else {
        //平年
        return 1;
    }
}

