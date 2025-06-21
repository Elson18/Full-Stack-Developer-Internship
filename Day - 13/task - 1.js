let fruits = ["Apple","Orange","Banana","Mango","Pineapple"];

console.log(fruits[2]); 

fruits.push("Grapes");

fruits.shift(); 
console.log(fruits);

console.log(fruits.length); 

fruits.forEach(num => console.log(num)); 

fruits.reverse();
console.log(fruits); 

let numbers = [1,2,3,4,5];
let sum  = 0;

for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}
console.log(sum);       