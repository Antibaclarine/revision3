const rectagle={
    firstName:"Clarine",
    lastName:"Antiba",
    age:20,
    skills:[
        "HTML",
        "CSS",
        "Javascript",
        "Python"
    ],
    


// console.log(rectagle);
getFirstName:function(){
    return '${this.firstName} ${this.lastName}'}
}
rectagle.nationality="Ethiopian"
console.log(rectagle);

// console.log(rectagle.getFirstName());

// Print the odd numbers less than 100
for (let i = 1; i < 100; i++) {
    if(i%2 !==0){
        console.log(i);
    }
    
}

// Given a string, reverse each word in the sentence.
let a="woman is strong"
let b=a.split(" ").map(x=> x.split("").reverse().join("")).join(" ");
console.log(b);

// Write a JavaScript function that accepts a string as a parameter
// and converts the first letter of each word of the string in upper case
function acceptsString(word){
  let letters=word.split('') 
  

  for (let i = 0; i < letters.length; i++)
   {
    let letter=letters[i]
    letters[i]=letter.charAt(0).toUpperCase()+letter.slice(1)
    
  } 
  return letters.join('')
}
let word="Hello Javascript"

console.log(acceptsString(word));
// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string
function countVowel(str){
    let vowel=['a','e','i','o','u']
    let count=0
    for (let i = 0; i < str.length; i++) {
       
        if (str[i].includes(vowels)) {
            count++
        }
        
    }
    return count
}
// let str="clarine"
// console.log(countVowel(str));
// Write a JavaScript program to sort the items of an array
function mergeSort(array){
    if (array.length<=1) {
        return array
    }
    let middle=Math.floor(array.length/2)
    let left =array.slice(0,middle)
    let right=array.slice(middle)
    console.log({left});
    console.log({right});
return sortedArray(mergeSort(left),mergeSort(right))
}
function sortedArray(left,right){
    let empty=[]
    while (left.length && right.length) {
       if (left[0]<right[0]) {
        empty.push(left.shift())
       } 
       else{
        empty.push(right.shift())
       }
    }
    console.log({empty});
    return[...empty,...left,...right]
}
let array=[90,34,100,2,12]
console.log(mergeSort(array));

// Write a function that takes an array of numbers as an argument and returns the sum of all the even numbers in the array?
function evenNumbers(arr){
    let sum=0
    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i]%2 === 0) {
           sum +=arr[i]
        
        }
        
    }
    return sum
}
let arr=[2,3,4,5,6,7,8,9]
console.log(evenNumbers(arr));

// Write a function that takes a string as an argument and returns
// the number of uppercase letters in the string.

function capitalLetters(words){
    let wordArr=words.split(' ')
    console.log(wordArr);
    for (let i = 0; i < wordArr.length; i++) {
       let word=wordArr[i] 
       wordArr[i]=word.charAt(0).toUpperCase() +word.slice(1)
        console.log(wordArr[i]);
    }
    return wordArr.join('')
}
let words='welcome'
console.log(capitalLetters(words));

// Print the multiplication table with 7
function multiplication(){
    for (let i = 1; i<= 100; i++) {
 let answer=  i*7  
  console.log(answer);
}

}
multiplication()
// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration check if the current number is even or odd and display a message.
function numbersBetween(){
    for (let i = 1; i< 15; i++) {
      if (i%2===0) {
        console.log("even");
      }  
      else{
        console.log("odd");
      }
        
    }
}
numbersBetween()
// How do you find the maximum value in an array using JavaScript?
let array1=[89,45,12,30,2,4,6]
let array2=Math.max(...array1)
console.log(array2);
// Write a function that calculates the sum of numbers in an array of numbers

function numbers(numb){
    let sum=0
    for (let i = 0; i < numb.length; i++) {
    //    numb[i]
       sum+=numb[i]
console.log(sum);
        
    }
}
let numb=[2,3,4,5,6]
numbers(numb)

// Write a JavaScript program to sum the multiples of 3 and 5 under 1000
function sumUp(){
    for (let i = 1; i < 1000; i++) {
      if(i%3 ===0 || i%5===0){
        console.log(i);
      } 
        
    }
}
sumUp()
// Create a function that receives an array of numbers and returns an array containing only the positive numbers
function arrayNumbers(arr1){
    let empty=[]
    for (let i = 0; i< arr1.length; i++) {
       if (arr1[i] >0) {
        empty.push(arr1[i])
       }
       
        
    }
    return empty
}
let arr1=[2,-3,4,-6,-1,7]
console.log(arrayNumbers(arr1));

// Write a function that calculates the average of the numbers in an array of numbers
function calculates(avg){
    let sum=0
   for (let i = 0; i < avg.length; i++) {
    sum+=avg[i]
    console.log(avg[i]);
    
   } 
   let average=sum /avg.length
   return average
}
let avg=[2,4,8,7,12,19];
let average=calculates(avg)
console.log(calculates(average));



