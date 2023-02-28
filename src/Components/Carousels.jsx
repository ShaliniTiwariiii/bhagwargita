import gita1 from '../assets/gita1.jpg'
import gita2 from '../assets/gita2.jpg'

import k2 from '../assets/k2.jpg'
import k3 from '../assets/k3.jpg'

import krish6 from '../assets/krish6.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';


export default function Carousels() {
   
    return (
 

      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={k2}
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={k3}
          alt="Second slide"
        />

      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={k3}
          alt="Third slide"
        />

      
      </Carousel.Item>
    </Carousel>
 
    )
}

