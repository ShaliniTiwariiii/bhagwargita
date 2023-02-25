import gita1 from '../assets/gita1.jpg'
import gita2 from '../assets/gita2.jpg'
import shreeKrishna from '../assets/shreeKrishna.jpg'
import gita5 from '../assets/gita5.jpg'
import krishnImg from '../assets/krishnImg.jpg'
import k2 from '../assets/k2.jpg'
import k3 from '../assets/k3.jpg'
import k4 from '../assets/k4.jpg'
import k5 from '../assets/k5.jpg'
import { Carousel } from 'react-carousel-minimal';



const data = [
    {
      image: k2,
      alt: 'Image 1',
    },
    {
      image: gita2,
      alt: 'Image 2',
    },
    {
      image: k4,
      alt: 'Image 3',
    },
    {
        image:k3 ,
        alt: 'Image 3',
      }
  ];
export default function Carousels() {
   
    return (
        <Carousel
        data={data}
        time={4000}
        width="100%"
        height="40rem"
      
        radius="0px"
        slideNumber={true}
      padding='1rem'
        captionPosition="bottom"
        automatic={true}
        dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="cover"
        thumbnails={false}
        thumbnailWidth="100px"
        // style={{
        //   textAlign: "center",
        // //   maxWidth: "71.87rem",
        // // maxWidth:'100%',
        // //   maxHeight: "40rem",
        //   margin: "40px auto",
        // }}
      />
 
    )
}

