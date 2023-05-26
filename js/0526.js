var test = document.getElementById('test')
try {    
    console.log("welcome")
    // throw "무슨에러인가?"
} catch (err) {
    test.innerHTML = err.message
}
test.style.color = 'red';

// trow 사용자지정 오류를 만든다.
var numbox = document.getElementById('numBox')
var btn = document.getElementById('btn')
var errText = document.getElementById('errText')


var show=false;
btn.addEventListener('click', function () {
    var val = numbox.value;
    errText.innerHTML='welcom' + val
    try {
        if (val == '') {throw "비어있음"}
        if(isNaN(val)) throw "숫자가 아닙니다"
        if(val<1) throw "숫자가 너무 작다"
        if(val>10) throw "숫자가 너무 크다"
        show=false
    } catch (err) {
        errText.innerHTML = "에러메시지 :" + err
        show=true
    }finally{
      if(show)  numbox.value=""
    }
    errText.style.color='red'
})

var num=123.123456
try{
    console.log(num.toFixed(3))
    console.log(num.toPrecision(100)) //RangeError
    num=num+1; //RefernceError
    // eval("elert('hello)") //syntax error
    // num.toUpperCase(); //TypeError
    // 고양이,날다()
//console.log(decodeURI('http://daum.net/aaaa%%%%$$$$'))
//console.log(encodeURI('http://daum.net/$$$'))
console.log(num/0)
}catch(err){
    errText2.innerHTML=err.name +":"+ err.message
}

// toPrecition 수의 길이를 제한
// toFixed 는 소수저의 길이를 제한
errText2.style.color='red'
