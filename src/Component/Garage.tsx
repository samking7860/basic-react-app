import React from 'react';

function Car(props:any) {
  return <li>I am a { props.brand }</li>;
}

export const Garage:React.FC = ()=> {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
	    <h1>Who lives in my garage?</h1>
	    <ul>
        {cars.map((car) => <Car brand={car} />)}
      </ul>
    </>
  );
}
