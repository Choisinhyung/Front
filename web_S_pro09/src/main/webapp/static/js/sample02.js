/**
 *  자바스크립트는 동적 타입을 지원하기 때문에 자료형에 대한 명시를
 *  할 필요가 없다.
 */

//선언 함수(f2 ~ f3)
//문자 리턴
function f1() {
	return "함수 실행이 완료되었습니다.";
}
//숫자 리턴
function f2() {
	return 100;
}
//리턴 없음(undifined)
function f3() {
	return;
}
//익명 함수(람다) - 변수에 저장 가능 / 함수명을 변수명이라고 생각하는게 쉬움
//변수에 담았을 때에는 {}이후 ; 꼭 찍어야 함!!!!!!!!!
var f4 = function() {
	return "익명함수 입니다.";
};
//스스로 동작함수 - 페이지 로드 후 즉시 실행 ()소괄호 주의!
(function() {
	console.log("즉시 실행하는 함수 입니다.");
})();
//타입이 필요가 없다. - 숫자, 문자, 배열 모두 가능
function f5(x) {
	console.log("매개변수 x 값 -> " + x);
}
//기본값을 가지는 매개변수(y=0)
function f6(x, y=0) {
	console.log("매개변수 x, y 값 -> " + x + ", " + y);
}

function f7(x, ...args) {
	console.log("매개변수 x 값 -> " + x);
	for(let arg of args) {
		console.log("매개변수 args 값 -> " + arg);
	}
}

function f8(x, y=0, ...args) {
	console.log("매개변수 x, y 값 -> " + x + ", " + y);
	for(let arg of args) {
		console.log("매개변수 args 값 -> " + arg);
	}
}

function f9() {
	console.log(arguments);
	for(let v of arguments) {
		console.log(v);
	}
}

/*
var f10 = (x) => {
	return x + 10;
};
*/
var f10 = (x, y) => x + y;