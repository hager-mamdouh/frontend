"use strict";
/*
//quest 1

function power(num){

    var multiple=1 ;
    var pow=Number(prompt('enter the power'));
    for (var i=1 ; i<= pow ; i++){
        multiple= num * multiple ;
    }
    return multiple;
}

var numb=Number(prompt('enter the number'));
console.log(power(numb));


//quest 2

let row = Number(prompt("enter no. of rows")),
    str = "";

for(let i = 1; i < row+1 ; i++ ){
    for(let j = 1; j < row+1 ; j++){
        if(i + j > row){
            str = str.concat("*");
        }else{
            str = str.concat(" ");
        }
    }
    str = str.concat("\n");
}

console.log(str);


//____________________________________________________________

//task sheet

//quest 1

function palindrome(name){
    const arr = name.split('').reverse().join('');
    if(name === arr) {
        return 'It is a palindrome';
    }
    else {
       return 'It is not a palindrome';
    }
}

const string = prompt('Enter a string: ');
console.log(palindrome(string));


//quest 2
function anagram (name , str){
    const arr1 = name.split('').sort().join(""),
     arr2 = str.split('').sort().join("");
    if(arr1 == arr2){
        console.log('It is an anagram');
    }
    else {
        console.log('It is not an anagram');
    }
}

const string1 = prompt('Enter a string1: ');
const string2 = prompt('Enter a string2: ');
anagram(string1,string2);


//quest 3

let num=5;
function sum(w){
    return function(x){
        return function(y){
            return function(z){
                return z+y+x+w+num ;
            }
        }
    }
}
console.log(sum(5)(5)(5)(5));


//quest 4

function reverse(str){
   const arrStr= str.split("");
   var x ;
       if (x === 1 ){
       return "";
       }
       return arrStr.index;
}

console.log(reverse("hager"));


//quest 5

class myFunction{
    name ;
    message;
    getName = function(){
        return `I'm ${this.name}` ;
    };
    getMessage = function(){
        return this.message;
    };
}

const fun1= new myFunction();
fun1.name="hager";
fun1.message = "hello gogoo";
console.log(fun1.getName());
console.log(fun1.getMessage());


//quest 6


function isPrime(numb){
    if (numb===1){
        return false ;
    }
    else if (numb ===2){
       return true ;
    }
    else if(numb>2){
        for(let i=2 ; i < numb ; i++)
        if(numb % i == 0){
            return false ; 
        }
           return true;
    }
}
console.log(isPrime(1));





//quest 7

var fn=[] ;
function fibo(n){
     fn[0]=0;
        fn[1]=1;
    for(let i=2 ; i<n ; i++){
           fn[i]=fn[i-1]+fn[i-2] ;
    }
    return fn;
}
console.log(fibo(10));

// quest 8

function power(num){

    var multiple=1 ;
    var pow=Number(prompt('enter the power'));
    for (var i=1 ; i<= pow ; i++){
        multiple= num * multiple ;
    }
    return multiple;
}

var numb=Number(prompt('enter the number'));
console.log(power(numb));

*/

