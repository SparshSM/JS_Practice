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
