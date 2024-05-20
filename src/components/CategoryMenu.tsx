import React from 'react'

const VerticalCategoryMenu: React.FC<{ categoryList: any[] }> = ({ categoryList }) => {
    return (
        <div className="w-[250px]">
            <div className="border-2">
                <h1 className="text-xl font-semibold mb-4  bg-gray-300 p-2">Danh mục sản phẩm</h1>
                <ul>
                    {categoryList.map((category) => (
                        <li key={category.category_id}>
                            <a
                                href="#"
                                className="block py-1 px-4 hover:text-blue-500 hover:bg-slate-300 transition-colors duration-200"
                            >
                                {category.category_name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default VerticalCategoryMenu
