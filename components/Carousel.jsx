"use client"
import { Carousel } from 'react-responsive-carousel';
import one from "../public/one.jpg"
import Image from 'next/image';

export default () => (
    <Carousel autoPlay>
     
        <div>
            <Image alt="tow is" src={one} />
            <p className="legend">Legend 3</p>
        </div>
        <div>
            <Image alt="one is" src={one} />
            <p className="legend">Legend 3</p>
        </div>
       
    </Carousel>
     )