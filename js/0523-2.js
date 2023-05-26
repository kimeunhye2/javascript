// json 파일요청 - 비동기
// fetch , ajax (jQuery),  axios
// fetch().then().then()
// json server
var content = document.getElementById('content');

function search(){
fetch('https://jsonplaceholder.typicode.com/users')
 .then(response => response.json())
 .then(data => {
  console.log(Array.isArray(data));
  var output = "<table border='1'>";
  output += "<tr><th>순번</th><th>이름</th><th>전화번호</th><th>이메일</th></tr>"
  data.forEach((ele, i) => {
   output += "<tr>"
   output += "<td>" + "<a href='#' onclick=detail("+(i+1)+")>" + i + "</a>" + "</td>"
   output += "<td>" + ele.username + "</td>"
   output += "<td>" + ele.phone + "</td>"
   output += "<td>" + ele.email + "</td>"
   output += "</tr>"
  })
  output += "</table>"
  content.innerHTML = output;
 })
}
// 순번 사용자이름, 전화번호, 이메일
// username, email, phone

function detail(id) {
 fetch('https://jsonplaceholder.typicode.com/users/'+id)
  .then(response => response.json())
  .then(data => {
   console.log(Array.isArray(data));
   var output = "<table border='1'>";
   output += "<tr><th>순번</th><th>이름</th><th>전화번호</th><th>이메일</th></tr>"
   output += "<tr>"
   output += "<td>" + data.id + "</td>"
   output += "<td>" + data.username + "</td>"
   output += "<td>" + data.phone + "</td>"
   output += "<td>" + data.email + "</td>"
   output += "</tr>"
   output += "</table>"
   content2.innerHTML = output;
  })
}
//detail();

var content = document.getElementById('content3');

function search2(){
    fetch('https://jsonplaceholder.typicode.com/todos')
     .then(response => response.json())
     .then(data => {
      console.log(Array.isArray(data));
      var output = "<table border='1'>";
      output += "<tr><th>순번</th><th>사용자아이디</th><th>제목</th><th>완성여부</th></tr>"

      data.forEach((ele, i) => {
        if(i <= 10){
       output += "<tr>"
       output += "<td>" + "<a href='javascript:void(0)' onclick=detail2("+(i+1)+")>" + (i + 1) + "</a>" + "</td>"
       output += "<td>" + ele.userId + "</td>"
       output += "<td>" + ele.title + "</td>"
       output += "<td>" + 
       `${ele.completed==true ? "작업완성" : "아직미완성"}` + "</td>"
       output += "</tr>"
     }
    })
      output += "</table>"
      content3.innerHTML = output;
     })
    }

    
function detail2(id) {
    fetch('https://jsonplaceholder.typicode.com/todos/'+id)
     .then(response => response.json())
     .then(data => {
      console.log(Array.isArray(data));
      var output = "<table border='1'>";
      output += "<tr><th>사용자아이디</th><th>제목</th><th>완성여부</th></tr>"
      output += "<tr>"
      output += "<td>" + data.id + "</td>"
      output += "<td>" + data.title + "</td>"
      output += "<td>" + `${data.completed === true ? "ok" : "no "}` + "</td>"
      output += "</tr>"
      output += "</table>"
      content4.innerHTML = output;
     })
   }
   //detail();