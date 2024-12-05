
// import { useState } from "react"
import { Col, Container , Row  } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { decrease , increase } from "../Slices/CartSlice"


import {setAppear} from '../Slices/AppearSlice'

const ProductDetailes = () => {

  
  const state = useSelector(state=>state.Cart)
  const dispatch = useDispatch()
  
  
  return (
    <Container className="py-5">
      <Row>
        <p className="text-muted fst-normal fs-5">SNEAKER COMPANY</p>
      </Row>
      <Row className="mb-3">
        <h1 className="fw-bolder fs-1">Fall Limited Edition SNEAKER</h1>
      </Row>
      <Row>
        <p className="fw-normal text-black-50 fs-5">These low-profile sneakers are your perfect casual waer companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
      </Row>
      <Row className="mt-4">
        <Col className="d-flex justify-content-start align-items-center" >
          <h1 >$125.00</h1>
          <div className="mx-3 bg-dark px-2 py-1 text-light rounded-1">50%</div>
        </Col>
        
      </Row>
      <Row>
        <del>$250.00</del>
      </Row>
      <Row className="d-flex justify-content-between align-items-baseline mt-5">
        <Col>
            <div className="d-flex justify-content-start align-items-baseline bgClass">
                <button className="but" onClick={()=>{
                  if (state >=1)
                  dispatch(decrease(1))
                }}>-</button>
                <p className="mx-3 ">{state}</p>
                <button className="but" onClick={()=>{
                  dispatch(increase(1))
                }} >+</button>
            </div>
        </Col>
        <Col>
            <button className="color" onClick={()=>{dispatch(setAppear(true))}}>
                Add To Cart
            </button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetailes
