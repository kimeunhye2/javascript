var str1='뜰에 뜰에 뜰에는 닭이 있다.';
document.write(str1.indexOf('뜰'));
document.write("<br>");
document.write(str1.lastIndexOf('뜰'));
document.write("<br>");
document.write(str1.indexOf('뜰',3));
document.write("<br>");
document.write(str1.lastIndexOf('에',5));
document.write("<br>");
document.write('str1.indexOf(가든) : '+str1.indexOf('가든')+'<br>');
document.write("<br>");
var str2='Wings프로젝트'  ;
document.write(str2+"<br>");
document.write('str2.charAT(4):'+ str2.charAt(4)+'<br>');
document.write('str2.slice(5,8) : '+str2.slice(0,3)+'<br>');
document.write('str2.substring(5,8) : '+str2.substring(5,8)+'<br>');
document.write('str2.substr(5,3) : '+str2.substr(0,3)+'<br>');
document.write('str2.split(s) : '+str2.split('s')+'<br>');
document.write('str1.split(뜰,3) : '+str1.split('뜰',3)+'<br>');
document.write('str2.link(http://www.daum.net) : ' + str2.link('http://www.daum.net')+'<br>');

