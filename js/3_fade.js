$(function(){
    //버튼을 누를 때의 기능은?
    /*
    $("button").click(function(){
        $("#div1").fadeOut();//일반 속도
        $("#div2").fadeOut("slow");//느리게
        $("#div3").fadeOut(3000);//3초
    })
    */

   //toggle버튼 
    $("button").click(function(){
        $("#div1").fadeToggle();//일반 속도
        $("#div2").fadeToggle("slow");//느리게
        $("#div3").fadeToggle(3000);//3초
    });
    $("button").click(function(){
        $("#div1").fadeIn(fast);
        $("#div2").fadeIn("1000");
        $("#div3").fadeIn();
    })  
})