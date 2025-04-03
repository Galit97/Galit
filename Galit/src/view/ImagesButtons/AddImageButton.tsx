import { useDispatch, useSelector } from 'react-redux'
import { setImage } from '../../redux/Image/ImageSlice'
import { RootState } from '../../redux/store'

const AddImageButton = () => {

    const dispatch = useDispatch()
    const ImageUrl = useSelector((state:RootState) => state.image.ImageUrl)
    function handleAddImage(){
        dispatch(setImage("https://i.pinimg.com/736x/3e/e7/0e/3ee70eaee26cd54feb90a9bf1fbf6cec.jpg"))
    }
  return (
    <div>
    <button onClick={handleAddImage}>❀</button>
    <img className={'img'} src={ImageUrl}  />

  </div>
  )
}

export default AddImageButton