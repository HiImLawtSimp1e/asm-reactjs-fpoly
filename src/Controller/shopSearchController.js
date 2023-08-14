import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";

import ShopS from '../Component/Search'

function ShopSearchController() {

    const { param } = useParams();

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

    useEffect(() => {
        axios.
            get(`http://localhost:3000/products?q=${param}`)
            .then(res => {
                setPosts(res.data)
            })

    }, [param])

    return (
        <ShopS
            courses={posts}
            onAddToCart={handleAddToCart}
        />
    )
}

export default ShopSearchController