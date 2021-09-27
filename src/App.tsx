import React from 'react';
import Greetings from 'Greetings';
import Counter from 'Counter';
import MyForm from 'MyForm';

function App() {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };

  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };

  return (
    <>
      <Greetings name="Sangwoo" onClick={onClick}></Greetings>;
      <Counter></Counter>
      <MyForm onSubmit={onSubmit}></MyForm>
    </>
  );
}

export default App;
