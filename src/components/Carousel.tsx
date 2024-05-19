import React from 'react'
import { Carousel } from 'antd'

const contentStyle: React.CSSProperties = {
    height: '600px',
}

const SlideCarousel: React.FC = () => (
    <Carousel autoplay style={{ paddingTop: '1rem' }}>
        <div>
            <img
                src="/images/slider/SlideCarousel1.jpg"
                alt="Slide 1"
                style={{ ...contentStyle, objectFit: 'cover' }}
            />
        </div>
        <div>
            <img
                src="/images/slider/SlideCarousel2.jpg"
                alt="Slide 1"
                style={{ ...contentStyle, objectFit: 'cover' }}
            />
        </div>
        <div>
            <img
                src="/images/slider/SlideCarousel3.jpg"
                alt="Slide 1"
                style={{ ...contentStyle, objectFit: 'cover' }}
            />
        </div>
        <div>
            <img
                src="/images/slider/SlideCarousel4.jpg"
                alt="Slide 1"
                style={{ ...contentStyle, objectFit: 'cover' }}
            />
        </div>
    </Carousel>
)

export default SlideCarousel
