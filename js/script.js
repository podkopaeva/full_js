// functions
// var output = document.getElementById('output');


// var hello = 'hello';

// function helloW() {
// 	var b = hello + 'World';
// 	console.log(b);
// }

// helloW();

// output.innerHTML = myFun1(4, 5, 6);
// var response = "55"; // global variable
// myFun1();

// function myFun1(a, b, c) {
// 	var response = a+ b + c; // global variable
// 	return response;
// }
// function myFunc(){
// 	output.innerHTML = 'hello </br>';
// }

// myFunc();


// =========================

// var adj = ['super', 'cool', 'wonderful', 'bad', 'angry'];
// var output = document.getElementById('output');

// function myFun() {
// 	var question = prompt('what?');
// 	var rand = Math.floor(Math.random()*adj.length);
// 	output.innerHTML += adj[rand] + " " + question + '<br>';
// }




// Calculator


// var output = document.getElementById('output');
// var num1 = document.getElementById('num1');
// var num2 = document.getElementById('num2');

// function addBy() {
// 	var a = Number(num1.value);
// 	var b = "+";
// 	var c = Number(num2.value);
// 	var d = a + c;
// 	outHTML(a,c,d);
// }

// function devideBy(){
// 	output.innerHTML += Number(num1.value) / Number(num2.value) + '<br>';
// }

// function multipBy(){
// 	output.innerHTML += Number(num1.value) * Number(num2.value) + '<br>';
// }

// function minusBy(){
// 	output.innerHTML += Number(num1.value) - Number(num2.value) + '<br>';
// }


// =================================
// var a = myFun();
// function myFun(para) {

// 	if(typeof para === 'undefined') {
// 		para = "hello";
// 	}
// 	output.innerHTML += para;
// 	return a;
// }


// Cracing Game


// var cCode = [];
// var count = 0;
// var output = document.getElementById('output');
// var c1 = document.getElementById('code1');
// var c2 = document.getElementById('code2');
// var c3 = document.getElementById('code3');

// for (var i = 0; i < 3; i ++) {
// 	cCode.push(Math.floor(Math.random() * 9));
	
// }

// // output.innerHTML = cCode;

// function crack() {
// 	count = 0;
// 	var guess = [c1.value, c2.value, c3.value];
// 	for(var i = 0; i < cCode.length; i ++) {
// 		output.innerHTML += checkNum(guess[i], cCode[i]);
// 	}
// 	if (count === 3) {
// 		output.innerHTML += 'You Guessed it <br>';
// 	}
// }

// function checkNum(a, b) {
// 	if( a > b) {return 'L';}
// 	if(a < b) {return 'H';}
// 	if(a == b) { 
// 		count ++;
// 		return a;
// 	} 


// Anonymous functions
// var a = 'hello';

// var output = document.getElementById('output');

// (function(){
// 	var a = 'world';
// 	output.innerHTML = a;
// })();



// output.innerHTML += a;

// Recurtion


var secretWord = ['JavaScript', 'Julka', 'Kirill'];
var output = document.getElementById('output');
var rand;

function start() {
	rand = Math.floor(Math.random() * secretWord.length)
	getSecret(prompt('what is the word?'));
}

function getSecret(secret) {
	if(secret == secretWord[rand]) {
		output.innerHTML = 'You are correct';
	} else {
		getSecret(prompt('Guess Again?'));
	}
}











