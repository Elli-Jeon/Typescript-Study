import React from 'react';
import Greetings from 'Greetings';
import Counter from 'Counter';

function App() {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };

  return (
    <>
      <Greetings name="Sangwoo" onClick={onClick}></Greetings>;
      <Counter></Counter>
    </>
  );
}

export default App;
