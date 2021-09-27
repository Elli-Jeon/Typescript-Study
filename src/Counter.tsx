import React, { useReducer } from 'react';

type Action = { type: 'INCREASE' } | { type: 'DECREASE' };

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;
  }
}

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  // 상태가 null일 수도 있고 아닐수도 있을때 Generics 를 활용하시면 좋습니다.
  const onIncrease = () => dispatch({ type: 'INCREASE' });
  const onDecrease = () => dispatch({ type: 'DECREASE' });

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}></button>
      <button onClick={onDecrease}></button>
    </div>
  );
};

export default Counter;
