import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  // 상태가 null일 수도 있고 아닐수도 있을때 Generics 를 활용하시면 좋습니다.
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}></button>
      <button onClick={onDecrease}></button>
    </div>
  );
};

export default Counter;
