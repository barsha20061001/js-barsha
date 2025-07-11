// 1.JS creates Global excution context 
// 2.Next it creates memory phase
// 3.Memory phase - In this phase,the variables are set to undefined 
//   until the execution phase(next phase) and the functions are set to their definitions.
// 4.Next it creates the execution phase
// 5.Execution phase - In this phase,the variables are initialsed to given values and 
//   when the function s are called,it creates a memory phase and execution phase for the function 
//   just like the main one.
// 
//   Understand call stack with the help of live demo :
// browser > inspect > Sources
// 1.then create a snippet by clicking on the arrow(>>) next to workspace
// 2.then write down some functions in the created snippet ,do save them by ctrl+S 
// 3.Create breakpoints and run the code and keep eye on call stack to visualize how it works.
// 

// The working of the JavaScript works on three phases:
// 1. Global Execution Context
// 2. Memory phase / Creation phase
// 3. Execution phase
// 
// 🔵Phase 1: Global Execution Context
// The value of `this` keyword is set to Global Execution Context (which is an empty Object in NODE environment, & window object in browser environment)
// 
// 🔵Phase 2: Memory phase
// During this phase, JS engine scans the code and assigns the initial values for the variables , functions, etc.. For variables they are 'undefined' and for functions they are set to their function definition
// 
// 🔵Phase 3: Execution phase
// After the creation phase completed, the execution phase begins where actual values of the variables are set. And when the functions are called it creates a new 'Function Execution' context which consists of two phases (they works same as explained above but only for the particular function scope):
// 1. Memory phase 
// 2. Execution phase 
// 📝The return value of the 'Function Execution' context is passed to the Global Execution Context


// Context are of type : 
// Global Execution Context
// Function Execution Context
// Eval Execution Context
// 
// Javascript code is run in two phases : 
// 
// Memory creation phase (or called creation phase) : in this phase only memory is allocated to the variables functions
// Execution phase : Code is executed in this ohase
            //    For every time the code is execute, a context is created, which consist of : 
		// New Variable Enviorment
                // Execution Thread
	//  It returns the variable to the parent context, ie. global execution context, and then it is delete to free up the memory.



   // Here we see how code execute in js.
// how call Stack work inside memory ?
// 
// First we see execution context
// Second we see call stack(means how fuction goes inside memory and how function exit from that memory ) We see all it in browser Environment.
// 
// 
// Execution Context means how js run and execute the file you made.
// 
// js run your program in two phase 
// 
// If you create js code file , the 1st thing that is created is global EC .
// and this global EC refrence is kept inside this . Or Browser ,or diifferent different js environment EC are different . In browser EC this(keyword) contains window object.
// 
// 
// Types of EC
// 
// 1 Global EC
// 2 Function/Functional EC
// or
// 3 Eval EC (It is property of global object So we say it Global EC )
// 
// 
// -> How does js code executed ?
// 
// js code run in two phases.
// 1> Memory Creation phase / Memory Phase
// 2> Exececution phase 
// 
// 
// ->Here we see Execution phase in detail
// 
// Steps Involved:
// 
// 1>  Firstly Global EC are created and stored in this(keyword)
// 
// 2> Memory Phase - All variables are collected and memory allocated to it.
// initially all variables assign with undefined.
// and all function assign with its defination.
 //this step is called first cycle.

// 3> Execution Phase 
// variables are assign with its values.
// function creats it own New  Execution context
// (And this context contain variable environment and execution thread that perform all execution )
// 
// And inside that Memory creation phase and Execution phase  take place for function .
// Now function return return-back value to Global/Parent Execution Context. 
// 
// And the Fuction Exection context after returning values to parent get deleted/vanishes.
// 
//  function  new-Execution context created as many time time as it encounter new function in program.


//->Now we explore call Stack.

//It is like stack .

//First at first at the bottom there is Global EC and further the function EC context are coming as they need to execute and after executing its EC it exit from the stack.

//Here Function EC come in LIFO fashion(Last in First Out)  in call Stack


// Creation of the Global Execution Context:
// When a JavaScript program starts running, it creates the global execution context. This context consists of two phases: the memory phase and the execution phase.
// 
// ➡Memory Phase:
// During the creation phase, the JavaScript engine sets up the global object (which is the window object in a browser environment), the 'this' keyword, and the outer environment reference.
// It also scans through the code and sets up memory space for variables and functions through a process called "hoisting." Variables are set to undefined, and functions are stored in their entirety.
// 
// ➡Execution Phase:
// After the creation phase, the execution phase begins. This is where the actual code is executed line by line.
// 
// ➡Function Execution:
// When a function is called, a new execution context is created for that function. This includes its own memory space for variables and parameters.
// The function goes through its own creation and execution phases.
// After the function finishes executing, its execution context is popped off the call stack.
// 
// ➡Call Stack:
// The call stack is a data structure that keeps track of the execution context of the program. It follows the Last In, First Out (LIFO) principle.
// As functions are called, their execution contexts are added to the top of the call stack.
// When a function completes its execution, its context is removed from the top of the call stack.
// 
// ➡Global Execution Completion:
// Once the global execution context completes, the program finishes its execution.
// 
// 
// 
// Note:  the returned value being passed to the global environment, it's more accurate to say that the returned value is passed to the calling context. If a function is called within another function, the returned value is typically used in the context of the calling function.