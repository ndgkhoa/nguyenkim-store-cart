'use client'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Card } from 'antd'
import Link from 'next/link'

const { Meta } = Card

const SearchResults = () => {
    const searchParams = useSearchParams()
    const query = searchParams.get('query')

    const [products, setProducts] = useState<any[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://nguyenkim-be.onrender.com/v1/product?product_name=${query}`)
                const data = await response.json()
                if (data.status === 200) {
                    setProducts(data.data)
                }
            } catch (error) {
                console.error('Error fetching search results:', error)
            }
        }
        fetchData()
    }, [query])

    return (
        <div className="container mx-auto mt-5">
            <p className="text-2xl font-bold">Kết quả tìm kiếm cho "{query}"</p>
            <div className="grid grid-cols-5 gap-4 mt-4">
                {products.length > 0 ? (
                    products.map((product) => (
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
                    ))
                ) : (
                    <p className="text-sm text-black">Không tìm thấy sản phẩm</p>
                )}
            </div>
        </div>
    )
}

export default SearchResults
