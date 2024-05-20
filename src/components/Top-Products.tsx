'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Card } from 'antd'
import Link from 'next/link'

const { Meta } = Card

const TopProducts = () => {
    const [products, setProducts] = useState<any[]>([])
    const [randomProducts, setRandomProducts] = useState<any[]>([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://nguyenkim-be.onrender.com/v1/product')
                const data = await response.json()
                if (data.status === 200) {
                    const filteredProducts = data.data.filter((product: any) => product.status === 'true')
                    setProducts(filteredProducts)
                    setRandomProducts(getRandomProducts(filteredProducts, 10))
                } else {
                    throw new Error('fail')
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchProducts()
    }, [])

    const getRandomProducts = (products: any[], count: number): any[] => {
        return products.sort(() => 0.5 - Math.random()).slice(0, count)
    }

    return (
        <div className="container mx-auto mt-5 bg-gray-100">
            <div className="relative w-full h-[70px]">
                <Image src="/images/Title-San-Top-SP-WEB.png" alt="Top Product" fill className="object-cover" />
            </div>
            <div className="grid grid-cols-5 gap-4 mt-4">
                {randomProducts.length > 0 ? (
                    randomProducts.map((product) => (
                        <Link key={product.product_id} href={`/product/${product.product_id}`} passHref>
                            <Card
                                hoverable
                                style={{ width: '100%' }}
                                cover={<img alt={product.product_name} src={product.image_1} />}
                            >
                                <Meta title={product.product_name} description={`Price: ${product.price} VND`} />
                            </Card>
                        </Link>
                    ))
                ) : (
                    <p className="text-sm text-black">Loading...</p>
                )}
            </div>
        </div>
    )
}

export default TopProducts
