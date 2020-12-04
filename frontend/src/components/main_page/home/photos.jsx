import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Photos() {
    const PHOTOS = [
        "https://clubeuniverso.s3.us-east-2.amazonaws.com/Photos/IMG-20200819-WA0014.jpg",
        "https://clubeuniverso.s3.us-east-2.amazonaws.com/Photos/IMG-20200819-WA0001.jpg",
        "https://clubeuniverso.s3.us-east-2.amazonaws.com/Photos/IMG-20200819-WA0010.jpg",
        "https://clubeuniverso.s3.us-east-2.amazonaws.com/Photos/IMG-20200819-WA0015.jpg",
        "https://clubeuniverso.s3.us-east-2.amazonaws.com/Photos/IMG-20200819-WA0000.jpg",
        "https://clubeuniverso.s3.us-east-2.amazonaws.com/Photos/IMG-20200819-WA0017.jpg"
    ]

    return(
        <Carousel className='photos'
            infiniteLoop={true}
            transitionTime={2000}
            dynamicHeight={true}
            interval={7000}
            swipeable={true}
            stopOnHover={true}
            autoPlay={true}>
            {PHOTOS.map(photo => {
                return(
                    <div key={photo.slice(photo.length-10)} className='picture'>
                        <img src={photo} alt=""/>
                    </div>
                )
            })}
        </Carousel>
    )
}