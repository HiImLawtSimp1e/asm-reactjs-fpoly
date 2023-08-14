import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Details from "../Component/Details";

function DetailsControler() {

    const { id } = useParams();

    const [posts, setPosts] = useState({});

    useEffect(() => {
        axios
            .get(`http://localhost:3000/products/${id}`)
            .then(res => {
                setPosts(res.data)
            })
    }, []);

    return (
        <Details
            courses={posts}
        />
    )
}
export default DetailsControler;