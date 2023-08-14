import CloudImage from '../Image';
import style from './services.module.scss';

function Services() {
    return (
        <div className="container-fluid pt-5">
            <div className="container">
                <div className="section-title">
                    <h4 className="text-primary text-uppercase">Our Services</h4>
                    <h1 className="display-4">Dịch vụ của chúng mình</h1>
                </div>
                <div className="row">
                    <div className="col-lg-6 mb-5">
                        <div className="row align-items-center">
                            <div className="col-sm-5">
                                <CloudImage publicId="qcy3x7grnlwybyrn7kpy" className={style.servicesCdn} />
                            </div>
                            <div className="col-sm-7">
                                <h4>Âm nhạc & Cảm xúc</h4>
                                <p className="m-0"> Tại An, thứ gắn kết giữa mọi người chính là đam mê âm nhạc và cảm xúc chúng ta mang lại cho nhau,
                                    cùng cố gắng và cùng hoàn thiện</p>
                                <p className="m-0"> Tối thứ 5 & chủ nhật hàng tuần hãy đến với An, không chỉ để nghe nhạc tới An các bạn hãy
                                    lên hát cùng chúng mình nữa nhé.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-5">
                        <div className="row align-items-center">
                            <div className="col-sm-5">
                                <CloudImage publicId="qcy3x7grnlwybyrn7kpy" className={style.servicesCdn} />
                            </div>
                            <div className="col-sm-7">
                                <h4>Cà phê sinh viên</h4>
                                <p className="mt-3">Với mức giá rất phải chăng, rất phù hợp với các bạn sinh viên. Cà phê nâu, bạc xỉu, cà phê nâu lắc là những thức
                                    uống từ cà phê rất được ưa chuộng hiện nay. Chỉ với 25.000đ là bạn đã có thể thưởng thức những món ngon ở đây rồi nhé</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-5">
                        <div className="row align-items-center">
                            <div className="col-sm-5">
                                <CloudImage publicId="bzmqbfdfz18magdcdc7u" className={style.servicesCdn} />
                            </div>
                            <div className="col-sm-7">
                                <h4>Không gian học tập</h4>
                                <p className="m-0"> An - trong an yên, tĩnh lặng luôn mang đến cho các bạn khi đến đây những phút giây thư thái, nhẹ nhàng,
                                    một cảm giác bình an trong tâm</p>
                                <p>Trừ những đêm nhạc vào thứ 5 vào chủ nhật hàng tuần ra nếu bạn cần một không gian yên tĩnh để ngồi học bài, làm việc,
                                    họp nhóm thì hãy nhớ tới An nha</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-5">
                        <div className="row align-items-center">
                            <div className="col-sm-5">
                                <CloudImage publicId="a8jwourqg8qohpcxciwu" className={style.servicesCdn} />
                            </div>
                            <div className="col-sm-7">
                                <h4>Off team & Team building</h4>
                                <p className="m-0">Một địa điểm hoàn hảo để off-team, team-building dành cho các bạn sinh viên</p>
                                <p className="text-secondary m-0">*Cho thuê không gian riêng từ 10 - 40 người với mức giá sinh viên.</p>
                                <p className="text-secondary m-0">*Miễn phí địa điểm, loa, mic, máy chiếu,...</p>
                                <p className="text-secondary m-0">*Tùy ý trang trí sắp xếp không gian theo chương trình không bị phụ thu thêm phí</p>
                                <p className="text-secondary m-0">*Được mang đồ ngoài vào</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Services