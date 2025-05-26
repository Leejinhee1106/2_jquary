$(function(){
    $("#hideBtn").click(function(){
        $("p").hide("slow", function(){
            alert("난 사라짐");
        });
    });
});

//자바스크립트
function myDisplayer(some){
    document.getElementById("call").innerHTML = some;
};

function myFirst(){
    myDisplayer("jinhi");
};

function mySecond(){
    myDisplayer("yunzi");
};

myFirst();
mySecond();