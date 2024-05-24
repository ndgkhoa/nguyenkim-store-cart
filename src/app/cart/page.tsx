'use client'

import PaymentButton from '@/components/PaymentButton'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

const Cart = () => {
    const [cart, setCart] = useState<any>([])
    const [data, setData] = useState<any>()
    const router = useRouter()

    const today = new Date()
    const futureDate = new Date(today)
    futureDate.setDate(futureDate.getDate() + 3)
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short' }
    const formattedDate = futureDate.toLocaleDateString('vi-VN', options)

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const token = localStorage.getItem('token')
                const response = await fetch('https://nguyenkim-be.onrender.com/v2/cart/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                        Accept: 'application/json, text/plain, */*',
                    },
                })
                const data = await response.json()
                setCart(data.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchCart()
    }, [])

    const removeFromCart = async (id: number) => {
        try {
            const token = localStorage.getItem('token')
            const response = await fetch(`https://nguyenkim-be.onrender.com/v2/cart/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            })
            const data = await response.json()
            setData(data)
            if (response.ok) {
                toast.success('Xóa sản phẩm khỏi giỏ hàng thành công')
                //router.push('/cart')
            } else {
                toast.error('Lỗi khi xóa sản phẩm khỏi giỏ hàng:')
            }
        } catch (error) {
            console.error('Lỗi khi gửi yêu cầu xóa sản phẩm khỏi giỏ hàng:', error)
        }
    }
    console.log(data)

    return (
        <div className="flex flex-col md:flex-row w-screen h-full px-14 py-7">
            <div className="w-full md:w-2/3 flex flex-col h-fit gap-4 p-4">
                <p className="text-blue-900 text-xl font-extrabold">Giỏ hàng của tôi</p>
                {cart.map((product: any) => (
                    <div
                        key={product.product.product_id}
                        className="flex flex-col p-4 text-lg font-semibold shadow-md border rounded-sm"
                    >
                        <div className="flex flex-col md:flex-row gap-3 justify-between">
                            <div className="flex flex-row gap-6 items-center">
                                <div className="w-28 h-28">
                                    <img
                                        className="w-full h-full"
                                        src={product.product.image}
                                        alt={product.product.product_name}
                                    />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-lg text-gray-800 font-semibold">
                                        {product.product.product_name}
                                    </p>
                                </div>
                            </div>
                            <div className="self-center text-center">
                                <p className="text-gray-800 font-normal text-xl">
                                    {product.product.price.toLocaleString('vi-VN')} VND
                                </p>
                            </div>
                            <div className="self-center">
                                <button onClick={() => removeFromCart(product.cart_id)}>
                                    <svg
                                        height="32px"
                                        width="32px"
                                        viewBox="0 0 512 512"
                                        dangerouslySetInnerHTML={{
                                            __html: `
                                            <g>
                                                <path d="M400,113.3h-80v-20c0-16.2-13.1-29.3-29.3-29.3h-69.5C205.1,64,192,77.1,192,93.3v20h-80V128h21.1l23.6,290.7 c0,16.2,13.1,29.3,29.3,29.3h141c16.2,0,29.3-13.1,29.3-29.3L379.6,128H400V113.3z M206.6,93.3c0-8.1,6.6-14.7,14.6-14.7h69.5c8.1,0,14.6,6.6,14.6,14.7v20h-98.7V93.3z M341.6,417.9l0,0.4v0.4c0,8.1-6.6,14.7-14.6,14.7H186c-8.1,0-14.6-6.6-14.6-14.7v-0.4 l0-0.4L147.7,128h217.2L341.6,417.9z"/>
                                                <g>
                                                    <rect height="241" width="14" x="249" y="160"/>
                                                    <polygon points="320,160 305.4,160 294.7,401 309.3,401"/>
                                                    <polygon points="206.5,160 192,160 202.7,401 217.3,401"/>
                                                </g>
                                            </g>
                                        `,
                                        }}
                                    />
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-row self-center gap-1">
                            <button
                                //onClick={() => handleQuantityChange(product.product_id, product.quantity - 1)}
                                className="w-5 h-5 self-center rounded-full border border-gray-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#d1d5db"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M5 12h14" />
                                </svg>
                            </button>
                            <input
                                type="text"
                                readOnly
                                value={product.cart_quantity}
                                className="w-8 h-8 text-center text-gray-900 text-sm outline-none border border-gray-300 rounded-sm"
                            />
                            <button
                                //onClick={() => handleQuantityChange(product.product_id, product.quantity + 1)}
                                className="w-5 h-5 self-center rounded-full border border-gray-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#9ca3af"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M12 5v14M5 12h14" />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex flex-col w-full md:w-1/3 h-fit gap-4 p-4">
                <p className="text-blue-900 text-xl font-extrabold">Hóa đơn</p>
                <div className="flex flex-col p-4 gap-4 text-lg font-semibold shadow-md border rounded-sm">
                    <div className="flex flex-row justify-between">
                        <p className="text-gray-600">Subtotal ({cart.length} sản phẩm)</p>
                        <p className="text-end font-bold">
                            {cart
                                .reduce(
                                    (total: any, product: any) => total + product.product.price * product.cart_quantity,
                                    0,
                                )
                                .toLocaleString('vi-VN')}{' '}
                            VND
                        </p>
                    </div>
                    <hr className="bg-gray-200 h-0.5" />
                    <div className="flex flex-row justify-between">
                        <p className="text-gray-600">Phí vận chuyển</p>
                        <div>
                            <p className="text-end font-bold">35.000 VND</p>
                            <p className="text-gray-600 text-sm font-normal">Nhận hàng vào {formattedDate}</p>
                        </div>
                    </div>
                    <hr className="bg-gray-200 h-0.5" />
                    <div className="flex flex-row justify-between">
                        <p className="text-gray-600">Mã khuyến mãi</p>
                        <a className="text-gray-500 text-base underline" href="#">
                            Add
                        </a>
                    </div>
                    <hr className="bg-gray-200 h-0.5" />
                    <div className="flex flex-row justify-between">
                        <p className="text-gray-600">Total</p>
                        <div>
                            <p className="text-end font-bold">
                                $
                                {cart
                                    .reduce(
                                        (total: any, product: any) =>
                                            total + product.product.price * product.cart_quantity + 35000,
                                        0,
                                    )
                                    .toLocaleString('vi-VN')}{' '}
                                VND
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <PaymentButton />
                        <button
                            onClick={() => (window.location.href = '/')}
                            className="transition-colors text-sm bg-white border border-gray-600 p-2 rounded-sm w-full text-gray-700 text-hover shadow-md"
                        >
                            Xem thêm sản phẩm khác
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cart
