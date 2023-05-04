import React from "react";


const shoot = (a:string,event:any)=>{
    alert(a);
    alert(event.type);
}

function MissedGoal() {
	return <h1>MISSED!</h1>;
}

function MadeGoal() {
	return <h1>GOAL!</h1>;
}

function Goal(props:any) {
  const isGoal:any = props.isGoal;
  if (isGoal) {
    return <MadeGoal/>;
  }
  return <MissedGoal/>;
}
 

export const FootBall:React.FC = ()=>{
    return(
        <div>
        <h1>You got to take the penalty</h1>
        <button onClick={(event)=>shoot("goal",event)}>Take the shot</button>
        <Goal props={true}/>
        </div>
    );
}