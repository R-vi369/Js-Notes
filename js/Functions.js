//  functions are block of code which is only be excecuted when it is called, it is use for calling same value multiple times


function username(){
   console.log('mithilesh');

}
username()

 
 
 function sub(){
    console.log("maths");
    console.log(" c lang");
    console.log("ds");
 }
 sub()

//  *************

 function addTwoNumber(num1, num2){
   console.log(num1 + num2);

 }
 addTwoNumber(10, 53)





//  rest op

function cal ( ...num){
   return num
}
 console.log(cal(3,5,53));




//  this - refers current context(context means value)

const  user ={

   userName : 'ravi',
    location: 'unknown',
    message: function(){
       console.log(`${this.userName}, welcome to your account`);
    }
}
user.message()
// console.log(this); shows empty in node


//  arrow functions

  const  phone =()=>{
   console.log('vivo');
   console.log('iphone');
   
  }
  phone()



 