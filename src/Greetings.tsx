import React from 'react';

type GreetingProps = {
  name: string;
  mark?: string;
  optional?: string;
  onClick: (name: string) => void;
};

const Greetings = ({ name, mark, onClick }: GreetingProps) => (
  <div>
    {name} {mark}
  </div>
);

export default Greetings;
