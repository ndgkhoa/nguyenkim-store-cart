// components/Footer.tsx
import {
    FacebookOutlined,
    GoogleOutlined,
    InstagramOutlined,
    TwitterOutlined,
    YoutubeOutlined,
} from '@ant-design/icons'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className="footer bg-gray-100 text-sm">
            <div className="container mx-auto">
                <div className="py-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {shippingData.map((item, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <img src={item.icon} alt="Shipping Icon" className="mb-2" />
                                <h2 className="text-lg font-bold">{item.title}</h2>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className=" bg-gray-200 py-10">
                <div className="container mx-auto">
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-1/4">
                            <img src="/images/logo2.png" alt="Footer Logo" className="mb-2" width={'250px'} />
                            <p className="info">
                                Nguyen's Electric - Kênh mua sắm trực tuyến uy tín giá tốt hàng đầu Việt Nam.
                            </p>
                            <ul className="list-none">
                                <li>
                                    <span>Địa chỉ: </span>180 Cao Lỗ, phường 4, quận 8, TP HCM
                                </li>
                                <li>
                                    <span>Số điện thoại: </span>
                                    <a href="#">1800.6890</a>
                                </li>
                                <li>
                                    <span>Email: </span>
                                    <a href="mailto:info@nguyenelectric.com">info@nguyenelectric.com</a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/6">
                            <h3 className="text-xl pb-2">Chính sách</h3>
                            <ul className="list-none">
                                <li>
                                    <Link href="#">Ưu đãi</Link>
                                </li>
                                <li>
                                    <Link href="#">Bảo mật thông tin</Link>
                                </li>
                                <li>
                                    <Link href="#">Bảo mật giao dịch</Link>
                                </li>
                                <li>
                                    <Link href="#">Bảo hành</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/6">
                            <h3 className="text-xl pb-2">Hỗ trợ</h3>
                            <ul className="list-none">
                                <li>
                                    <Link href="#">Hướng dẫn mua hàng</Link>
                                </li>
                                <li>
                                    <Link href="#">Hóa đơn điện tử</Link>
                                </li>
                                <li>
                                    <Link href="#">Câu hỏi hay gặp</Link>
                                </li>
                                <li>
                                    <Link href="#">Dịch vụ lắp đặt</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/3">
                            <p className="text-xl pb-2">Mạng xã hội</p>
                            <ul className="list-none flex space-x-4">
                                <li className="">
                                    <a href={'https://x.com/'} target="_blank" rel="noopener noreferrer">
                                        <TwitterOutlined style={{ fontSize: '30px' }} />
                                    </a>
                                </li>
                                <li className="">
                                    <a href={'https://www.google.com'} target="_blank" rel="noopener noreferrer">
                                        <GoogleOutlined style={{ fontSize: '30px' }} />
                                    </a>
                                </li>
                                <li className="">
                                    <a href={'https://fb.com/'} target="_blank" rel="noopener noreferrer">
                                        <FacebookOutlined style={{ fontSize: '30px' }} />
                                    </a>
                                </li>
                                <li className="">
                                    <a href={'https://www.instagram.com/'} target="_blank" rel="noopener noreferrer">
                                        <InstagramOutlined style={{ fontSize: '30px' }} />
                                    </a>
                                </li>
                                <li className="">
                                    <a href={'https://www.youtube.com/'} target="_blank" rel="noopener noreferrer">
                                        <YoutubeOutlined style={{ fontSize: '30px' }} />
                                    </a>
                                </li>
                            </ul>
                            <div className=" mt-4">
                                <h4 className="pb-2">Đăng ký nhận ưu đãi</h4>
                                <form action="#" method="post" className="flex">
                                    <input
                                        type="email"
                                        placeholder="Nhập email của bạn"
                                        className="p-2 flex-grow rounded-l-md"
                                    />
                                    <button className="btn p-2 bg-gray-600 text-white rounded-r-md">Đăng ký</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-300 py-10">
                <div className="container mx-auto text-center">
                    <p>Copyright © 2008 - 2024 Công ty Cổ phần Thương mại Nguyen's Electric.</p>
                    <p>
                        Giấy chứng nhận đăng ký kinh doanh số 0327074512, cấp ngày 17/04/2010 bởi Sở Kế hoạch và Đầu tư
                        TP. Hồ Chí Minh.
                    </p>
                    <p>Địa chỉ đăng ký trụ sở chính: 180 Cao Lỗ, Phường 4, Quận 8, TP. Hồ Chí Minh</p>
                    <img src="/images/payment.png" alt="Payment Methods" className="mt-4 mx-auto" />
                </div>
            </div>
        </div>
    )
}

export default Footer

const shippingData = [
    {
        icon: '/images/shipping-icon/1.png',
        title: 'Miễn phí giao hàng',
        description: 'Miễn phí đổi trả, giao hàng nhanh chóng.',
    },
    {
        icon: '/images/shipping-icon/2.png',
        title: 'Thanh toán an toàn',
        description: 'Thanh toán bằng mọi phương thức.',
    },
    {
        icon: '/images/shipping-icon/3.png',
        title: 'Shop uy tín',
        description: 'Bảo mật mọi thông tin khách hàng.',
    },
    {
        icon: '/images/shipping-icon/4.png',
        title: 'Hỗ trợ 24/7',
        description: 'Hãy liên hệ chúng tôi khi bạn có câu hỏi.',
    },
]
