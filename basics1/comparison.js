//console.log(2>1);
//console.log(2>=1);
//console.log(2<1);
//console.log(2==1);
//console.log(2!=1);
//console.log(2>1);


//console.log("2">1);
// //console.log("02"> 1);//
console.log(null>0);
console.log(null==0);
console.log(null>=0);
console.log(undefined== 0);
console.log(undefined>0);
console.log(undefined<0);
// ==
console.log("2" ===2);



//*****************************Stack (primitive), Heap(non primitive) */
let myYoutubename= " barshacoderscom"
let anothername = myYoutubename
anothername=" mayukhcode"
console.log(myYoutubename);
console.log(anothername);
let userOne = {
    email:"barshadgp@gmail.com",

}
let userTwo=userOne
userTwo.email= "barsha"
console.log(userOne.email);
console.log(userTwo.email);

//datatypes are based on memory allocation
//Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory

//Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory

//JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable when you declare it.
//Primitive Types:
//1. Stored in stack.
//2. Passed or assigned by value (call by value).
//3. Changes to copies don't affect the original.