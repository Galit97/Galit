import React from 'react'
import { decrement } from '../../redux/counter/counterSlice'
import { useDispatch } from 'react-redux'

const RemoveButton = () => {

    const dispatch = useDispatch()

    function handleRemove(){
        dispatch(decrement())
    }
  return (
  <button onClick={handleRemove}>-</button>
  )
}

export default RemoveButton