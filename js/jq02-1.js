$(document).ready(function(){
$('h3').css({
    backgroundColor:"black",
    color:'white'
});
// index가 짝수인 객체만 선택
$('h3').filter(':even').css({
    border:"5px solid red"
})
// index가 3의 배수인 경우?
$('h3').filter(function(index){
    return index % 3 == 0;
}).css('font-size',"30px")

$('h3').filter(function(index){
    return index % 3 !== 0;
}).css('color',"red")
 
    
    
    
    


}); //end

// filter,end,eq,first,last,add
// is,find()
// 문서객체선택과 탐색
// filter(selector) filter(function)

$(function(){
var xml="";
xml +="<friends>";
xml +="<friend>";
xml +="<name>강김찬</name>";
xml +="<lang>HTML</lang>";
xml +="</friend>"
xml +="<friend>";
xml +="<name>이순신</name>";
xml +="<lang>CSS</lang>";
xml +="</friend>"
xml +="</friends>"
//

var str2xml=$.parseXML(xml);
// each문을 이용해 xml 데이터를 화면에 출력하기
$(str2xml).find('friend').each(function(index){
    var out = '';
    out+="<p>"+$(this).find('name').text()+"</p>";
    out+="<strong>"+$(this).find('lang').text()+"</strong>";
    console.log(out);
    $('body').append(out);
})
});

$(function(){
var xm2 ="";
xm2 =+ "<city>서울</city>"
xm2 =+ "<data>"
xm2 =+ "<mode>A02</mode>"
xm2 =+ "<tmEf>2023-06-08 00:00</tmEf>"
xm2 =+ "<wf>구름많음</wf>"
xm2 =+ "<tmn>18</tmn>"
xm2 =+ "<tmx>28</tmx>"
xm2 =+ "<reliability/>"
xm2 =+ "<rnSt>30</rnSt>"
xm2 =+ "</data>"


var str3xml=$.parseXML(xm2);

$(str3xml).find('data').each(function(index){
    var out = '';
    out+="<p>"+$(this).find('mode').text()+"</p>";
    out+="<strong>"+$(this).find('tmEf').text()+"</strong>";
    console.log(out);
    $('body').append(out);
});
});


