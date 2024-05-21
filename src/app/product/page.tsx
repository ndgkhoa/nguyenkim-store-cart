'use client'
import { Card } from 'antd'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const { Meta } = Card

const Products = () => {
    const searchParams = useSearchParams()
    const category_id = searchParams.get('category_id')

    const [products, setProducts] = useState<any>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://nguyenkim-be.onrender.com/v1/product?category_id=${category_id}`)
                const data = await response.json()
                if (data.status === 200) {
                    setProducts(data.data)
                }
            } catch (error) {}
        }
        fetchData()
    }, [category_id])

    return (
        <div className="container mx-auto mt-5 bg-gray-100">
            {products && products.length > 0 ? (
                <>
                    <p className="text-2xl font-bold">
                        Tất cả sản phẩm của danh mục {products[0].category.category_name}
                    </p>
                    <div className="grid grid-cols-5 gap-4 mt-4">
                        {products.map((product: any) => (
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
                </>
            ) : (
                <p className="text-sm text-black">Loading...</p>
            )}
        </div>
    )
}
export default Products
