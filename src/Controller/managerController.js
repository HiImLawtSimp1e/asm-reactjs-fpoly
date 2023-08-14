import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

import Manager from '../Component/Manager'
import PostProductForm from '../Component/Manager/PostProductForm'

function ManagerController() {

    const [posts, setPosts] = useState([]);
    const [rerd, setRerd] = useState(true);

    const handleDelete = (course) => {
        axios
            .delete
            (`http://localhost:3000/products/${course.id}`)
            .then(
                alert(` Have been removed ${course.name}`)
            )
            .then(
                setRerd(!rerd)
            )
            .catch((error) =>
                (alert(error))
            )
    }

    const handleUpdate = (id, course) => {
        axios
            .put(`http://localhost:3000/products/${id}`, {
                id: id,
                ...course
            })
            .then(
                alert(` Have been update ${course.name}`)
            )
            .then(
                setRerd(!rerd)
            )
            .catch((error) =>
                (alert(error))
            )
    };

    const handleCreate = (course) => {
        axios
            .post
            (`http://localhost:3000/products`, {
                id: Math.random(),
                ...course
            })
            .then(
                alert(` Have been add ${course.name}`)
            )
            .then(
                setRerd(!rerd)
            )
            .catch((error) =>
                (alert(error))
            )
    }

    useEffect(() => {
        axios
            .get(`http://localhost:3000/products`)
            .then(res => {
                setPosts(res.data)
            })
    }, [rerd])

    return (
        <div>
            <PostProductForm
                onCreate={handleCreate}
            />
            <Manager
                courses={posts}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
            />
        </div>
    )
}

export default ManagerController;