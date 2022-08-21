var obj1 = { name: "Person 1", age:5};
var obj2 = { age:5, name: "Person 1" }; 

let json1= JSON.stringify(obj1); 
let json2= JSON.stringify(obj2);

if (json1 ===  json2) {
  console.log("both object is equal");
}
 else{
    console.log("both object is not equal");
 }
