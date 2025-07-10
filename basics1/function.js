function sayMyName(){
    console.log("B")
    console.log("A")
    console.log("R")
    console.log("S")
    console.log("H")
    console.log("A")

}
//sayMyName()
// function addTwoNumbers(number1, number2){
    // console.log(number1+number2);
// }
function addTwoNumbers(number1, number2){
    //let result = number1+ number2
    //return result
    return number1+number2}
 const result = addTwoNumbers(3,5)
 //console.log("Result:", result);

 function loginUserMessage(username="sam"){
    if (!username){
        console.log("Please Enter a username");
        return
    }
    return `${username} just logged in`
 }

// console.log(loginUserMessage("Barsha"))
//console.log(loginUserMessage("barsha"))

function calculateCartPrice(val1,val2,...num1){
    return num1
}
//console.log(calculateCartPrice(200,400,500,2000))

const user ={
    username:"barsha",
    price: 200
}
function handleObject(anyObject){
console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user)
handleObject({
    username: "Barsha",
    price: 200
})
const myNewArray=[200,300,400,500]
function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));
