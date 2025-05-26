$(function(){ //문서를 읽고 실행해라
    //보이기 숨기기
    $("#hide").click(function(){
        $("p.one").hide(1000); // ()안에 숫자가 커질수록 속도가 느려짐
    });
    $("#show").click(function(){
        $("p.one").show(1000);
    });
    
    //토글버튼
    $("button.control").click(function(){
        $("mark").toggle();
    });
})