//parrentNode
//childNodes  --배열
//children    --배열
//firstchild
//lastChild
///previousSibling
///nextSibling

window.onload=function(){
var ul=document.querySelector('ul');
var h2=document.querySelector('h2');
console.log(ul.childNodes);
//text, li, text, li ,text ,li ,text
var nodes=ul.childNodes;
nodes.item(1).style.color='red'
var text1=ul.childNodes.item(1).firstChild.nodeValue;
var text2=ul.childNodes.item(5).firstChild.nodeValue;
h2.innerHTML = text1+text2;

var li=document.getElementsByTagName('li')
li[0].parentNode.style.border="3px solid red"
var text3=ul.childNodes.item(3).textContent;
h2.innerHTML=text2+text3+text1;

document.getElementById('wrap').children[0].style.color="blue";
var p =document.getElementsByTagName("p")[1];
p.style.background="gold";

var nextObj=p.nextSibling;
while(nextObj.nodeType !=1){  //태그가 아니면  
     nextObj=nextObj.nextSibling;
}
nextObj.style.background='red';
}//

 
var s=document.getElementById('food');
var child=s.firstChild;
var child2=s.lastChild;

// while(child){
//     // if(child.nodeType==1 && child2.nodeType==1){
//     //     child.style.background='red';
//     // } 
//     child=child.nextSibling;
//     child2=child2.previousSibling;
//     child.style.background="blue";
//     child2.style.background="pink";

//     //폼 선택하기
// document.fm.style.border="3px solid red";

// document.fm.submit.style.background="gold";
// document.forms[0].style.borderRadius="20px";
// document.forms[1].style.border="2px solid blue";
// document.forms[1].elements[0].style.margin="10px";
// f1.ch1.checked=true;    

// f1.name.onfocus=function(){
//     var text=f1.name.value;
//     var span=document.querySelector('span');
//     span.innerHTML=text+"님 어서오세요";
// }
// f1.name.onblur=function(){
// var span=document.querySelector('span');
// span.innerHTML=text+"님 안녕히가세요";
// }


//기본이벤트 제거
// 폼전송 submit버튼을 클릭->폼전송
// a태그클릭->href로 링크
// }


// f1.onsubmit=function(){
//     var pw1=f1.pw1;
//     var pw2=f2.pw2;
//     pw2.value=pw.vlaue;
//     pw.value=pw1.value;
//     pw2.disable=true;


//     return false;   //꼭 알아두기
// }
// f1.name.defaultValue="원빈"








