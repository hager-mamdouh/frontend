/*
1- output 5
2- j is not defined
3- white-rabbit
*/

/*=====================*/
var num = Number(prompt("enter number"));
 var factorial=1;
  for (var i=1 ; i<=num ; i++){
     factorial *= i ;
  }
  console.log(factorial);

/*===========================*/
var ctr = 0;
var num=Number(prompt("enter number to check prime or not "));
for(var i=1 ; i<=num ; i++){
  if (num % i == 0){
    ctr++;
  }
}
  if (ctr ==1 ){
    console.log ("the number is prime");
  }
  else{
    console.log("the number is not prime");
  }



