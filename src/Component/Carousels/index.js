import Carousel from 'react-bootstrap/Carousel';
import CloudImage from '../Image'

function Carousels() {
    return (
        <Carousel>
            <Carousel.Item>
                <CloudImage publicId="rjtjyskgoopa5gmigchn" className="d-block w-100" />
                <Carousel.Caption>
                    <h3 className="text-uppercase shadow-sm">AN COFFE</h3>
                    <p className="text-uppercase shadow-sm">Keep calm and carry on</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <CloudImage publicId="elc11kx6kjco0yao1sze" className="d-block w-100" />
                <Carousel.Caption>
                    <h3 className="text-uppercase shadow-sm">AN COFFE</h3>
                    <p className="text-uppercase shadow-sm">Âm nhạc & Cảm xúc</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <CloudImage publicId="carousel-3_kxtrqq" className="d-block w-100" />
                <Carousel.Caption>
                    <h3 className="text-uppercase shadow-sm">AN COFFE</h3>
                    <p className="text-uppercase shadow-sm">Off team & Team building</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <CloudImage publicId="carousel-4_n34hkm" className="d-block w-100" />
                <Carousel.Caption>
                    <h3 className="text-uppercase shadow-sm">AN COFFE</h3>
                    <p className="text-uppercase shadow-sm">Không gian học tập</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carousels;