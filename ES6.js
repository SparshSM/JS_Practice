let num_arr = [124,879,654,568,213,786,34,1120];
let str_arr = ["sas","abc","raj","dev","xyz","max"];
let details={name:"raj",age:31,city:"asr"}
let obj_arr =[
    {name:"dev",age:32,city:"ldh"},
    {name:"karan",age:17,city:"dli"},
    {name:"raju",age:11,city:"ptk"}
]
let str = "Hello, world hi there. Today is thursday"
let str3 = "   Hello, world hi  there. Today is  thursday   "

let id =Symbol("id");
details[id]="2121"
console.log(details);

console.log(str_arr); 
console.log(...str_arr);

str_arr2=[...str_arr].concat(num_arr);
console.log(str_arr2);
[arr1,arr2,...otherarr]=["sas","abc","raj","dev","xyz","max"];
console.log(arr1);
console.log(otherarr);
const a = 5;
const b = 10;
console.log(`total is ${a + b}`);
let [sas,abc,raj,dev,xyz,max,yes,no]=num_arr;
console.log(raj);

let str5 = "";
for (let x in details) {
  str5 += details[x];
}
console.log(str5);
