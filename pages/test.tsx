import exampleAction from '@/redux/actions/example'

import { type CounterState } from '@/redux/reducers/example'
import { Button, Input } from '@mui/material'
import { type NextPage } from 'next'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
function Test (): JSX.Element {
  const dispatch = useDispatch()
  const counter: number = useSelector((state: { counterExample: CounterState }) => (!Number.isNaN(state.counterExample.count)) ? state.counterExample.count : 0)
  const [adder, setAdder] = useState(1)

  const handleIncrement = (): void => {
    dispatch(exampleAction.increment(adder))
  }

  const handleDecrement = (): void => {
    dispatch(exampleAction.decrement(adder))
  }

  return (
    <div>
      <h1>Count: {counter}</h1>
      adder <Input type='number' onChange={(e) => { setAdder(Number(e.target.value)) }} value={adder} />
      <Button onClick={handleIncrement}>Increment</Button>
      <Button onClick={handleDecrement}>Decrement</Button>
    </div>
  )
}
const Page: NextPage = (props) => <Test {...props}/>
export default Page
