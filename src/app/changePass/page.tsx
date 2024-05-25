'use client'
import { useState } from 'react'
import { toast } from 'react-toastify'

const ChangePass = () => {
    const [oldPassword, setOldPassword] = useState('')
    const [password, setPassword] = useState('')
    const [c_password, setC_Password] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target
        if (id === 'o_password') setOldPassword(value)
        if (id === 'password') setPassword(value)
        if (id === 'c_password') setC_Password(value)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (password !== c_password) {
            toast.error('Mật khẩu xác nhận không trùng nhau')
            return
        }

        try {
            const token = localStorage.getItem('token')
            const response = await fetch('https://nguyenkim-be.onrender.com/v2/customer/changePassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json, text/plain, */*',
                },
                body: JSON.stringify({ password, oldPassword }),
            })

            const result = await response.json()
            if (response.status === 200) {
                toast.success(result.message)
            } else {
                toast.error(result.message)
            }
        } catch (error) {
            toast.error('Có lỗi xảy ra trong lúc đổi mật khẩu')
        }
    }

    return (
        <div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
            <div className="w-full sm:max-w-md p-5 mx-auto">
                <h2 className="mb-12 text-center text-5xl font-extrabold">Change password</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-1" htmlFor="o_password">
                            Old Password
                        </label>
                        <input
                            id="o_password"
                            type="password"
                            name="o_password"
                            value={oldPassword}
                            onChange={handleChange}
                            className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
                            aria-label="Old Password"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1" htmlFor="password">
                            New Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                            className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
                            aria-label="New Password"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1" htmlFor="c_password">
                            Confirm Password
                        </label>
                        <input
                            id="c_password"
                            type="password"
                            name="c_password"
                            value={c_password}
                            onChange={handleChange}
                            className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
                            aria-label="Confirm Password"
                        />
                    </div>
                    <div className="mb-6 text-center">
                        <button
                            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ChangePass
