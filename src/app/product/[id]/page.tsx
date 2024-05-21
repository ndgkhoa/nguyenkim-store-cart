'use client'
import { CartContext } from '@/components/CartContext'
import React, { useContext, useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const SingleProduct = ({ params }: { params: { id: string } }) => {
    const [singleProduct, setSingleProduct] = useState<any>(null)
    const { addToCart } = useContext(CartContext)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://nguyenkim-be.onrender.com/v1/product?product_id=${params.id}`)
                const data = await response.json()
                if (data.status === 200) {
                    setSingleProduct(data.data[0])
                }
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [params.id])

    const handleAddToCart = () => {
        toast.success('Thêm vào giỏ hàng thành công')
        if (singleProduct) {
            addToCart(singleProduct)
        }
    }

    return (
        <section className="text-gray-700 body-font overflow-hidden bg-white">
            <div className="container px-5 py-24 mx-auto">
                {singleProduct ? (
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img
                            alt="ecommerce"
                            className="w-[400px] h-[450px] rounded border border-gray-200"
                            src={singleProduct.image_1}
                        />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">
                                Thương hiệu: {singleProduct.brand.brand_name}
                            </h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                                {singleProduct.product_name}
                            </h1>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    {[...Array(4)].map((_, index) => (
                                        <svg
                                            key={index}
                                            fill="currentColor"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-4 h-4 text-red-500"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                    ))}
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-4 h-4 text-red-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <span className="text-gray-600 ml-3">4 Reviews</span>
                                </span>
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                                    <a className="text-gray-500">
                                        <svg
                                            fill="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a className="ml-2 text-gray-500">
                                        <svg
                                            fill="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a className="ml-2 text-gray-500">
                                        <svg
                                            fill="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                            <div className="flex my-2 items-center">
                                <span className="title-font font-medium text-2xl text-gray-900">
                                    {' '}
                                    {singleProduct.price.toLocaleString('vi-VN')} VND
                                </span>
                                <button
                                    onClick={handleAddToCart}
                                    className="flex ml-auto text-white bg-[#fe0000] border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                                >
                                    Thêm vào giỏ hàng
                                </button>
                            </div>
                            <p
                                className="leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: singleProduct.description }}
                            ></p>
                        </div>
                    </div>
                ) : (
                    <p className="text-sm text-black">Loading...</p>
                )}
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </section>
    )
}

export default SingleProduct
