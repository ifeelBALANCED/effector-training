import { createEvent, createStore } from 'effector';

export const increment = createEvent('Increment counter');
export const decrement = createEvent('Decrement counter');
export const $counter = createStore<number>(0);

$counter.on(increment, (state) => state + 1).on(decrement, (state) => state - 1);
