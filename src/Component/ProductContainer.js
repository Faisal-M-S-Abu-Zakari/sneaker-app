import { Col, Container, Row } from "react-bootstrap"
import ProductGallery from "./ProductGallery"
import ProductDetailes from "./ProductDetailes"

const ProductContainer = () => {
  return (
    <Container className="py-3">
      <Row>
        <Col>
          <ProductGallery />
        </Col>
        <Col>
          <ProductDetailes />
        </Col>
      </Row>
    </Container>
  )
}

export default ProductContainer
