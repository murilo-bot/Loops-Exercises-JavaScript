function oneThroughTwenty() {
    
   /* Your code goes below
   Write a for or a while loop
   return the result*/

   let arr = [];

   for(let i = 1; i <= 20; i++){
     arr.push(i);
   }
   return arr;
    
}
console.log(oneThroughTwenty());
//call function oneThroughTwenty

function evensToTwenty(){
    
   /* Your code goes below
   Write a for or a while loop
   return the result */

   let arr = [];

   for(let i = 1; i <= 20; i++){
     if(i % 2 === 0){
       arr.push(i);
      }
    }
   return arr;
    
}
console.log(evensToTwenty());
//call function evensToTwenty

function oddsToTwenty() {
    
  /* Your code goes below
  Write a for or a while loop
  return the result */

  let arr = [];

   for(let i = 1; i <= 20; i++){
     if(i % 2 !== 0){
       arr.push(i);
      }
    }
   return arr;
   
}
console.log(oddsToTwenty());
//call function oddsToTwenty

function multiplesOfFive() {
    
  /* Your code goes below
  Write a for or a while loop
  return the result */

  let arr= [];

  for(let i = 5; i <= 100; i++){
    if(i % 5 === 0){
      arr.push(i)
    }
  }
  return arr;

}
console.log(multiplesOfFive());
//call function multiplesOfFive

function squareNumbers() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */

  let arr= [];

  for(let i = 1; i <= 10; i++){
    arr.push(i*i)
  }
  return arr;
    
}
console.log(squareNumbers());
//call function squareNumbers

function countingBackwards() {
    
  /* Your code goes below
  Write a for or a while loop
  return the result */

  let arr = [];

  for(let i = 20; i >= 1; i--){
    arr.push(i)
  }
  return arr;
}
console.log(countingBackwards());
//call function countingBackwards

function evenNumbersBackwards() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */

  let arr = [];

  for(let i = 20; i >= 1; i--){
    if(i % 2 === 0){
      arr.push(i)
    }    
  }
  return arr;
}
console.log(evenNumbersBackwards());
//call function evenNumbersBackwards

function oddNumbersBackwards() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */

  let arr = [];

  for(let i = 20; i >= 1; i--){
    if(i % 2 !== 0){
      arr.push(i)
    }    
  }
  return arr;
}
console.log(oddNumbersBackwards());
//call function oddNumbersBackwards

function multiplesOfFiveBackwards() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */

  let arr = [];

  for(let i = 100; i >= 1; i--){
    if(i % 5 === 0){
      arr.push(i)
    }    
  }
  return arr;
}
console.log(multiplesOfFiveBackwards());
//call function multiplesOfFiveBackwards

function squareNumbersBackwards() {
    
   /* Your code goes below
  Write a for or a while loop
  return the result */

  let arr = [];

  for(let i = 10; i >= 1; i--){    
      arr.push(i * i);       
  }
  return arr;
}
console.log(squareNumbersBackwards());
//call function squareNumbersBackwards
