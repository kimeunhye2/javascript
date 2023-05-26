// setInterval(Function(),1000)
// Button.addEventListner('click',function(){


// })


//  콜백함수,예시
// 함수를 매개변수로 받은 경우
function add(a, b, callback) {
    var result = a + b;
    callback(result)
}

add(10, 5, function (aaa) {
    document.write("파라미터로 콜백함수 호출됨")
    document.write("더하기 결과:" + aaa)
    console.log("결과:%d", aaa)
})

// 함수를 리턴하는 경우
function mul(a, b) {
    var result = a * b;
    var output = function () {
        return `${a}*${b}=${result}`
    }
    return output
}

var out = mul(5, 6);  //외부함수 호출
document.write("<hr>");
document.write(out);
document.write("<hr>");
var out = mul(5, 6)(); //내부함수 호출
document.write(out);
document.write("<hr>");
var out = mul(5, 6);
document.write(out()); //내부함수 호출

// 클로저를 사용하지 않은 예
var count = 0;
function fucCount() {
    count++;
    console.log(counter)

    return count
}
var counter = fucCount();
console.log(counter)
console.log(counter)
console.log(counter)

// 모듈화, 은닉화

// 클로저를 사용한 예
function fucCount2() {
    var count = 0;
    function addCount() {
        count++;
        return count
    }
    return addCount
}
var counter = fucCount2();
console.log(counter()) //1
console.log(counter()) //2
console.log(counter()) //3
//외부에서 내부변수에 접근가능하다.
// 자바에서 getter,setter

var color = ['red', 'gold', 'silver', 'blue', 'brown']
var body = document.querySelector('body')

// var i=0; //전역변수
// function bgChange(){
//         body.style.background=color[i];
//         i++; //내부에서 전역변수 변경
//     }
var button = document.querySelector('button')


function bgChange() {
    var i = 0; //은닉화 캡슐화
    function inner(){
        body.style.background=color[i];
        console.log(i)
        i++;
        i = i % color.length
    }
    return inner
}
var bgC=bgChange();