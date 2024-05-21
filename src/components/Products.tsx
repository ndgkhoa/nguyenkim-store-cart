'use client'
import { Carousel, Card } from 'antd'
import Image from 'next/image'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { useEffect, useRef, useState } from 'react'
import { CarouselRef } from 'antd/lib/carousel'
import Link from 'next/link'

const { Meta } = Card

const Products = () => {
    const carouselRef = useRef<CarouselRef>(null)
    const [productGroups, setProductGroups] = useState<any[]>([])

    const next = () => {
        if (carouselRef.current) {
            carouselRef.current.next()
        }
    }

    const prev = () => {
        if (carouselRef.current) {
            carouselRef.current.prev()
        }
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://nguyenkim-be.onrender.com/v1/product')
                const data = await response.json()
                if (response.ok) {
                    const groups = []
                    for (let i = 0; i < data.data.length; i += 10) {
                        groups.push(data.data.slice(i, i + 10))
                    }
                    setProductGroups(groups)
                } else {
                    throw new Error('Failed to fetch data')
                }
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchData()
    }, [])

    return (
        <div className="container mx-auto mt-2 bg-gray-100 relative">
            <div className="relative w-full h-[70px] mb-4">
                <Image src="/images/Title-web_1200x65.jpg" alt="Top Product" fill className="object-cover" />
            </div>
            <Carousel ref={carouselRef} arrows={false}>
                {productGroups.length > 0 ? (
                    productGroups.map((group, index) => (
                        <div key={index} className="carousel-slide">
                            <div className="grid grid-cols-5 gap-4">
                                {group
                                    .filter((product: any) => product.status === 'true')
                                    .map((product: any) => (
                                        <Link key={product.product_id} href={`/product/${product.product_id}`} passHref>
                                            <Card
                                                hoverable
                                                style={{ width: '100%' }}
                                                cover={<img alt={product.product_name} src={product.image_1} />}
                                            >
                                                <Meta
                                                    title={product.product_name}
                                                    description={`Giá: ${product.price.toLocaleString('vi-VN')} VND`}
                                                />
                                            </Card>
                                        </Link>
                                    ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-sm text-black">Loading...</p>
                )}
            </Carousel>
            <div
                className="custom-arrow custom-prev flex items-center justify-center"
                onClick={prev}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '10px',
                    transform: 'translateY(-50%)',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    color: '#fff',
                    fontSize: '20px',
                    cursor: 'pointer',
                }}
            >
                <LeftOutlined />
            </div>
            <div
                className="custom-arrow custom-next flex items-center justify-center"
                onClick={next}
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: '10px',
                    transform: 'translateY(-50%)',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    color: '#fff',
                    fontSize: '20px',
                    cursor: 'pointer',
                }}
            >
                <RightOutlined />
            </div>
        </div>
    )
}

export default Products
