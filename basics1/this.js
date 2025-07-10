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
const addTwo=(num1,num2) =>  ({username:"barsha"})
console.log(addTwo(3,4))  

// const myArray =[3,4,5,6,7]
//myArray.forEach()