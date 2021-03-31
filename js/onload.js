//判断访问设备
var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
var windowWidth = $(window).width();
$(function () {
    //判断访问设备
    if(isAndroid == true || isiOS == true) {
        // alert('安卓端')
        hidePics()
    }
    if (windowWidth <= 1725){
        hidePics()
    }else{
        showPics()
    }

    $(".shits>div>span").hide()
    var flag = 1
    $(window).scroll(function() {
        var now = $(window).scrollTop();
        if (now > 150 && flag == 1){
            $(".shits>div>span").slideDown(800)
            flag = 0
        }
        if (now > 840){
            $(".to_top").fadeIn()
        }else{
            $(".to_top").fadeOut()
        }
    });
    setWidth()
    var str = function () {
        /*
             ▄▄▄       ███▄    █  █    ██  ██▓     █    ██  ▄████▄   ▄▄▄      
    ▒████▄     ██ ▀█   █  ██  ▓██▒▓██▒     ██  ▓██▒▒██▀ ▀█  ▒████▄    
    ▒██  ▀█▄  ▓██  ▀█ ██▒▓██  ▒██░▒██░    ▓██  ▒██░▒▓█    ▄ ▒██  ▀█▄  
    ░██▄▄▄▄██ ▓██▒  ▐▌██▒▓▓█  ░██░▒██░    ▓▓█  ░██░▒▓▓▄ ▄██▒░██▄▄▄▄██ 
     ▓█   ▓██▒▒██░   ▓██░▒▒█████▓ ░██████▒▒▒█████▓ ▒ ▓███▀ ░ ▓█   ▓██▒
     ▒▒   ▓▒█░░ ▒░   ▒ ▒ ░▒▓▒ ▒ ▒ ░ ▒░▓  ░░▒▓▒ ▒ ▒ ░ ░▒ ▒  ░ ▒▒   ▓▒█░
      ▒   ▒▒ ░░ ░░   ░ ▒░░░▒░ ░ ░ ░ ░ ▒  ░░░▒░ ░ ░   ░  ▒     ▒   ▒▒ ░
      ░   ▒      ░   ░ ░  ░░░ ░ ░   ░ ░    ░░░ ░ ░ ░          ░   ▒   
          ░  ░         ░    ░         ░  ░   ░     ░ ░            ░  ░
                                                   ░                  
                                                                                                    
        */
                }
    console.log(str.getMultiLine());
})

Function.prototype.getMultiLine = function () {
    var lines = new String(this);
    lines = lines.substring(lines.indexOf("/*") + 3, lines.lastIndexOf("*/"));
    return lines;
}

//窗口大小改变时的监听事件
$(window).resize(function () {
    var windowWidth = $(window).width();
    setWidth()
    if (windowWidth <= 1725){
        hidePics()
    }else{
        showPics()
    }
})

//clipboard初始化  
let clipboard = new ClipboardJS('.btn');    
clipboard.on('success', function(e) {    
  $(".clipboard_success").css({display:"block"}) 
  setTimeout(() => {
    $(".clipboard_success").stop().animate({ opacity: 1 }, 5)
    $(".clipboard_success").delay(600).animate({ opacity: 0 }, 150 )
  }, 0);
});    
clipboard.on('error', function(e) {        
});  