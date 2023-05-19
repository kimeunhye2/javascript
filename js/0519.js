window.onload=function(){
// heml body에 문서를 자유롭게 읽을 수 있다.



} //

//객체와 배열을 사용한 데이터 관리
var 학생0={이름:'kim1',국어:87,영어:70,수학:40,과학:80}
var 학생1={이름:'kim2',국어:87,영어:70,수학:40,과학:80}
var 학생2={이름:'kim3',국어:87,영어:70,수학:40,과학:80}
var 학생3={이름:'kim4',국어:87,영어:70,수학:40,과학:80}
var 학생4={이름:'kim5',국어:87,영어:70,수학:40,과학:80}
var 학생5={이름:'kim6',국어:57,영어:70,수학:40,과학:80}

var 학생0총점=학생0.국어+학생0.영어+학생0.수학+학생0.과학;
document.write(`<h2>학생0총점: ${학생0총점}점</h2>`);

var 학생5총점=0;

//객체에 필요한 데이터를 추출하는 작업
for(var key in 학생5){
    // 학생5총점 = 학생5총점 + 학생5[key];
    if(key != '이름') //이름키는 제외하고 계산한ㄷ.
    학생5총점 += 학생5[key];
}
document.write(`<h2> 학생5총점: ${학생5총점}점</h2>`)

// 배열에 데이터를 추가하기
var students=[];
students.push({이름:'원빈',국어:87,영어:70,수학:40,과학:60}) ;
students.push(학생1);
students.push(학생2);
students.push(학생3);
students.push(학생4);

console.log(students);


// 모든 학생배열내에 객체에 메소드 추가하기
for(var i in students){
    students[i].getSum=function(){
        return this.과학+this.국어+this.수학+this.영어;
        // return this.setSum()/students.length
    }
    students[i].getAvg=function(){
        // return this.과학+this.국어+this.수학+this.영어/4;
        return this.getSum()/4;
    }
}


document.write(`학생3의 총점: ${students[2].getSum()}`);
document.write("<br>");
document.write(`학생3의 평균: ${students[2].getAvg()}`)
document.write("<br>");

// 전체학생 성적출력하기-이름,총점,평균
document.write("이름 총점 평균");

document.write("<br>");
for(var i in students){
    document.write(students[i].이름+' '+students[i].getSum()+ ' '+ students[i].getAvg());
}
document.write("<br>");

// 하나의 변수에 저장
var output="<hr> 이름 총점 평균 <hr> <br>";
for(var i in students){
    output += students[i].이름+' '+students[i].getSum()+ ' '+ students[i].getAvg() + "<br>";
}
// output 변수에 문자열로 학생데이터 값이 하나씩 추가된다.
document.write(output);

// 코드 줄이기 - with 키워드
var output="<hr> 이름 총점 평균 <hr> <br>";
for(var i in students){
    with(students[i]){
    output += 이름+' '+getSum()+ ' '+getAvg() + "<br>";
}}
document.write(output);

console.log(students.pop());

// 지금까지 객체를 사용한 데이터 생성

// 함수를 사용하는 데이터 생성

function 학생성적표(name,korean,math,english,science){
    var 성적출력 = { 
        이름:name,
        국어:korean,
        수학:math,
        영어:english,
        과학:science,
        getSum : function(){
            return this.과학+this.국어+this.수학+this.영어;
        },
        getAvg:function(){
            return this.getSum()/4;
        },
        // toString 메소드 재정의 -> 오버라이드 overide
        toString:function(){
            return this.이름+ " "+this.getSum()+ " "+this.getAvg();
        }
    }

    return 성적출력;
}

var 학생들=[];
학생들.push(학생성적표('원빈',89,12,30,44));
학생들.push(학생성적표('원빈2',89,12,30,44));
학생들.push(학생성적표('원빈3',89,12,30,44));
학생들.push(학생성적표('원빈4',89,12,30,44));
학생들.push(학생성적표('원빈5',89,12,30,44));

// 성적출력
var 결과=` <hr> 이름  총점   평균 <hr>`
for(var i in 학생들){
    결과 += 학생들[i].toString()+"<br>";
}
document.write(결과);

// 생성자 함수
// new 키워드, instance 인스턴스

function Students(name,korean,math,english,science){
        this.이름=name;
        this.국어=korean;
        this.수학=math;
        this.영어=english;
        this.과학=science;
        this.getSum = function(){
            return this.과학+this.국어+this.수학+this.영어;
        };
        this.getAvg=function(){
            return this.getSum()/4;
        };
        // toString 메소드 재정의 -> 오버라이드 overide
        this.toString=function(){
            return this.이름+ " "+this.getSum()+ " "+this.getAvg();
        }

}

var 학생1=new Students('장돈건',40,30,50,40);
document.write(학생1.toString());
// new를 사용하면 this ->학생1이 된다.
// new를 빼면 this -> window가 된다.

var students=[];
students.push(new Students('장돈건',40,30,50,40));
students.push(new Students('장돈건',40,30,50,40));
students.push(new Students('장돈건',40,30,50,40));
students.push(new Students('장돈건',40,30,50,40));
students.push(new Students('장돈건',40,30,50,40));
students.push(new Students('장돈건',40,30,50,40));

// 성적출력
var 결과=` <hr> 이름  총점   평균 <hr>`
for(var i in students){
    결과 += students[i].toString()+"<br>";
} 
document.write(결과);

var str="wlecome";
str.toString();

// instaceof
// 해당객체가 어떤 생성자 함수로 생성되었는가? 확인하기

var 학생10=new Students("강호동",10,20,30,40);
console.log(학생10 instanceof Students);