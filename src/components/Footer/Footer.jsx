
const Footer = () => {
    return (
        <footer className="w-full space-y-5 bg-dark-blue">
            <div className="max-w-7xl px-5 mx-auto text-white grid grid-cols-3 gap-5 py-5">
                <div>
                    <p>Hotline: 0947 116 226</p>
                    <p>Email: Info@Hello Japan.edu.vn</p>
                    <p>Website: Hello Japan.edu.vn</p>
                    <p>Thời gian làm việc: Thứ 2 - Thứ 6: 8h00 - 17h30</p>
                </div>
                <div>
                    <p>CÔNG TY THHH TƯ VẤN VÀ DỊCH VỤ VIỆT NHẬT HELLO JAPAN</p>
                    <p>Địa chỉ: Thu Duc, TP. Hồ Chí Minh.</p>
                    <p>Website: hellojapan.edu.vn</p>
                    <p>Thời gian làm việc: Thứ 2 - Thứ 6: 8h00 - 17h30</p>
                </div>
                <div className="space-y-5">
                    <h4 className="text-center font-medium ">Hotline: 0947116226</h4>
                    <img
                        className="w-32 mx-auto block"
                        src='https://yoko.edu.vn/wp-content/uploads/2022/03/logo-da-thong-bao-bo-cong-thuong-mau-xanh.png'
                    />
                </div>

            </div>
            <h5 className="text-center py-1 text-white bg-slate-900">All rights reserved. Powered by Hello Japan</h5>

        </footer>
    )
}

export default Footer