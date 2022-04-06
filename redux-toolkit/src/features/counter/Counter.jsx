import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount
} from './counterSlice'
import './counter.css'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const [amount, setAmount] = useState('0')

  return (
    <>
      <div className='hihi'>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <div>{count}</div>
        <button onClick={() => dispatch(increment())}>Increment</button>
      </div>
      <input type='number' value={amount} onChange={e => setAmount(e.target.value)} />
      <div className='hoho'>
        <button onClick={() => dispatch(decrementByAmount(Number(amount)))}>Decrement By Amount</button>
        <button onClick={() => dispatch(incrementByAmount(Number(amount)))}>Increment By Amount</button>
      </div>
    </>
  )
}