let num_arr = [124,879,654,568,213,786,34,1120];
let str_arr = ["sas","abc","raj","dev","xyz","max"];
let obj_arr =[
    {name:"raj",age:31,city:"asr"},
    {name:"dev",age:32,city:"ldh"},
    {name:"karan",age:17,city:"dli"},
    {name:"raju",age:11,city:"ptk"}
]
let str = "Hello, world hi there. Today is thursday"
let str3 = "   Hello, world hi  there. Today is  thursday   "
if (Array.isArray(str_arr)) {
    let str2="";
    for (let i = 0; i < str_arr.length; i++) {
        str2 = str2.concat(str_arr[i]);
    }
    console.log(str2);
}
if (!num_arr.nan) {
    let nos=1;
    num_arr.forEach(total);
    console.log(nos);
    function total(val) {
        nos = val*nos/nos;
    }
}
else{
    let res = num_arr.map(n=>n)
    console.log(res);
}
if (num_arr.nan) {
    let nos;
   nos= num_arr.filter(total2);
    console.log(nos);
    function total2(val) {
        return val>500
    }
}
else{
     let total = num_arr.reduce(function (res, item) {
          return res + item;
        },0);
        console.log(total);
}
if (obj_arr) {
    const totalarr =obj_arr.map(i=>i);
    if (totalarr.length > 4) {
        console.log(totalarr);
    }
    else{
        const newarr2 = {name:"rajesh",age:101,city:"hw"};
        obj_arr.push(newarr2);
        obj_arr.unshift(newarr2);
        console.log(obj_arr);
    }
}
if (str3.length>45) {
   let str4= str3.trim()
    console.log(str4.length);
}
function maxval(n) {
    return n>500
}
if (num_arr.every(maxval)) {
    console.log(num_arr);
}else{
    let ls500=num_arr.some(maxval)
    console.log("some nos. are greater than 500",ls500);
}
if (str) {
    let str2=str.indexOf("Hello")
    let str3=str2.pop
    console.log(str3);
//    let str_arr2 =str_arr.pop();
    // console.log(str_arr2);
}
