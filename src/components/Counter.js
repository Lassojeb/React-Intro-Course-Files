import React from 'react';

const Counter = ({ count, clicked, onDecrement, onIncrement, onCustomAmount, onClickCount }) => {

    return (
      <div>
        <div>
          <button onClick={onDecrement}>-</button>
          <span>{count}</span>
          <button onClick={onIncrement}>+</button>
          <br />
          <p>Times the incrment/decrement buttons have been clicked: <span>{clicked}</span></p>
        <input type='number' onChange={event => onCustomAmount(parseInt(event.target.value))} />
        <button onClick={onClickCount} >Change Count Number</button>
        </div>
      </div>
    );
}

export default Counter;