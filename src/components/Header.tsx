'use client'
import { PhoneOutlined, ShoppingCartOutlined, UserOutlined, RedoOutlined } from '@ant-design/icons'
import { Input, Badge } from 'antd'
import { Dropdown, Menu, Space } from 'antd'

const { Search } = Input
import Link from 'next/link'
import React, { useState } from 'react'

const menu = (
    <Menu>
        <Menu.Item key="1">
            <Link href="/register">Đăng ký</Link>
        </Menu.Item>
        <Menu.Item key="2">
            <Link href="/login">Đăng nhập</Link>
        </Menu.Item>
    </Menu>
)

const Header: React.FC = () => {
    const [user, setUser] = useState<any>('khoa')
    return (
        <header className="bg-[#fe0000] py-2">
            <div className="container mx-auto flex items-center justify-between text-white">
                <Link href={'/'}>
                    <img src="/images/logo.png" alt="" />
                </Link>
                <form action={'#'} className=" mx-4">
                    <Search placeholder="Bạn cần tìm gì hôm nay" allowClear className="w-96" />
                </form>
                <div className="flex items-center">
                    <Link href={'/cart'} className="pr-6 flex items-center">
                        <Badge count={2} showZero color="orange">
                            <ShoppingCartOutlined style={{ fontSize: '25px', color: 'white' }} />
                        </Badge>
                        <span className="pl-1">Giỏ hàng</span>
                    </Link>
                    <Link href={'/#'} className="pr-6 flex items-center">
                        <RedoOutlined style={{ fontSize: '25px' }} />
                        <span className="pl-1">Đơn hàng</span>
                    </Link>
                    {user ? (
                        <Dropdown
                            trigger={['click']}
                            className="pr-4"
                            overlay={
                                <Menu>
                                    <Menu.Item key="1">
                                        <Link href="/register">Log out</Link>
                                    </Menu.Item>
                                </Menu>
                            }
                        >
                            <a onClick={(e) => e.preventDefault()} className="cursor-pointer">
                                <Space>
                                    <UserOutlined style={{ fontSize: '25px' }} />
                                    {user}
                                </Space>
                            </a>
                        </Dropdown>
                    ) : (
                        <Dropdown
                            trigger={['click']}
                            className="pr-4"
                            overlay={
                                <Menu>
                                    <Menu.Item key="1">
                                        <Link href="/register">Đăng ký</Link>
                                    </Menu.Item>
                                    <Menu.Item key="2">
                                        <Link href="/login">Đăng nhập</Link>
                                    </Menu.Item>
                                </Menu>
                            }
                        >
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
        </header>
    )
}

export default Header
