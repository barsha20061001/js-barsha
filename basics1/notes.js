//for those who are still confused:

// 1.console.log(null > 0); // false
//Comparison (>) converts null to a number before comparing.

//null is converted to 0.

//0 > 0 is false.

//2. console.log(null == 0); // false
//The equality check (==) does not convert null to a number.

//null is only equal to undefined in loose equality (==), not to numbers.

//So, null == 0 is false.

//3. console.log(null >= 0); // true
//The >= comparison also converts null to a number (0).

//It becomes 0 >= 0, which is true.


//Type Conversion:-


//> from to Numbers:
// "33" => 33
 //"33abc" => NaN
// true => 1; false => 0


//> from to Boolean:
 // 1 => true; 0 => false;
 // NaN => false;
 // "" => false;
  //"Barsha" => true;


//>convert during operations
//=>if string is written first then convert all after it to string:
          //    "2" + 2 + 2 = 222
          //     "1" + 2 = 12
//=>if string comes after then the conversion occurs at last 
   //            2 + 2 + "2" = 42
   //            1 + 1 + "2" + 2 + 1  = 2221


//#use +operand to convert the operand to number
 // INTEGER DATA TYPES
 // 7 strings: string,Number,Boolean,null, undefined,symbol, BigInt
const score = 100
const ScoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id= Symbol(123)
const anotherId = Symbol(123)
console.log(id=== anotherId);
//const bigNumber = 2345678901234567890n


// Reference (Non primitive)
// Array , objects , functions
const Heros= ["shaktiman, bheem, baalveer"]
let myObj = {
   Name : " Mayukh",
   age : 16,
}

const myFunction = function(){
   console.log("Hello world");
}
console.log(typeof myFunction);

//******************************Return type of variables in JavaScript
//1) Primitive Datatypes
     //  Number => number
    //   String  => string
    //   Boolean  => boolean
    //   null  => object
    //   undefined  =>  undefined
    //   Symbol  =>  symbol
   //    BigInt  =>  bigint

//2) Non-primitive Datatypes
     //  Arrays  =>  object
     //  Function  =>  function
     //  Object  =>  object


     


