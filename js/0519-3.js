img.style.width = "200px";
img.style.length = "150px";

var i = 0; // 전역변수
function change() {
    if (1 % 2 == 0)
        img.src = "./imgs/개.png";
    else {
        img.src = "./imgs/개2.png";
    }
    i++;
}

// 클로저, 내부함수호출
function hide(){
    img.style.visibility="hidden";
}
function show(){
    img.style.visibility="visible";
}
var changeStyle=()=>{
var h2=document.querySelector('h2');
h2.style.background="pink";
h2.style.fontStyle="italic";
h2.style.color="red";
h2.style.fontSize="30px";
h2={
background:"pink",
fontSize:"italic",
}
}