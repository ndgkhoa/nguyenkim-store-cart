'use client'
import { useEffect, useState } from 'react'
import { Button } from 'antd'

const SingleProduct = ({ params }: { params: { id: string } }) => {
    const [singleProduct, setSingleProduct] = useState<any>()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://nguyenkim-be.onrender.com/v1/product?product_id=${params.id}`)
                const data = await response.json()
                if (data.status === 200) {
                    setSingleProduct(data.data[0])
                }
            } catch (error) {}
        }
        fetchData()
    }, [])

    return (
        <div className="container mx-auto mt-16 mb-48">
            {singleProduct ? (
                <div className="grid grid-cols-3">
                    <div>
                        <img src={singleProduct.image_1} alt={singleProduct.product_name} width={300} height={400} />
                    </div>
                    <div className="col-span-2">
                        <h1 className="text-3xl font-semibold mb-4">{singleProduct.product_name}</h1>
                        <p className="text-xl font-semibold pb-2">
                            <p>Giá: {singleProduct.price.toLocaleString('vi-VN')} VND</p>
                        </p>
                        <Button
                            type="primary"
                            size="large"
                            style={{
                                borderRadius: '8px',
                                background: '#fe0000',
                                border: 0,
                                color: 'white',
                                fontWeight: 'bold',
                                width: '250px',
                            }}
                        >
                            Thêm vào giỏ hàng
                        </Button>
                        <div className="pt-2" dangerouslySetInnerHTML={{ __html: singleProduct.description }} />
                    </div>
                </div>
            ) : (
                <p className="text-sm text-black">Loading...</p>
            )}
        </div>
    )
}
export default SingleProduct
