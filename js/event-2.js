// div.addEventListener('click',function(){
// console.log("div click")

// })

// span.addEventListener('click',function(){
// console.log("span click")

// })

// btn.addEventListener('click',function(){
// console.log("btn click")

// });

// 이벤트위임구현
// div.addEventListener('click', function (e) {
//     var id = e.target.id;
//     console.log(e.currentTarget);
//     console.log(e.target);

//     if (id == "div") {
//         console.log("div click")


//     } else if (id == "span") {

//         console.log("span click")

//     } else if (id == "btn") {
//         console.log("btn click")

//     }
//     var tagname=e.target.tagname;
//     if (id == "div") {
//         console.log("div click")


//     } else if (id == "span") {

//         console.log("span click")

//     } else if (id == "btn") {
//         console.log("btn click")

//     }

// })

document.addEventListener('click',function(e){
    // console.log(e.srcElement);
    var target=e.target || e.srcElement;
    if (e.target.tagName == "DIV"){
        console.log("div Click");

    }
    else if(e.target.tagName == "SPAN"){
        console.log("span Click");

    }
    else if(e.target.tagName == "BUTTON"){
        console.log("btn Click");
    }
});

// 키보드관련 이벤트
// event.keyCode
// String.fromCharCode()

window.onkeydown=function(e){
    console.log(e.keyCode);
    console.log(String.fromCharCode(e.keyCode));
    if(e.keyCode==65){
        document.querySelector('body').style.background='red'
    }
    if(e.keyCode==66){
        document.querySelector('body').style.background='red'
    }
    if(e.keyCode==67){
        document.querySelector('body').style.background='red'
    }
    if(e.keyCode==68){
        document.querySelector('body').style.background='red'
    }
}


var outer=document.querySelector('.outer');
var inner=document.querySelector('.inner');

outer.onmouseover=function(){
    document.body.append("<h1>mouseover</h1>")
}

outer.onmouseout=function(){
    document.body.append("<h1>mouseout</h1>")
}
outer.onmouseenter=function(){
    document.body.append("<h1>mouseenter</h1>")
}

outer.onmouseleave=function(){
    document.body.append("<h1>mouseleave</h1>")
}


// over는 이벤트 버빌링이 적용
// enter는 안에 있는 지 여부만 따짐