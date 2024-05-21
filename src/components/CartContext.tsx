'use client'
import React, { createContext, useState, useContext } from 'react'

export const CartContext = createContext<any>(undefined)

export const CartProvider = ({ children }: any) => {
    const [cart, setCart] = useState([])

    const addToCart = (product: any) => {
        setCart((prevCart: any) => {
            const existingProduct = prevCart.find((item: any) => item.product_id === product.product_id)
            if (existingProduct) {
                return prevCart.map((item: any) =>
                    item.product_id === product.product_id ? { ...item, quantity: item.quantity + 1 } : item,
                )
            } else {
                return [...prevCart, { ...product, quantity: 1 }]
            }
        })
    }

    const removeFromCart = (productId: any) => {
        setCart((prevCart) => prevCart.filter((item: any) => item.product_id !== productId))
    }

    const updateQuantity = (productId: any, quantity: any) => {
        setCart((prevCart: any) =>
            prevCart.map((item: any) =>
                item.product_id === productId ? { ...item, quantity: Math.max(1, quantity) } : item,
            ),
        )
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    )
}
