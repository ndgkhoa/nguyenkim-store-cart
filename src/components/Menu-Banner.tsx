'use client'
import CategoryMenu from '@/components/CategoryMenu'
import SlideCarousel from '@/components/Carousel'
import { useEffect, useState } from 'react'

const ApiURL = 'https://nguyenkim-be.onrender.com/v1/category'

const MenuAndBanner = () => {
    const [categoryList, setCategoryList] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(ApiURL)
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                const data = await response.json()
                if (data.status === 200) {
                    setCategoryList(data.data)
                } else {
                    throw new Error(data.message)
                }
            } catch (error) {
                console.error(error)
            }
        }

        fetchData()
    }, [])
    return (
        <div className="container mx-auto">
            <div className="flex">
                <div className="w-1/4">
                    <CategoryMenu categoryList={categoryList} />
                </div>
                <div className="w-3/4">
                    <SlideCarousel />
                </div>
            </div>
        </div>
    )
}
export default MenuAndBanner
