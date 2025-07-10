//const tinderuser = new Object()
const tinderuser = {}
tinderuser.id="123nil"
tinderuser.name = "nil"
tinderuser.isLoggedin= false
//console.log(tinderuser);
const regularuser ={
    email: "me@gmail.com",
    fullname:{
        userfullname:{
        Firstname : "Barsha",
        lastname: " roy"
        }
    }

}
//console.log(regularuser.fullname.userfullname.Firstname);
const obj1 ={1:"a" , 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}
//const obj3= {obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1,...obj2,...obj4}
//console.log(obj3);
const users = [
    {
        id:1,
        email: "b@gmail.com"
    }
]
users[0].email
console.log(tinderuser);
console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))
console.log(tinderuser.hasOwnProperty('isLogged'));



