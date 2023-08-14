import { useState, useEffect } from 'react'
import axios from 'axios'
import Product from '../Component/Product';
import Categories from '../Component/Categories/index'

function ProductController() {

    const [id, setId] = useState(1);

    const [posts, setPosts] = useState([]);

    // const [carts, setCarts] = useState(JSON.parse(localStorage.getItem("carts")) ?? [])

    const handleAddToCart = (addItem) => {
        // setCarts((prev) => [
        //     ...prev,
        //     addItem
        // ])
        // localStorage.setItem("carts", JSON.stringify(carts));
        alert(addItem.id);
    }

    const handleChangeCate = (data) => {
        setId(data)
    }

    useEffect(() => {
        axios.
            get(`http://localhost:3000/category_products/${id}/products?_embed=products`)
            .then(res => {
                setPosts(res.data)
            })

    }, [id])

    return (
        <div>
            <Categories
                onChangeCate={handleChangeCate}
            />
            <Product
                courses={posts}
                onAddToCart={handleAddToCart}
            />
        </div>
    )

}

export default ProductController