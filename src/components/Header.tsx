'use client'
import { PhoneOutlined, ShoppingCartOutlined, UserOutlined, BoxPlotOutlined } from '@ant-design/icons'
import { Input } from 'antd'

const { Search } = Input
import Link from 'next/link'
import React from 'react'

const Header: React.FC = () => {
    return (
        <header className="bg-[#fe0000] py-2">
            <div className="container mx-auto flex items-center justify-between text-white">
                <div className="">
                    <img src="/images/logo.png" alt="" />
                </div>
                <form action={'#'} className=" mx-4">
                    <Search placeholder="Bạn cần tìm gì hôm nay" allowClear className="w-96" />
                </form>
                <div className="flex items-center">
                    <Link href={'/#'} className="pr-6 flex items-center">
                        <ShoppingCartOutlined style={{ fontSize: '25px' }} />
                        <span className="pl-1">Giỏ hàng</span>
                    </Link>
                    <Link href={'/#'} className="pr-6 flex items-center">
                        <BoxPlotOutlined style={{ fontSize: '25px' }} />
                        <span className="pl-1">Đơn hàng</span>
                    </Link>
                    <Link href={'/#'} className="pr-6 flex items-center">
                        <UserOutlined style={{ fontSize: '25px' }} />
                        <span className="pl-1">Tài khoản</span>
                    </Link>
                    <Link href={'/#'} className="pr-6 flex items-center">
                        <PhoneOutlined style={{ fontSize: '25px' }} />
                        <div className="pl-1">
                            <div>Gọi mua: 1800.6800</div>
                            <div>(Miễn phí)</div>
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header
