

var button = document.getElementById("button");
var input = document.getElementById("input");
var ul = document.getElementById("myList");
var textnode = document.createTextNode(input.value);
var li = document.createElement("li");


function CreateList() {
var textnode = document.createTextNode(input.value);
var li = document.createElement("li");	
}

function addafterList() {
	li.appendChild(textnode);
ul.appendChild(li);
input.value = "";
}

button.addEventListener("click", addafterList);

//Root scope (window)

var fun =5;

function funFunction() {
	var fun ="hello"
	console.log("fun");
}


// ternary operation condition? expr1: expr2;

function isUserValid(bool) {
	return bool;
}

var answer = isUserValid(true) ? "you may enter" : "access denied";

//switch

function moveCommand(direction) {
	switch (direction) {
		case "forward":
			whatHappens = "you encounter a monster";
			break;
		case "back":
			whatHappens = "you arrived home";
			break;		
		case "right":
			whatHappens = "you found a river";
			break;
		case "left":
			whatHappens = "you run into a troll";
			break;
		default:
			whatHappens = "please enter a valid direction";
	}
	return whatHappens;
} 

//ECMAScript6 ES6 babel = babeljs.io

//let + const = declaring varibles

const player = "boobby";
let experience = 100;
let wizardLevel = false;

if(experience >90) {
	let wizardLevel = true;
}

//const never changes if reassigned in the future and let assign variables for any scope


// const name = "Hugo";
// const age = "30";
// const pet = "dog";

//Template strings

//const Greeting = `Welcome ${name}, I can't believe you are ${age}, do you like ${pet}?`

//defaul parameters // arguments

function greet(name='User', age=30, pet='cat') {
	return `Welcome ${name}, I can't believe you are ${age}, do you like ${pet}?`;
}

//Symbol
let sym = Symbol();


//arrow function

function add(a, b) {
	return a+b;
}

const add2 = (a,b) => a+b;


window.dataLayer = window.dataLayer || [];

if(button.addEventListener) {button.addEventListener("click",function() {
	return dataLayer.push({'name' : 'hugo'});
});
}

let multiply = (a,b) => a*b;

function test(a) { 
	console.log(a)
}