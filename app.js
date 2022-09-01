//map: returns a new array of values
const numbers = [1, 2, 3, 4];
const arr2 = numbers.map(item => item *2);
console.log("map ",numbers);
console.log("map ",arr2);

//filter: same as map, takes a callback function returns values in a new array if true
// dont returns if false

const num = [212, 21, 33, 44];
const even = numbers.filter(n => n % 2 === 0);
console.log("filtered ",even);

//reduce: reduce an array to 1 value by repeatedly applying a callback function/used in place of loop
//takes values: array,current val,prev val, (initial value which is optional)
const num2 = [41, 265, 323, 114];
const total = num2.reduce(function (result, item) {
// reduceright starts from right direction
    // const total = num2.reduceRight(function (result, item) {
  return result + item;
},1);
console.log("reduce ",total);


//ES 5
//array
const num3 = [11,21,212, 21, 33, 44];
//to check if array is an array
console.log(Array.isArray(num3));
//forEach in array:calls a function for each element in array
let n3total=0;
num3.forEach(arr_sum)
function arr_sum(val){
    n3total= n3total+val;  
}
function arr_big(val){
    return val>10
}
function arr_big2(val){
    return val>40
}
console.log(n3total);
//every returns true if condition is true for every element
console.log(num3.every(arr_big));
//every returns true if condition is true for some elements
console.log(num3.some(arr_big2));
//indexOf
console.log(num3.indexOf(44));
console.log(num3.indexOf(4));
//lastindexOf search from end of array
// console.log(num3.lastIndexOf(212));
//json.parse: returns data from an object
const jsondata = '{"name":"Rock", "age":30}'
const data = JSON.parse(jsondata);
console.log(data.name,data.age);
//ES6
//for of loop
const cars = ["BMW", "Honda", "Mini","RR"];
let newcars = "";

for (let x of cars) {
    newcars += x + " ";
}
console.log(newcars);
//MAP maps values to objects
const f1 = {name: 'Apple'};
const f2 = {name: 'Cherry'};
const f3 = {name: 'Orange'};
const fruits = new Map();

fruits.set(f1, 500);
fruits.set(f2, 300);
fruits.set(f3, 200);
console.log(fruits);
//Set creates a new set methods add,del,clear,forEach,keys etc
let n = new Set();
n.add(1);
n.add(2);
console.log(n);
//includes
let str="  hello all, today  is raining   ";
console.log(str.includes("hello"));
//startsWith
console.log(str.startsWith("hello"));
//endsWith
console.log(str.endsWith("hello"));
//arrayfrom returns array from string
console.log(Array.from(str));
//keys return keys of an array
const arr3 = ["abc", "def", "ghi"];
const keys = arr3.keys();
let keyval = "";
for (let x of keys) {
    keyval += x + " ";
}
console.log(keyval);
//tostring
console.log(arr3.toString());
arr3.pop("abc");
arr3.push("yy");
console.log(arr3);
const arr4 = ["aaa", "bbb", "ccc", "ddd", "eee"];
//shift removes first element from array
arr4.shift();
//unshift adds element at first position in array
arr4.unshift("zzz");
// let arr5= arr3.concat(arr4);
// let arr5= arr3.concat(arr4,cars);
let arr5= arr3.concat("pqr");
console.log(arr5);
//splice adds element position,no of elements to remove,new elements
arr4.splice(3,0,"lmn")
//splice remove element from array 1. position,no of elements to remove
arr4.splice(3,0,)
console.log("arr4",arr4);
const arr6 = ["aaa", "bbb", "ccc", "ddd", "eee"];
//removes no of elemts given 
// arr7=arr6.slice(2)
//removes other elements and gives new array of given numbers
arr7=arr6.slice(0,8)
let str2= str.slice(0,5)
let str3= str.substring(5,10)
// let str4= str.replace("hello","hi")
// let str4= str.toLowerCase()
// let str4= str.toUpperCase()
// let str4= str.trim()
// let str4= str.trimEnd()
let str4= str.trimStart()
console.log("str2",str2);
console.log("str3",str3);
console.log("str4",str4);
console.log("arr7",arr7);
console.log(arr5);
//find() returns the first element passing the condition
let totalnum= num3.find(findnum)
let numindex= num3.findIndex(findnum)
function findnum(val){
    return val > 20
}
console.log(totalnum);
console.log(numindex);
let str6 = "HELLO ALL";
let char1 = str6.charAt(0);
//returns unicode of char
let char = str6.charCodeAt(0);
console.log(char1);
console.log(char);
let arr8 = str6.split("");
// let arr8 = str6.split(" ");
console.log(arr8);
//ES16
// ** works as ppower  of ele
// let z = 5 ** 2; 
// **= increases val of elemnt by power
let x = 5
x **= 3;
console.log(x); 
// console.log(z);
//ES17
//pading
let str8 = "5";
// str8 = str8.padStart(8,"a");
str8 = str8.padEnd(8,"a");
console.log(str8);
//obj.entries returns object as array of key value pairs
const person = {
    firstName : "John",
    lastName : "Doe",
    age : 50,
    eyeColor : "blue"
};
// let person2 = Object.entries(person)
let person2 = Object.values(person)
//obj.values same as above, but returns a single dem aray
console.log(person2);
//arr.flar joins nested arays to single array
const arr9 = [[1,2],[3,4],[5,6]];
const arr10 = arr9.flat();
console.log(arr10);
//Object.fromEntries returns object from key value pairs
const carsarr = [
    ["Swift", 30000],
    ["city", 90000],
    ["kia", 500000]
    ];
    
    const carsObj = Object.fromEntries(carsarr);
console.log(carsObj);    