import { useEvent, useStore } from 'effector-react';
import { counterModel } from 'features/counter';

export const CounterButton = () => {
  const counter = useStore(counterModel.$counter);
  const increment = useEvent(counterModel.increment);
  const decrement = useEvent(counterModel.decrement);

  return (
    <div>
      <span>{counter}</span>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};
