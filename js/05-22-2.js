// setAttribute("속성","값")
// getAtrribute("속성")

var a=document.querySelectorAll('a');


console.log(a[0].getAttribute("value"));

for(var i = 0; i<a.length; i++){
    a[i].style.backgroundColor=a[i].getAttribute('value');
}

for(var i = 0; i<a.length; i++){
    a[i].setAttribute('index',i);
}

// deta-               사용자가정의속성  dataset 속성
// a태그를 클릭하면 data-color 속성을 읽어들여서 글자색변경
for(var i = 0; i<a.length; i++){
    a[i].addEventListener('click',function(){
        // this.style.color=this.getAttribute('data-color');
        this.style.color=this.dataset.color;
        this.textContent = this.dataset.coffeeName;
        console.log(this.dataset.coffeeName)

    });
}

//  innerHTML,textContent
// h1.innerHTML="<span> hi </span>"
// h1.textcontent="<span> hi </span>"

// 버튼을 하나 만들어서 클릭했을때
// 리스트 목록이 동적으로 추가되는 예제

var btn=document.querySelector('button');
var str='';
str+="<ul>";
str+="<li>javascript</li>";
str+="<li>jQuery</li>";
str+="<li>aJax</li>";
str+="</ul>";

var box=document.getElementById('box')

btn.onclick=addList;

function addList(){
    box.innerHTML=str;

}

function delList(){
    box.innerHTML="";
}

var btn=document.querySelectorAll('button');
btn[1].onclick=delList;


var i= 0;
function toggleList(){
    i%2==0 ? addList() : delList();

    i++;
}
// 리스트 제거버튼, 리스트토글버튼
btn[2].onclick=toggleList;





