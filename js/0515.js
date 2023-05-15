// javascript basic

// 변수--->메모리공간에 하나의 저장이 생긴다.
var name="홍길동";
var age;
age=30;

// 변수는 선언을 하고,
// 그 변수에 값을 할당해야한다.
//할당하지 않으면 undefined;
document.write("<h2>name<h2>");
document.write("<h2>"+name+"<h2>");
document.write("<h2>"+age+"살<h2>");

document.write(`<h2>${name}은 ${age}살입니다.<h2>`);
// ` 백틱 esc 밑에
// 문자는 따옴표, 쌍따옴표, 훗따옴표로 감싼다.
var age=40;

var 이름;  // undefined
document.write(이름); // undefined 정의가 안되었음
이름="장동건";
document.write(이름);
이름="원빈";
document.write(이름);
console.log("내 이름은 " + 이름 + " 입니다.");


//let 과 const

let name1="Mike";
console.log(name1);
name1="Tomson";
console.log(name1);
let name2="마이클";
//let으로 선언한 변수명은 중복사용할 수 없다.
//let과 var는 스코프 scope- 렉시컬환경, 영역

//const 상수 : 절대로 ㅏ바뀌지 않는 상수
const 생일="2010-10-01"
console.log(생일);
// 생일="2010-10-10";
console.log(생일);
//변수이름정의하기

// var 05name="홍길동"; 

var let="let me";
console.log(let);
// var for="welcome"


// 자바-final
//변수선언할때 변하지 않는 값은 const
//변할 수 있는 값은 var와 let
// let은 이름이 중복되면 에러발생
//var는 중복되도 그래도 사용가능
//변수 이름은 첫글자는 숫자가 될 수 없다.
//변수이름은 예약어로 사용할 수 없다.
//가급적 상수는 대문자로 사용한다.
// 변수명은 읽기 쉽고 이해할 수 있게 선언한다.
// 문자와숫자 , &와  _만 사용가능하다.

var BIRTHDAY=new Date();
console.log(BIRTHDAY.toLocaleTimeString());

let $aaa_=300;

let msg="i'm a boy";
console.log(msg);
let msg2="i\m a boy";
console.log(msg);
let msg3=`My name is ${name}`;
console.log(msg3);
let msg4=`나는 ${30+1}살 입니다.`;
console.log(msg4);

// 숫자 Number, 문자 string
// 더하기, 뺴기, 곱하기 ,나누기, 나머지
//    +     -      *       /       %

console.log(name/2); // Nan, Not a number
console.log(이름*2);
console.log(이름+10);// +문자와 연결기능
console.log(이름-10);// NAN

//  + 더하기 기능, 문자와 연결연산자 기능

//Bollean 불리언 - 참,거짓,true,false
// 불대수-논리학
let a=true;
let b=false;
console.log(a==b);
// == 등가연산자, ===등치연산자(일치연산자)
console.log(10>5); //true
console.log(name=="홍길동");

// 프로그래머 아내
// 남편 프로그래머
// 만약에 가게에 가서 여자가 있거나 이쁘면 가지마.

// type of 연산자
console.log(typeof 3)
// string,number, undefined, Nan ,boolean
// null 존재하지 않는 값
// undefined는 초기화(정의)하지 않는 자료형

// var age=null;  -> object 객체

function add(){  }       //함수
console.log(typeof add);
var 고양이={  }      //객체
console.log(typeof 고양이);

// 숫자+문자 = 문자
console.log(100+"hi");

// 문장과 표현식
// statement와 expression
// var a=10; statement
// 4+10 ; expression


// 대화상자
// alert 경고창, 알려주는창
// pormt  입력받는 창
// confirm  확인받는 창

var 별명=prompt("별명을 입력하세요","한글로");
console.log("환영합니다." + 별명 + "님");

var 성인=confirm("당신은 성인입니다?");
//is adult
// 확인 -> true , 취소 ->false
//조건문

if(성인==true){
    console.log("당신은 성인이군요");
}else{
    console.log("당신은 아직 미성년자이군요");
} 

// = 은 대입연산자
// a = 3; // a 라는 변수 3을 대입해라
// ==, ===

var x="Hellow world"
alert(x);

var s;
s=100;
document.write(s + "<br>");

s="홍길동";
document.write(s + "<br>")

var s ="Hellow world"
var t ="How are you" + " today?";

document.write(s + "<br> ");
document.write(t + "<br> ");
document.write(s.toUpperCase() + "<br> ");

var myCar = {model: "bmz", color:"red", hp:100};
document.write(myCar.model+"<br>");
document.write(myCar.color+"<br>");
document.write(myCar.hp+"<br>");

var age=prompt("나이를 입력하세요","만 나이로 입력합니다.");

var x,y;
var input;

input = prompt("정수를 입력하시오","정수로");
x= parseInt(input);

input = prompt("정수를 입력하시오","정수로");
y = parseInt(input);

document.write(x + y +"<br>")

var s;

s = 100;
document.write(s + "<br>");

s ="홍길동"
document.write(s + "<br>");