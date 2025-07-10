 const User = {
    username:"rekha",
    Price : 400,

    welcomeMessage:function(){
console.log(`${this.username}, welcome to website`);
console.log(this);
    }
}
//User.welcomeMessage()
//User.username ="sam";
//User.welcomeMessage()
//console.log(this);

// function chai(){
    // let username ="maya"
    // console.log(this.username);
// }
// chai()

const chai= () => {
    let username=" barsha"
    console.log(this);
}
//chai()

//const addTwo=(num1,num2) =>{
 //   return num1+num2
//}
//const addTwo=(num1,num2) =>  (num1+num2)
const addTwo=(_num1,_num2) =>  ({username:"barsha"})
console.log(addTwo(3,4))  

// const myArray =[3,4,5,6,7]
//myArray.forEach()


//********************************IIFE */
;(function chai(){ // NAMED IFFE
console.log(`DB connected`);
})();
( (name) => {  // unnamed iife
    console.log(`DB CONNECTED TO ${name}`);
}) ('maya')


// 1. IIFE is a function which immediately executes after it's creation . It is wriiten as one parentheses for wrapping the function and other for execution ()();
// 2. Variables defined inside an IIFE are not accessible from outside its scope which helps to avoid conflicts with other variables or functions (global scope pollution). Means IIFE keeps variables and functions private in it.
// 3. IIFE written with function name is named IIFE and not with name are unnamed/anonymous. 
// 4.We can use parameter inside first parentheses.
// 5. To write two or multiple IIFE one should be end with semicolon ;