/**
 * 
 */

// var arr1 = [1, 2, 3];
var arr1 = new Array(1, 2, 3);
var res1 = document.getElementById("res1");
res1.innerHTML += arr1 + "<br>";
res1.innerHTML += "arr1[0] -> " + arr1[0] + "<br>";
res1.innerHTML += "arr1[1] -> " + arr1[1] + "<br>";
res1.innerHTML += "arr1[2] -> " + arr1[2] + "<br>";

arr1[0] = 10;
arr1[1] = 20;
arr1[2] = 30;
res1.innerHTML += arr1 + "<br>";

var res2 = document.getElementById("res2");
res2.innerHTML += "arr1.indexOf(10) -> " + arr1.indexOf(10) + "<br>";
res2.innerHTML += "arr1.indexOf(20) -> " + arr1.indexOf(20) + "<br>";
res2.innerHTML += "arr1.indexOf(30) -> " + arr1.indexOf(30) + "<br>";

res1.innerHTML += "arr1.push(40)" + "<br>";
arr1.push(40);
res1.innerHTML += "arr1.push(50)" + "<br>";
arr1.push(50);
res1.innerHTML += "arr1.push(60)" + "<br>";
arr1.push(60);
res1.innerHTML += arr1 + "<br>";

res1.innerHTML += "arr1.unshift(0)" + "<br>";
arr1.unshift(0);
res1.innerHTML += arr1 + "<br>";

res1.innerHTML += "arr1.pop()" + "<br>";
arr1.pop();
res1.innerHTML += arr1 + "<br>";

res1.innerHTML += "arr1.shift()" + "<br>";
arr1.shift();
res1.innerHTML += arr1 + "<br>";


/**
 *  input 요소에 있는 값을 배열로 만들어 exam1 에 출력
 *  출력 형식은 ['a', 'b', 'c', 'd', 'e'] 와 같이
 *  대괄호 안에 값을 출력
 */
var arr2;
var input1 = document.getElementById("id_input1");
var exam1 = document.getElementById("exam1");
arr2 = input1.value.split(",");

