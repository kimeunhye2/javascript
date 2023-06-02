//Array 객체
// isArray()
// indexOf()
// lastIndexOf()
var arr= [1,2,3,4,5,6,7,8,9,10];
console.log(Array.isArray(arr));
console.log(arr.indexOf(4));
console.log(arr.lastIndexOf(4));
// forEach() - for in 반복문과 유사
// map -> 배열에 규칙을 적용해서 새로운 배열을 생성
var out = arr.map((a)=>{
return a*a;
});

console.log(out);
// 자바 람다식
var sum=0;
var out='';
arr.forEach((a,i,arr)=>{
    sum += a;
    out +=`${i} : ${a} -> +${sum} \n`
});
console.log(out); //등차수열
// 게시한 페이지 번호
// filter() 조건에 만족하는 요소를 추출
// every() 조건에 모두 만족
// sum() 조건에 적어도 하나 만족하는지

arr2=arr.filter((a)=>{
    return a<=5
})
console.log(arr2);
// 요소가 3이 아닌 요소만 추출 3인요소만 삭제해라
arr2=arr.filter((a)=>{
    return a != 3
})
console.log(arr2);
// 특정 리스트 항목을 삭제할 때 사용한다.

var result=arr.some(num=>num>5);
console.log(result);
var result=arr.every(num=>num>10);
console.log(result);

// 확인메소드 - isArray()
// 탐색메소드 - indexOf() lastIndexOf()
// 반복메소드 - forEach(),map()
// 조건메서드 - filter(),every(),some()
// 연산메서드 - reduce(),reduceRight()
// reduce() 하나가 될때까지 왼쪽에서 두개씩 묶는 함수
// reduceRight() 하나가 될때까지 오른쪽에서 두개씩 묶는 함수
var arr= [1,2,3,4,5,6,7,8,9,10];
var out2='';

arr.reduce((pre,cur,i,arr)=>{
    out += `${i} => ${pre} ${cur} \n` ;
    return pre+cur;
})
console.log(out);
console.log(out2);

// ES5 JSON 객체
// JSON.stringify() 객체를 JSON문자열로 변환
// JSON.parse()     JSON문자열을 자바스크립트 객체로 변환

var 고양이={
    이름:"야옹이",
    나이:"2살"
}
console.log(고양이);
console.log(JSON.stringify(고양이));
console.log(JSON.parse(JSON.stringify(고양이)));

// 객체를 배열로 변환하기
// 고전적인 방법
var str={
    name1:"강김찬",
    name2:"이순신",
    name3:"세종대왕"
}
var strArr=[];
for(var key in str){
    if(str.hasOwnProperty(key)) // key 값이 존재하는지 체크
    strArr.push(key);
}
console.log(strArr); //key를 배열로

var strArr=[];
for(var key in str){
    if(str.hasOwnProperty(key)) // key 값이 존재하는지 체크
    strArr.push(str[key]);
}
console.log(strArr); //value를 배열로

// ES5 Object.key() Objext.values()
var 이름=Object.keys(str);
console.log(이름);
var 값=Object.values(str);
console.log(값);

var 배열 = Object.keys(str).map(item=>str[item]);
console.log(배열);

// Objec.entries() Object.fromEntries()
var entry=Object.entries(str);
console.log(entry);
var entry=Object.fromEntries(entry);
console.log(entry);

var JSON1=JSON.stringify(entry);  //json 문자열로
console.log(JSON);
var JSON2=JSON.parse(JSON1); //객체로
console.log(JSON2);

// ES5 String 객체
// trim() 공백제거

// Object 객체들
// Object.defineProperty()     속성추가
// Object.defineProperties()   속성들추가
// Object.create()             객체생성
// Object.preventExtensions()  속성추가제한
// Object.isExtensible()       속성추가가능여부
// Object.seal()               속성삭제제한
// Object.isSealed()           속성제거가능여부
// Object.Frozen()             속성삭제한
// Object.isFrozen()           속성제거가능여부
// Object.keys()               속성을 배열로
// Object.getOwnPropertyNames()모든속성을 배열로
// Object.getOwnPropertyDescriptor()속성의 옵션 객체로

// 객체속성옵션
// value,
// writable, 변경가능여부
// get,
// set,
// configurable, 설정변경여부
// enumerable 반복문 검사 여부

var heros={}
Object.defineProperty(heros,"name",{
    values:"수퍼맨",
    writable:true,
    enumerable:true,
    configurable:true //속성 설정 변경
});
console.log(heros);  //수퍼맨
heros.name="아이언맨"
console.log(heros);  //수퍼맨

for(var i in heros){
    console.log(heros[i]);
}
var value="아이언맨"
Object.defineProperty(heros,"name",{
    get:function(){
        return value;
    },
    set:function(newValue){
        value=newValue
    }
});
console.log(heros.name);
value="스파이더맨"
console.log(heros.name);

Object.defineProperties(heros,{
    name:{ value:"토르"},
    region:{ value:"아스가르드"},
});
console.log(heros);

var hero2= Object.create({},{
    name:{value:"배트맨"},
    skill:{value:"마스크"}
});
console.log(hero2)
hero2.age="40"
console.log(hero2);
Object.preventExtensions(hero2);
console.log(Object.isExtensible(hero2));
hero2.skill2="날아간다"
console.log(hero2); 

// seal(),freeze();

var hero3=Object.assign({},hero2);
Object.defineProperty(hero3,"skill2",{
    value:"fly..."
})
console.log(hero3);
console.log(Object.isSealed(hero2));
delete hero2.name;
console.log(hero2);
delete hero3.age;
console.log(hero3);

// Object.getOwnPropertyName() 속성을 배열로
// Object.getOwnPropertyDescriptor() 옵션 값 추출

console.log(Object.getOwnPropertyNames(hero2));
console.log(Object.getOwnPropertyDescriptor(hero2,"name"));



