
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import product1 from '../images/image-product-1.jpg'
import product_thumbnail1 from '../images/image-product-1-thumbnail.jpg'
import product2 from '../images/image-product-2.jpg'
import product_thumbnail2 from '../images/image-product-2-thumbnail.jpg' 
import product3 from '../images/image-product-3.jpg'
import product_thumbnail3 from '../images/image-product-3-thumbnail.jpg'
import product4 from '../images/image-product-4.jpg'
import product_thumbnail4 from '../images/image-product-4-thumbnail.jpg'

const images = [
  {
    original: product1,
    thumbnail: product_thumbnail1,
  },
  {
    original: product2,
    thumbnail: product_thumbnail2,
  },
  {
    original: product3,
    thumbnail: product_thumbnail3 ,
  },
  {
    original: product4,
    thumbnail: product_thumbnail4 ,
  },
];

function MyGallery() {
  
    return (
    <div className="d-flex justfiy-content-center  align-items-center
        pt-2">
        <ImageGallery items={images}
                            showFullscreenButton={false}
                            showPlayButton={false}
                            autoPlay={false}
                            showNav={false}
                            
        />
    </div>
    )
}
export default MyGallery