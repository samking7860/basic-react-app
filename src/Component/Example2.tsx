import React from "react";

interface Person{
    firstName:string;
    lastName:string;
}
interface User{
    text:string;
    ok?:boolean;
    id?:number;
    fn?:(bob:string)=>string;
    person:Person;
}



export const Example2:React.FC<User> = ({text,person})=>{
    return(
        <div>
            <h1>Hi {person.firstName+person.lastName}! How are u?</h1>
            <h2>{text}</h2>
        </div>

    );
};