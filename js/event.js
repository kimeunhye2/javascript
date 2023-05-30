// window.onload=funciton(){}
// load가 이벤트 이름, 이벤트 타입
// onload는 이벤트 속성
// 할당된 함수 : 이벤트리스너, 이벤트 핸들러
// 이벤트 연결한다.

// 이벤트 관련 속성
// click,mouseover,mousecenter,focus

// 이벤트 모델
// DOM Level 0
// 인라인 이벤트 모델, 기본이벤트 모델
// 한 객체에 두번이상 적용할 수 없다.

// DOM Level 2
// 표준이벤트 모델, 익스플로러 이벤트모델 
// addEventListner(type,listener,false)
// attachEvent

// 익스플로러면 attachEvent를 사용하고
// 그외에는 addEventListner을 사요애라
// 크로스브로우징위한 코드구현하자.

// 이벤트제거
Header.onclick=function(e){
    console.log(this);
    console.log(); // e, window.event(고전)
    var event=e || window.event;

    // header.onclick = null; 이벤트 제거
    for(var key in e){
        box.innerHTML +=`<p>${key} " ${e[key]}</p>`
    }

    console.log(e.target); //자식
    console.log(e.currentTarget); //부모
}
// 이벤트 강제실행
a.onclick= function(){
    ca.innerHTML= Number(ca.innerHTML)+1
}
b.onclick= function(){
    cb.innerHTML=  parseInt(cb.innerHTML)+1
    a.onclick();  //강제실행
}

// 자동실행
var stop= setInterval(b.onclick,1000)
c.onclick=function(){
    clearInterval(stop);
}
d.onclick=function(){
    stop=setInterval(b.onclick,1000)
}
// 기본이벤트제거
// 이벤트전달제거
// preventDefualt()
// stopProgation();

// 기본이벤트 -> a태그클릭
// form -> submit



// daum.onclick=function(){
//     this.style.background='pink'
//     // event.preventDefault();
//     // return false;
// }


daum.addEventListener('click',function(){
    this.style.background='pink';
})

function naver(){
    naver2.style.background='red'
    return false;
}
// 한글입력식에 전송한다.
form.onsubmit=function(){
var val=name.value;
console.log(val);
if(val.replace(/[가-힝]/g,"").length==0){


}else{
    //return false;
    alert("한글이름을 입력하세요");
    e.preventDefault();
}

}
