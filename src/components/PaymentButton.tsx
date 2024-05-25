import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

interface props {
    totalPrice: number
}

const PaymentButton: React.FC<props> = ({ totalPrice }) => {
    const router = useRouter()
    const [isVisible, setIsVisible] = useState(false)
    const [isFadingOut, setIsFadingOut] = useState(false)
    const [orderAddress, setOrderAddress] = useState('')
    const [paymentMethod, setPaymentMethod] = useState('')

    const openModal = () => {
        setIsVisible(true)
    }

    const closeModal = () => {
        setIsFadingOut(true)
        setTimeout(() => {
            setIsVisible(false)
            setIsFadingOut(false)
        }, 500)
    }

    const handlePayment = async () => {
        try {
            const token = localStorage.getItem('token')
            const response = await fetch('https://nguyenkim-be.onrender.com/v2/cart/payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json, text/plain, */*',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    total_price: totalPrice,
                    order_address: orderAddress,
                    payment_method: paymentMethod,
                }),
            })
            const data = await response.json()
            if (response.ok) {
                toast.success(`${data.message}`)
                closeModal()
                router.refresh()
            } else {
                toast.error(`${data.message}`)
            }
        } catch (error) {
            toast.error('Payment Error!')
        }
    }

    return (
        <div>
            <button
                onClick={openModal}
                className=" transition-colors text-sm bg-blue-600 hover:bg-blue-700 p-2 rounded-sm w-[200px] text-white text-hover shadow-md"
            >
                Thanh toán
            </button>
            {isVisible && (
                <div
                    className={`fixed w-full h-full inset-0 z-50 flex justify-center items-center animated ${
                        isFadingOut ? 'fadeOut' : 'fadeIn'
                    }`}
                    style={{ background: 'rgba(0,0,0,.7)' }}
                >
                    <div className="border border-teal-500 shadow-lg bg-white w-11/12 md:max-w-md mx-auto rounded  z-50 overflow-y-auto">
                        <div className="py-4 text-left px-6">
                            <div className="flex justify-between items-center pb-3">
                                <p className="text-2xl font-bold">Thông tin thanh toán</p>
                                <div className="cursor-pointer z-50" onClick={closeModal}>
                                    <svg
                                        className="fill-current text-black"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                    >
                                        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="my-5">
                                <div className="flex flex-col gap-4">
                                    <div>
                                        <label
                                            className="block text-gray-700 text-sm font-bold mb-2"
                                            htmlFor="totalPrice"
                                        >
                                            Tổng giá trị đơn hàng
                                        </label>
                                        <input
                                            id="totalPrice"
                                            type="text"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            value={totalPrice}
                                        />
                                    </div>
                                    <div>
                                        <label
                                            className="block text-gray-700 text-sm font-bold mb-2"
                                            htmlFor="orderAddress"
                                        >
                                            Địa chỉ nhận hàng
                                        </label>
                                        <input
                                            id="orderAddress"
                                            type="text"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            value={orderAddress}
                                            onChange={(e) => setOrderAddress(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label
                                            className="block text-gray-700 text-sm font-bold mb-2"
                                            htmlFor="paymentMethod"
                                        >
                                            Phương thức thanh toán
                                        </label>
                                        <select
                                            id="paymentMethod"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            value={paymentMethod}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                        >
                                            <option value="cash">Thanh toán tiền mặt</option>
                                            <option value="bankTransfer">Chuyển khoản</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end pt-2">
                                <button
                                    className="focus:outline-none px-4 bg-gray-400 p-3 rounded-lg text-black hover:bg-gray-300"
                                    onClick={closeModal}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="focus:outline-none px-4 bg-teal-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400"
                                    onClick={handlePayment}
                                >
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <style jsx>{`
                .animated {
                    -webkit-animation-duration: 1s;
                    animation-duration: 1s;
                    -webkit-animation-fill-mode: both;
                    animation-fill-mode: both;
                }

                .fadeIn {
                    -webkit-animation-name: fadeIn;
                    animation-name: fadeIn;
                }

                .fadeOut {
                    -webkit-animation-name: fadeOut;
                    animation-name: fadeOut;
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes fadeOut {
                    from {
                        opacity: 1;
                    }
                    to {
                        opacity: 0;
                    }
                }
            `}</style>
        </div>
    )
}

export default PaymentButton
