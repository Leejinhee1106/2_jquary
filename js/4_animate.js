$(document).ready(function(){
    $(".yop").click(function(){
        $(".rect").animate({
            left:'+=50px', 
            opacity: '-=0.1', 
            height: '+=150px',
            width: '+=150px', 
            //색상은 적용되지 않음. 플러그인 필요
        });
    });
    
    $("button.sh").click(function(){
        $("div.sh").animate({
            height:'toggle'
        })
    });
});
//비동기로 실행
$(function(){
     $("button.time").click(function(){
        //비동기로 실행될 박스 변수설정
        var div = $("div.time");
        //아래부터가 Q
        div.animate({height:'300px', opacity:'.4'}, "slow");
        div.animate({width:'300px', opacity:'.8'}, "fast");
        div.animate({height:'100px', opacity:'.4'}, "slow");
        div.animate({width:'100px', opacity:'.8'}, "fast");
        div.animate({borderRadius:'50%'}, "slow");
        div.animate({borderRadius:'50%', left:'400px'}, "slow");
    });

    $(".typoB").click(function(){
        let sec = $(".typo");
        sec.animate({left:'100px', width:'+=100px'}, "fast");
        sec.animate({fontSize:'3rem'}, "slow");
    });
});
