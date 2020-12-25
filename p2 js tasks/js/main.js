/*
quest 1
============= */
var row=Number(prompt("enter number of rows"));
for (var i = 1; i <= row; i++) {
    var str = "";
    for (var j = 1; j <= i; j++) {
    str += "*";
       }
   console.log(str);
  }
 

 /*
 quest 2
 =============== */
 var num=Number(prompt("enter number "));
 var sum=0;
  for (var i=1 ; i<=num ; i++){
     sum += i ;
  }
  console.log(sum);


/*
quest 3
============ */
function reverseString(str) {
    return str.split("").reverse().join("");
}
var word=prompt("enter a word")
var reverse=reverseString(word);
  console.log(reverse);

