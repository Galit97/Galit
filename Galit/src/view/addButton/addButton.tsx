import { increment } from '../../redux/counter/counterSlice'
import { useDispatch } from 'react-redux'

const AddButton = () => {

    const dispatch = useDispatch()

    function handleAdd(){
        dispatch(increment())
    }
  return (
  <button onClick={handleAdd}>+</button>
  )
}

export default AddButton