function Contact() {

    return (
        <div className="container-fluid pt-5">
            <div className="container">
                <div className="section-title">
                    <h4 className="text-primary text-uppercase">Contact Us</h4>
                    <h1 className="display-4">Tìm chúng mình ở đây nha</h1>
                </div>
                <div className="row px-3 pb-2">
                    <div className="col-sm-4 text-center mb-3">
                        <h4 className="font-weight-bold">Địa Chỉ</h4>
                        <p>329 Trần Đại Nghĩa, Trương Định, Hai Bà Trưng</p>
                    </div>
                    <div className="col-sm-4 text-center mb-3">
                        <h4 className="font-weight-bold">Điện thoại</h4>
                        <p>+84 344 917 301</p>
                    </div>
                    <div className="col-sm-4 text-center mb-3">
                        <h4 className="font-weight-bold">Email</h4>
                        <p>ancoffe219@gmail.com</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 pb-5">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.9462651166455!2d105.84311331437769!3d20.994790994314222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac6e6aee4175%3A0xe5cbf87f18038a36!2zMzI5IFAuIFRy4bqnbiDEkOG6oWkgTmdoxKlhLCBUcsawxqFuZyDEkOG7i25oLCBIYWkgQsOgIFRyxrBuZywgSMOgIE7hu5lpLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1669618475158!5m2!1sen!2s/" height="450" width="450" ></iframe>
                    </div>
                    <div className="col-lg-6 pb-5">
                        <div className="contact-form">
                            <div className="display-6 mb-4">Gửi mail cho chúng mình tại đây</div>
                            <div>
                                <div className="control-group">
                                    <input type="text" className="form-control bg-transparent p-2" id="name" placeholder=" Your Name" />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <input type="email" className="form-control bg-transparent p-4" id="email" placeholder="Your Email" />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <input type="text" className="form-control bg-transparent p-4" id="title" placeholder="Title" />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <textarea className="form-control bg-transparent py-3 px-4" rows="5" id="message" placeholder="Message" />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div>
                                    <button className="btn btn-primary font-weight-bold py-3 px-5">
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Contact;
