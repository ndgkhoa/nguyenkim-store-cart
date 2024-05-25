'use client'

import { PhoneOutlined, ShoppingCartOutlined, UserOutlined, RedoOutlined } from '@ant-design/icons'
import { Badge, Dropdown, Space } from 'antd'
import Link from 'next/link'
import SearchComponent from './SearchForm'
import UserAvatar from './UserAvatar'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const Header = () => {
    const [token, setToken] = useState<string | null>(null)
    const router = useRouter()
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setToken(localStorage.getItem('token'))
        }
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('token')
        toast.success('Bạn đã đăng xuất tài khoản')
        setToken(null)
        //router.refresh()
    }

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
                <span className="text-base cursor-pointer" onClick={handleLogout}>
                    Thoát
                </span>
            ),
        },
        {
            key: '2',
            label: (
                <Link href="/changePass">
                    <span className="text-base">Thay đổi mật khẩu</span>
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
                            <Badge showZero color="orange">
                                <ShoppingCartOutlined style={{ fontSize: '25px', color: 'white' }} />
                            </Badge>
                            <span className="pl-1">Giỏ hàng</span>
                        </Link>
                        <Link href={'/#'} className="pr-6 flex items-center">
                            <RedoOutlined style={{ fontSize: '25px' }} />
                            <span className="pl-1">Đơn hàng</span>
                        </Link>
                        {token ? (
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
