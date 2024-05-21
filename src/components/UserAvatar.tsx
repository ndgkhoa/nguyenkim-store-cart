import { Space, Avatar } from 'antd'
import { useEffect, useState } from 'react'

const UserAvatar = () => {
    const [randomNumber, setRandomNumber] = useState<number>(0)

    useEffect(() => {
        const randomNumber = Math.floor(Math.random() * 100) + 1
        setRandomNumber(randomNumber)
    }, [])

    return (
        <Space>
            {randomNumber && (
                <div className="p-1 bg-white rounded-full">
                    <Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${randomNumber}`} />
                </div>
            )}
        </Space>
    )
}

export default UserAvatar
