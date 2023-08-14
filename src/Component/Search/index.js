import 'bootstrap/dist/css/bootstrap.min.css'
import CloudImage from '../Image';
import style from './product.module.scss'


function Product({ courses, onAddToCart }) {

    return (
        <div className="container-fluid pt-4 px-4">
            <div className="row">
                {courses.map(item => (
                    <div key={item.id} className="border border-light text-center p-4 col-lg-3 col-md-4 col-sm-6">
                        <div className="rounded-lg">
                            <CloudImage publicId={item.title_cdn} className={style.productCdn} />
                        </div>
                        <div className="text-center">
                            <h3 key={item.id}>  {item.name}  </h3>
                            <p> {item.price} đ </p>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-primary" onClick={() => onAddToCart(item)}>
                                Buy
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}
export default Product;
