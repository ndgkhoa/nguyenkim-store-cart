'use client'

import React, { useContext } from 'react'
import { PhoneOutlined, ShoppingCartOutlined, UserOutlined, RedoOutlined } from '@ant-design/icons'
import { Badge, Dropdown, Space } from 'antd'
import Link from 'next/link'
import { CartContext } from './CartContext'
import SearchComponent from './SearchForm'
import UserAvatar from './UserAvatar'

interface HeaderProps {
    user: any
}

const Header: React.FC<HeaderProps> = ({ user }) => {
    const cartContext = useContext(CartContext)
    if (!cartContext) {
        throw new Error('CartContext must be used within a CartProvider')
    }

    const { cart } = cartContext
    const cartItemCount = cart.length

    const menuItems = [
        {
            key: '1',
            label: (
                <Link href="/register">
                    <span className="text-base">Đăng ký</span>
                </Link>
            ),
        },
        {
            key: '2',
            label: (
                <Link href="/login">
                    <span className="text-base">Đăng nhập</span>
                </Link>
            ),
        },
    ]

    const menuItemsLoggedIn = [
        {
            key: '1',
            label: (
                <Link href="/logout">
                    <span className="text-base">Thoát</span>
                </Link>
            ),
        },
    ]

    return (
        <header className="bg-[#fe0000] py-2">
            <div className="container mx-auto flex items-center justify-between text-white">
                <Link href={'/'}>
                    <img src="/images/logo.png" alt="Logo" className="h-12 md:h-full" />
                </Link>
                <div className="hidden xl:flex items-center">
                    <SearchComponent />
                    <div className="flex items-center mx-6">
                        <Link href={'/cart'} className="pr-6 flex items-center">
                            <Badge count={cartItemCount} showZero color="orange">
                                <ShoppingCartOutlined style={{ fontSize: '25px', color: 'white' }} />
                            </Badge>
                            <span className="pl-1">Giỏ hàng</span>
                        </Link>
                        <Link href={'/#'} className="pr-6 flex items-center">
                            <RedoOutlined style={{ fontSize: '25px' }} />
                            <span className="pl-1">Đơn hàng</span>
                        </Link>
                        {user ? (
                            <Dropdown menu={{ items: menuItemsLoggedIn }} trigger={['click']} className="pr-4">
                                <a onClick={(e) => e.preventDefault()} className="cursor-pointer">
                                    <UserAvatar />
                                </a>
                            </Dropdown>
                        ) : (
                            <Dropdown menu={{ items: menuItems }} trigger={['click']} className="pr-4">
                                <a onClick={(e) => e.preventDefault()} className="cursor-pointer">
                                    <Space>
                                        <UserOutlined style={{ fontSize: '25px' }} />
                                        Tài khoản
                                    </Space>
                                </a>
                            </Dropdown>
                        )}
                        <Link href={'/#'} className="pr-6 flex items-center">
                            <PhoneOutlined style={{ fontSize: '25px' }} />
                            <div className="pl-1">
                                <div>Gọi mua: 1800.6800</div>
                                <div>(Miễn phí)</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
