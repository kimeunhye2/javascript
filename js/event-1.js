// var form2=document.getElementById('form2');
// form2.onsubmit=function(e){
//     var val=name2.value;
//     console.log(val);
//     if(val.replace(/[가-힝]/g,"").length==0){
//         return true;
    
//     }else{
//         //return false;
//         alert("한글이름을 입력하세요");
//         e.preventDefault();
//     }
//     }

    // 이벤트버블링 : 자식->부모
    // 이벤트캡쳐링 : 부모->자식
    // eventPhase
 
    // button.addEventListener('click',function(e){
    //     console.log(e.eventPhase)
    // },false)
    // field.addEventListener('click',function(e){
    //     console.log(e.eventPhase)
    // },false)
    // html.addEventListener('click',function(e){
    //     console.log(e.eventPhase)
    // },true)
    // body.addEventListener('click',function(e){
    //     console.log(e.eventPhase)
    // },true)

    // function handler(){
    //     var phase=['캡쳐링',"타겟","버블링"];
    //     console.log(e.target.nodeName,this.nodeName,phase[e.eventPhase-1])
    // }
    // button.addEventListener('click',handler,true);
    // field.addEventListener('click',handler,true);
    // body.addEventListener('click',handler,true);
    // html.addEventListener('click',handler,true);

    // e.target.nodeName ->e.target 최종자식 엘리먼트
    // this.nodeName. ->e.currentTarget 이벤트가 호출된 엘리먼트


    // button.addEventListener('click',handler,false);
    // field.addEventListener('click',handler,false);
    // body.addEventListener('click',handler,false);
    // html.addEventListener('click',handler,false);

    // 이벤트 전달방지
    // event.stopPropagation();
    // 이벤트버블링제거
    // 익스플로러->event.cancelBuble=true

    a.onclick = function (e) { 
        this.style.background = " gold ";
        e.stopPropagation();
    }
    p.onclick = function (e){
        this.style.background ="cyan"
        e.stopPropagation();
    }
    div.onclick = function(e){
        this.style.background = "pink"
    }
    