import React, { useState } from 'react'
import { Input } from 'antd'
import { useRouter } from 'next/navigation'

const { Search } = Input
const SearchComponent = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const router = useRouter()

    const handleSearch = (value: string) => {
        setSearchTerm(value)
        if (value.trim()) {
            router.push(`/search?query=${value}`)
        }
    }

    return (
        <div className="mx-4">
            <Search placeholder="Bạn cần tìm gì hôm nay" allowClear className="w-96" onSearch={handleSearch} />
        </div>
    )
}
export default SearchComponent
