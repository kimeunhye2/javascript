var regExp1 = new RegExp('text');
var regExp2 = /text/;

var str1 = new String('welcome');
var str2 = "html css javascript";

// test()
// 정규표현식과 일치하는 문자열이 있으면
// true or false를 리턴
// exec();
// 정규표현과 일치하는 문자열을 리턴한다.
var reg1 = /css/;

var out1 = regExp1.test("123");
console.log(out1);
var out2 = reg1.exec(str2);
console.log(out2);
document.write(out2);
var out2 = /css/.exec(str2);
console.log(out2);

var str1 = "html css javascript";
var reg3 = /css/i; //대소문자 구별하지 않음
var reg4 = new RegExp("css", "i");

// match(regExp) 일치하는 문자열 리턴
// replace(regExp,대체) 문자열 대체
// search(regExp) 문자열위치 리턴
// split(regExp) 배열로 리턴

var string = "Javascript jQuery Ajax";
var out = string.split(/script/);
console.log(out);
var out = string.split(/jQuery/);
console.log(out);

// 대체문자
// $$   일치하는 문자열
// $`일부분 
// $' 뒷부분
var regExp = /script/;
var out = string.replace(regExp, "$`")
console.log(out);
var regExp = /script/;
var out = string.replace(regExp, "$'")
console.log(out);


// 플래그 문자
// g 전역비교
// i 대소문자 구분안함
// m 여러줄검사
var reg = /script/ig
var out = /script/ig.exec(string);
console.log(out);
var out = string.match(reg);
console.log(out)
var out = string.search(reg);
console.log(out)
var out = string.split(reg);
console.log(out)

//앵커문자
// `ABC` 맨앞문자가 ABC
// ABC$ 맨뒤문자가 ABC
var str1 = new String("welcome to my world")
var reg = /`my`/ig;
var out = str1.replace(reg, "you");
console.log(out)
var reg = /world$/ig;
var out = str1.replace(reg, "세계");
console.log(out);

// 메타문자
// 아무글자
// [abc] 괄호안의 글자
// [^abc] abc제외
// [a-z][A-Z][0-9]
var out = str1.replace(/[my]/g, "너")
console.log(out);
var out = str1.replace(/[^my]/g, "안녕")
console.log(out);

// 메타문자2
// \d 숫자
// \w 아무단어
// \s 공백문자
// \D 숫자아님
// \W 아무단어 아님(알파벳,숫자,밑줄_을 제외한 문자)
// \S 공백문자 아님 

//reg.test(string) exex()
// string.match(reg) replace(reg) split(reg) search(reg)

var reg = /\d\d\d-\d\d\d/;
var string = "010-1234";
console.log(string.search(reg));
console.log(string.search(reg));

// 수량문자
// a+ a가 적어도 1개이상
// a+ 0개 또는 여러개
// a7 0개 또는 `개
// a{5} a가 5개
// a{2.} a가 2개 이상
// a{2.} a가 2개 이상

var reg = /\d{3}-[1234]\d{3}/;
var str1 = "123-5123"
var str2 = "123-2243"

// console.log("???"+str1+match(reg));
// console.log(str2.match(reg));

// 선택문자
// (abc|def) abc 또는 edf
// email=/\/
var email = /\sfese/
var out = email.test("abc@daum.net");
console.log(out)

// 천단위 구분기호 넣기
// var num="12345678";
// var out;
// while(reg,test(num)){
//     out=num.replace(reg,`$1,$2`)
//     console.log(out);
// }

function addComa(number) {
    var reg = /(^[+-]?\d+)(\d{3})/;
    var string = String(number);

    while (reg.test(string)) {
        string = string.replace(reg, "$1,$2")
        console.log(out);
    }
    return string;
}
console.log(addComa('12345678'))

var reg=/(\d+)(\d{3})(\d{3})(\d{3})(\d{3})(\d{3})/;
var string="123456782342332"
string =string.replace(reg,"$1,$2,$3,$4,$5")
console.log(string);


