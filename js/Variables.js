// variables are container which is used to store data
//  *******************************
//   Var is  a function scope 
var lang = 'javascript';
 console.log(lang);

//  *******************************

//    let is a block scope
 let bhasha = 'javascript'
 console.log(lang);

//  *******************************


 const  Ljavascript = 'language'
 console.log(Ljavascript);




//  scope is a way to access variables
//  there are two type of scopes
//  Global and Local



// A variable declared at the top of a program or outside of a function is considered a global scope variable.

// program to print a text 
let a = "hello";

function greet () {
    console.log(a);
}

greet(); // hello





function good(){
   let rate = 55;
    console.log('fair price');
    
}
console.log(rate);
good()


// Prefer not to use var beccause of issue in block and function scope

























