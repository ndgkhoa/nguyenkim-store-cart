'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import React, { useState, useEffect } from 'react'
import { metadata } from './metadata'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const inter = Inter({ subsets: ['latin'] })

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<any>(null)

    useEffect(() => {
        fetchUserInfo()
    }, [])

    const fetchUserInfo = async () => {
        try {
            const token = localStorage.getItem('token')
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
                <Header user={user} setUser={setUser} />
                {children}
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
                <Footer />
            </body>
        </html>
    )
}

export default RootLayout
