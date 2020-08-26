export const increment = () => ({
  type: 'INCREMENT'
});

export const decrement = () => ({
  type: 'DECREMENT'
});

export const customamount = count => ({
  type: 'CUSTOMAMOUNT',
  count
});

export const clickcount = count => ({
  type: 'CLICKCOUNT',
  count
});