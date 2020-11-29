 $(".gocha").bind("click",function(){
     $(".welcome").animate({height:"0px",paddingTop:"0px"},400);
    });

 $.fn.typewriter = function () {
    this.each(function () {
        var $ele = $(this), str = $ele.html(), sum = 0;
        $ele.html("");
        var timer = setInterval(function () {
            var current = str.substr(sum, 1);
            if (current == '<') {
                sum = str.indexOf('>', sum) + 1;
            } else {
                sum++;
            }
            var curr = str.substr(0, sum);
            $ele.html(curr + (sum & 1 ? '_' : ''));
            if (sum >= str.length) {
                clearInterval(timer);
            }
            }, 80);
    });
    return this;
};
$(".black").typewriter();
$(".red").typewriter();
$(".blue").typewriter();

 jQuery.fn.shake = function (intShakes /*Amount of shakes*/, intDistance /*Shake distance*/, intDuration /*Time duration*/) {
     this.each(function () {
         var jqNode = $(this);
         jqNode.css({ position: 'relative' });
         for (var x = 1; x <= intShakes; x++) {
             jqNode.animate({ left: (intDistance * -1) }, (((intDuration / intShakes) / 4)))
                 .animate({ left: intDistance }, ((intDuration / intShakes) / 2))
                 .animate({ left: 0 }, (((intDuration / intShakes) / 4)));
         }
     });
     return this;
 };

 $(".blackscreen").hide();
 $(".qqqr").hide();
 $(".wxqr").hide();
 $(".wrongcode").hide();
 $(".nocode").hide();
 $(".black").mouseenter(function () {
     $(".black").shake(5, 2, 1);
 });
 $(".blogbtn").mouseenter(function () {
     $(".bluestick1").animate({width:"55%"},250);
     $(".logoback").animate({top:"0px"},150);
     $(".blueback1").animate({width:"600px"},200);
     $(".blog").css({color:"black"});

 });
 $(".blogbtn").mouseleave(function () {
     $(".bluestick1").animate({width:"0px"},250);
     $(".logoback").animate({top:"-50px"},150);
     $(".blueback1").animate({width:"0px"},200);
     $(".blog").css({color:"#888888"});
 });
 $(".githubbtn").mouseenter(function () {
     $(".githublogo img").animate({marginTop:"0px"},150);
 });
 $(".githubbtn").mouseleave(function () {
     $(".githublogo img").animate({marginTop:"-50px"},150);
 });
 $(".weibobtn").mouseenter(function () {
     $(".weibologo img").animate({marginTop:"0px"},150);
 });
 $(".weibobtn").mouseleave(function () {
     $(".weibologo img").animate({marginTop:"-50px"},150);
 });
 $(".twitterbtn").mouseenter(function () {
     $(".twitterlogo img").animate({marginTop:"0px"},150);
 });
 $(".twitterbtn").mouseleave(function () {
     $(".twitterlogo img").animate({marginTop:"-50px"},150);
 });
 $(".resourcebtn").mouseenter(function () {
     $(".resourcelogo img").animate({marginTop:"0px"},250);
     $(".bluestick2").animate({width:"55%"},250);
     $(".blueback2").animate({width:"400px"},200);
     $(".resource").css({color:"black"});
 });
 $(".resourcebtn").mouseleave(function () {
     $(".resourcelogo img").animate({marginTop:"-60px"},250);
     $(".bluestick2").animate({width:"0px"},250);
     $(".blueback2").animate({width:"0px"},200);
     $(".resource").css({color:"#888888"});
 });
 $(".privatebtn").mouseenter(function () {
     $(".bluestick3").animate({width:"30%"},150);
 });
 $(".privatebtn").mouseleave(function () {
     $(".bluestick3").animate({width:"0px"},150);
 });
 $(".qqbtn").click(function () {
     $(".qqqr").fadeIn(300);
     $(".blackscreen").fadeIn(300);
 });
 $(".wxbtn").click(function () {
     $(".wxqr").fadeIn(300);
     $(".blackscreen").fadeIn(300);
 });
 $(".blackscreen").click(function () {
     $(".qqqr").fadeOut(300);
     $(".wxqr").fadeOut(300);
     $(".wrongcode").hide();
     $(".nocode").hide();
     $(".blackscreen").fadeOut(300);
 });
 $(".wrongcode .b").click(function () {
     $(".wrongcode").hide();
     $(".blackscreen").hide();
 })

 $(".intro").hide();
 $(".profilebtn").hide();
 $(function(){
     function show(){
         $(".circle").animate({width:"950px",height:"950px",marginTop:"-230px"},700);
     }
    function fade(){
         $(".intro").fadeIn(1100);
         $(".profilebtn").fadeIn(1100);
    }
    setInterval(fade,700)
     setInterval(show)
 });

 $(".neck").animate({width:"100%"},600);
 $(".neckhair").animate({width:"100%"},600);
     $(".welcome").animate({height:"30px",paddingTop:"10px"},400);

 //回到顶部
 $(document).ready(function () {
     $.goup({
         trigger: 300,
         bottomOffset: 50,
         locationOffset: 50,
         title: 'Top&nbsp;',
         titleAsText: true
         });
 });

 $(".plz,#password,.confirm,.passwordbtn,.x").hide();
 $(".qqlogo2").hide();
 $(".wxlogo2").hide();
 $(".maillogo2").hide();
 $(".qqbtn").mouseenter(function () {
     $(".qqlogo2").fadeIn(100);
     $(".qqbtn").animate({right:"0px"},150)
 });
 $(".qqbtn").mouseleave(function () {
     $(".qqlogo2").fadeOut(100);
     $(".qqbtn").animate({right:"-130px"},150)
 });
 $(".wxbtn").mouseenter(function () {
     $(".wxlogo2").fadeIn(100);
     $(".wxbtn").animate({right:"0px"},150)
 });
 $(".wxbtn").mouseleave(function () {
     $(".wxlogo2").fadeOut(100);
     $(".wxbtn").animate({right:"-150px"},150)
 });
 $(".mailbtn").mouseenter(function () {
     $(".maillogo2").fadeIn(100);
     $(".mailbtn").animate({right:"0px"},150)
 });
 $(".mailbtn").mouseleave(function () {
     $(".maillogo2").fadeOut(100);
     $(".mailbtn").animate({right:"-210px"},150)
 });

 $(".text").mouseenter(function () {
     $(this).animate({opacity:0.5},150)
 });
 $(".text").mouseleave(function () {
     $(this).animate({opacity:0.8},150)
 });
 $(".privatebtn").click(function () {
     $(".privatebtn").fadeOut();
     $(".privatebox").animate({width:"697px"});
     $(".plz,#password,.confirm,.passwordbtn,.x").fadeIn();
 });
 $("#password").click(function () {
     $(".passwordbtn").animate({width:"401px"});
 });
 $(".x").click(function () {
     $(".plz,#password,.confirm,.passwordbtn,.x").fadeOut();
     $(".privatebox").animate({width:"0px"},100);
     $(".privatebtn").fadeIn();
 });


 // 背景视差
 window.onload=function(){
         document.body.style.backgroundAttachment="fixed";
         window.onscroll=function () {
             document.body.style.backgroundPosition = "0px " + (0 + (Math.max(document.documentElement.scrollTop, document.body.scrollTop) / 1)) + "px";
         }


     };

 //密码聚焦
 // window.onload = function(){
 //     window.document.onclick=function(){$('#password').focus()}
 // };


//图片轮播
 $('#wrap li').click(function(){
     if(!$(this).hasClass('curr')){
         $('#wrap li').removeClass('curr');
         $(this).addClass('curr');

         $('.curr').stop().animate({
             width: 700
         }, 200, 'linear');
         $('#wrap li').not('.curr').stop().animate({
             width: 100
         }, 200, 'linear');
     }
 });

 //密码验证
 function toopen(){
     if(document.getElementById("password").value!="") {
         if (document.getElementById("password").value == "11037") {
             document.forms[0].action = "pages/404.html";
             return true;
         } else {
             $(".wrongcode").show();
             $(".blackscreen").show();
             document.getElementById("password").value = "";
             return false;
         }
     }else {
         $(".nocode").show();
         $(".blackscreen").show();
         return false;
     }
 }