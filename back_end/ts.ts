1. Using a for loop, write a program that counts down from 10 to 1. After the countdown, print: "Happy New Year!"

function newYear(){
 for (let count = 10; count<=0;count--) {
    console.log(count)
 }

    console.log("Happy New Year!")

}
newYear()

2. Write a program that calculates and prints the sum of all numbers from 1 to 50. You may use any type of loop.



let total:number=0

for (let num= 1; num<=50; num+=1) {
     total +=num
}
console.log(total)


// 3. Write a program that prints all numbers between 1 and 50 that are divisible by 5.
for (let num= 1; num<=50; num+=1) {

    if(num % 5 ===0){
console.log(num)
    }
 }


 const num=[-2, 5, -8, 10, 3, -1, 7];
 let  positive:number=0;
 let  index:number =0
for (let index = 0; index < num.length; index++) {
      if ( num[index]>=0) {
        positive+=1

      }
}
console.log(positive)
 // for (var item of num ) {
 //     if ( item <= 0) {
 //         console.log(item)
 //     }
 //     else(
 //         con
 //     )
 // }




function checkResult(checkResult:number){
if(checkResult<0){
     console.log("invalid checkResult")

 }
 else if( checkResult>100){

     console.log("invalid checkResult")

 }
 else if( checkResult>=50){

     console.log("you pass your exam")

 }
 else{

     console.log("you Fail your exam")

 }

}

checkResult(67)




function checkAgeCategory(checkAgeCategory:number){
    if(checkAgeCategory<0){
     console.log("invalid checkAgeCategory")

 }
 
 else if( checkAgeCategory<=13){

     console.log("you are a Child")

 }

 else if( checkAgeCategory <=19){

     console.log("you are a Teenager")

 }
 else if(checkAgeCategory <= 59){

     console.log("you are an Adult")

 }


 else{

     console.log("you are a Senior Citizen")

 }

}

checkAgeCategory(10)





function bigNumberChecker(num1:number,num2:number){
 if (num1 > num2) {
     console.log(num1)
 }
 else if (num2 >num1){
    console.log(num2)
 }
 else{
    console.log( "Both Number equal" )
 }
} 


bigNumberChecker(123,123)


function NumberChecker(num1:number,num2:number,num3:number){
  if (num1 > num2 &&num1 > num3) {
      console.log(num1)
  }
  else if (num2 >num1 &&num2 > num3){
     console.log(num2)
  }
  else if (num3>num2 && num3>num1){
     console.log(num3)
  }
 
  else{
     console.log( "All Number  are equal" )
  }
 } 


NumberChecker(123,129,124)






function greetUser(name:string){
    console.log(`Hello ${name} !`)
}
greetUser("John")



function checkEvenOdd(num:number){
    if (num%2==0) {
        console.log("this numder is even")
        
    }
    else{
        console.log("this numder is odd")
    }
}
checkEvenOdd(150)