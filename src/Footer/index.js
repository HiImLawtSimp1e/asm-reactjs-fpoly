function Footer() {
    return (
        <div className="bg-dark container-fluid footer text-white mt-4 pt-4 px-0">
            <div className="row mx-0 pt-4 px-sm-3 px-lg-5 mt-4">
                <div className="col-lg-3 col-md-6 mb-5">
                    <h4 className="text-white text-uppercase mb-4">An Coffe</h4>
                    <p><i className="fa fa-map-marker-alt mr-2"></i>329, Trần Đại Nghĩa, Hai Bà Trưng</p>
                    <p><i className="fa fa-phone-alt mr-2"></i>Phone: +84 344 917 301</p>
                    <p className="m-0"><i className="fa fa-envelope mr-2"></i>Email: ancoffe219@gmail.com</p>
                </div>
                <div className="col-lg-3 col-md-6 mb-5">
                    <h4 className="text-white text-uppercase mb-4">Follow Us</h4>
                    <p>Theo dõi chúng tôi tại</p>
                    <div className="justify-content-start">
                        <div className="px-1 mb-2"> <a className="text-white text-uppercase text-decoration-none" href="">facebook</a></div>
                        <div className="px-1 mb-2"> <a className="text-white text-uppercase text-decoration-none" href="">youtube</a> </div>
                        <div className="px-1 mb-2"> <a className="text-white text-uppercase text-decoration-none" href="">instagram</a> </div>

                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div>
                        <h4 className="text-white text-uppercase mb-4">Giờ Mở cửa</h4>
                        <div>
                            <h6 className="text-white text-uppercase">Thứ hai - Chủ nhật</h6>
                            <p>7:00 AM - 10:30 PM</p>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-white text-uppercase mb-4">Open Mic & Music</h4>
                        <div>
                            <h6 className="text-white text-uppercase">Thứ năm & Chủ nhật </h6>
                            <p>8:30 PM - 10:30 PM</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white text-uppercase mb-4">Fan Page</h4>
                    <div className="d-flex justify-content-start">
                        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fancoffee219&tabs&width=300&height=300&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="300" height="300"></iframe>
                    </div>
                </div>
            </div>
            <div className="text-white border-top mt-1 py-4 px-sm-3 px-md-5">
                <div className="text-white" style={{ fontSize: "0.8rem" }}>
                    <div> An Coffe.Mã số DN: 0312867172 do sở kế hoạch và đầu tư tp. HN cấp ngày 23/07/2019.</div>
                    <div> Người đại diện: NGUYỄN HUYỀN THU    Địa chỉ: 329 Trần Đại Nghĩa, Trương Định, Hai Bà Trưng, Hà Nội </div>
                    <div>  Điện thoại: (034) 4917 301   Email: ancoffe219@gmail.com </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;