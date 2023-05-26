// 1.생성자 함수 선언
// 2.학생배열
// 3.전체학생출력

function Student(name, html, css, js, java) {
    this.name = name;
    this.html = html;
    this.css = css;
    this.js = js;
    this.java = java;

    this.getSum = function () {
        return this.html + this.css + this.js + this.java
    }
    this.getAvg = function () {
        return this.getSum() / 4
    }
    //toString overide
    this.toString = function () {
        return this.name + " " + this.getSum() + " " + this.getAvg();
    }
}


// 학생 정보 데이터
var students = [];
students.push(new Student("원빈", 10, 20, 30, 40))
students.push(new Student("장동건", 10, 20, 30, 40))
students.push(new Student("강호동", 10, 20, 30, 40))
students.push(new Student("유재석", 10, 20, 10, 40))
students.push(new Student("소녀시대", 30, 20, 30, 40))
students.push(new Student("BTS", 10, 20, 30, 40))
students.push(new Student("2PM", 10, 20, 50, 10))
students.push(new Student("동방신기", 10, 20, 30, 40))
students.push(new Student("이정재", 10, 50, 30, 40))
students.push(new Student("빅뱅", 10, 50, 30, 40))

console.log(students)

//전체성적
function allStudent() {
    var output = "이름 총점 평균 <br> <hr>"
    for (var i in students) {
        output += (Number(i) + 1) + " : " + students[i].toString() + "<br>"
    }
    output += "<hr>"
    list.innerHTML = output;
}

//장학금 1등~3등
// sort().slice(0.3) 메소드체이닝
function good() {
    var output = "이름 총점 평균 <br> <hr>"

    var students2 = students.sort(function (a, b) {
        return b.getSum() - a.getSum();
    }).slice(0, 3)
    for (var i in students2) {
        output += (Number(i) + 1) + " : " + students2[i].toString() + "<br>"
    }
    output += "<hr>"
    list.innerHTML = output;
}

function bad() {
    var output = "이름 총점 평균 <br> <hr>"

    var students2 = students.sort(function (a, b) {
        return a.getSum() - b.getSum();
    }).slice(0, 3)
    for (var i in students2) {
        output += (Number(i) + 1) + " : " + students2[i].toString() + "<br>"
    }
    output += "<hr>"
    list.innerHTML = output;
}


function jang() {
    var output = "이름 총점 평균 <br> <hr>"

    var students2 = students.sort(function (a, b) {
        return a.getSum() - b.getSum();
    }).slice(4, 7)
    for (var i in students2) {
        output += (Number(i) + 4) + " : " + students2[i].toString() + "<br>"
    }
    output += "<hr>"
    list.innerHTML = output;
}

function del() {
    console.log(students)
    students.splice(0, 1)

    var output = " 이름 총점 평균 <br> <hr>"

    for (var i in students) {
        output += (i) + " : " + students[i].toString() + "<br>"
    }
    output += "<hr>"
    list.innerHTML = output;
}

function reload() {
    location.reload();
}

// getFullYear()
// getMonth()
// getDate()
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDate();
var 요일 = date.getDay();

switch(요일){
    case 0 : 요일="일요일";
    break;
    case 4:요일= "목요일"
    break;
}

time.innerHTML = year + "년" + month + "일" + day + "일" + 요일;

