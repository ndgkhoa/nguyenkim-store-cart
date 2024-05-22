'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CartProvider } from '@/components/CartContext'
import React, { useState, useEffect } from 'react'
import { metadata } from './metadata'

const inter = Inter({ subsets: ['latin'] })

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<any>(null)
    const [data, setData] = useState<string | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const storedToken = await localStorage.getItem('token')
                setData(storedToken)
                if (typeof storedToken === 'string') {
                    await fetchUserInfo(storedToken)
                }
            } catch (error) {}
        }
        fetchData()
    }, [])

    const fetchUserInfo = async (token: string) => {
        try {
            const response = await fetch('https://nguyenkim-be.onrender.com/v2/customer/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json, text/plain, */*',
                },
            })

            if (!response || !response.ok) {
                throw new Error('Failed to fetch user info')
            }

            const userData = await response.json()
            setUser(userData.data)
        } catch (error) {
            console.error('Fetch user info error:', error)
        }
    }
    if (typeof data === 'string') {
        console.log(data)
    }
    console.log(user)

    const title = typeof metadata.title === 'string' ? metadata.title : ''

    return (
        <html lang="en" suppressHydrationWarning={true}>
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{title}</title>
                <meta name="description" content={metadata.description || ''} />
            </head>
            <body className={inter.className}>
                <CartProvider>
                    <Header user={user} />
                    {children}
                    <Footer />
                </CartProvider>
            </body>
        </html>
    )
}

export default RootLayout
