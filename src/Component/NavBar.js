import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import avatar from '../images/image-avatar.png'
import cartIcon from '../images/icon-cart.svg'
import Cart from './Cart';  
import { useSelector  , useDispatch} from 'react-redux';
import {setAppear} from '../Slices/AppearSlice'
function NavBar() {
  const count = useSelector(state=>state.Cart)
  const appear = useSelector(state=>state.appear)
  const dispatch = useDispatch()
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Sneakers</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Collections</Nav.Link>
            <Nav.Link href="#pricing">Men</Nav.Link>
            <Nav.Link href="#pricing">Women</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
          <Nav className='d-flex justify-content-center align-items-center flex-row'>
                <div className='d-flex justify-content-start align-items-center cart-icon'>
                  {appear&&<span className='count '>{count}</span>}<img className='cart mx-3' src={cartIcon} alt="" onClick={()=>dispatch(setAppear(true))} />  
                </div>       
                <img className='cart avatar' src={avatar} alt="" />
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
    {appear && <Cart  />}
    </>
  );
}

export default NavBar;