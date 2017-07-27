$(function(){
    // 右侧图片及服务
    $('.ads-right img').eq(0).src = './images/ads/ads-right.jpg';
    $('.ads-right img').eq(0).css({'width':'100%','height':310});
    var txt=["话费","机票","酒店","游戏","企业购","加油卡","电影票","火车票","众筹","理财","礼品卡","白条"];
    for (var i = 0; i < txt.length; i++) {
        var a1 = $('<a href=""></a>');
        var a2 = $("<a href=''>"+txt[i]+"</a>");
        var li = $('<li></li>');
        li.append(a1);
        li.append(a2);
        var icons = "./images/ads/sprite_fs@1x.png";

        a1.css({"background-image":" url('"+ icons +"')"});
        if (i<4) {
            a1.css({"background-position":(-i*44)+"px 0px"});
        }else if(i>=4&&i<8){
            a1.css({"background-position":(-i%4*44)+"px" +" -44px"});
        }else if(i>=8&&i<12){
            a1.css({"background-position":(-i%4*44)+"px" +" -88px"});
        }
        $('.services ul').append(li);
    };
})