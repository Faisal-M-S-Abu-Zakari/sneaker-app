import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons/faXmarkCircle';
import { Container , Button } from 'react-bootstrap';
import photo from '../images/image-product-1-thumbnail.jpg'
import { useDispatch, useSelector } from 'react-redux';
import {setAppear} from '../Slices/AppearSlice'
import {clear} from '../Slices/CartSlice'
const Cart = () => {
  const count =useSelector(state=>state.Cart)
  const appear = useSelector(state=>state.appear)
  const dispatch = useDispatch()
  return (
    <div className={`Cart `}>
      <div className='d-flex justify-content-between '>
        <h1>Cart</h1>
        <FontAwesomeIcon icon={faXmarkCircle} className='fs-5'   style={{cursor:"pointer"}} onClick={()=>{dispatch(setAppear(false))}}/>
      </div>
      <hr />
      {appear && <Container>
        {count>=1 ?
        <>
          <div className='d-flex justify-content-between align-items-center'>
            <img src={photo} style={{width:'50px'}} className='rounded-1'/>
            <div>
                <h5 className='fs-5'>Fall limited Edition snaker </h5>
                <span>$125.00 x</span><span>{count}</span> <span className='fw-bold'>{`${count*125}.00$`}</span>
            </div>
            <FontAwesomeIcon icon={faXmarkCircle} className='fs-5' style={{cursor:"pointer"}} 
            onClick={()=>{
              dispatch(setAppear(false))
              dispatch(clear())
              }}/>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
            <button className='mt-4 d-flex px-5 color'>
                Cheack Out
            </button>
        </div>
        </>
         :
        <div className='d-flex justify-content-center align-items-center'>
          <h1 className='fs-4 text-danger'>No Product Added</h1>
        </div>}
      </Container>}
    </div>
  )
}

export default Cart
