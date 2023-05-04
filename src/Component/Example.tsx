import React from "react";

//Function in TS.
interface Props{
    text:string;
}

function Hello({props}:{props:string}) {
    return <h1>Hello World!{props}</h1>;
  }

 //variable Declaration in TS.
var message:string = "Hello World!";
console.log(message);
let num1:number = 10;
let num2:number = 20;
console.log("addition",num1+num2);
console.log("sub",num1-num2);

//Function with generics.
type PL = {
    name: string;
}
function Course<T>(arg:T):T{
    return arg;
}
let val2 = Course({name:"CSS"});
console.log(val2.name);
let val = Course<PL>({name:"JS"});
console.log(val.name);

function identity<T>(arg: T): T {    
    return arg;    
}    
let output1 = identity<string>("myString");    
let output2 = identity<number>( 100 );  
console.log(output1);  
console.log(output2); 

function addNumbers(a: number, b: number) { 
    return a + b; 
} 

var sum: number = addNumbers(10, 15) 

console.log('Sum of the two numbers is: ' +sum); 



export const Example: React.FC = () =>{
    return(
        <div>
            <Hello props="chand"/>
            <input value="text"/>
        
        </div>
    );
};