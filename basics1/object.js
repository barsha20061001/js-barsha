//singleton

// object literals
const mysym = Symbol("key1");

Object.create
const Jsuser ={
name : "Mayukh",
"full name " : "Mayukh roy",
mysym: "mykey1",
age : 18,
location:"kolkata",
email: "barshadgp212@gmail.com",
isLoggedIn : false,
lastLoginDays: ["Monday", "Saturday"]
}
console.log(Jsuser.email)
console.log(Jsuser["email"])
console.log(Jsuser["full name"])
console.log(typeof Jsuser.mysym)
Jsuser.email = "barsha@chatgpt.com"
//Object.freeze(Jsuser)
Jsuser.email = "barsha@microsoft.com"
console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello JS user");
}
Jsuser.greetingTwo = function(){
    console.log(`hello JS user,${this.name}`);
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());


