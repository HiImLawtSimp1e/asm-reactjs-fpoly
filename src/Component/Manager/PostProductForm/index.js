import { useState } from 'react'
import axios from 'axios'

const courses = [
    {
        id: 1,
        name: "Coffe"
    },
    {
        id: 2,
        name: "Tea"
    },
    {
        id: 3,
        name: "Sinh tố"
    }
]

function PostProductForm({ onCreate }) {

    const [name, setName] = useState('');
    const [price, setPrice] = useState();

    let img = "fewdwqedqwe_an7037"

    const [checked, setChecked] = useState(1);

    const [imageSelected, setImageSelected] = useState("");


    const handleSubmit = () => {
        onCreate({
            name: name,
            title_cdn: img,
            price: price,
            category_productId: checked
        })
        setName('');
        setPrice('');

    }

    const uploadImage = () => {
        const formData = new FormData();
        formData.append("file", imageSelected);
        formData.append("upload_preset", "uwxinjyn");

        axios
            .post
            ("https://api.cloudinary.com/v1_1/dehv1exqh/image/upload", formData)
            .then((res) => {
                img = res.data.public_id
                alert("Have been posted, public_id = " + img)
            })
            .catch((err) => alert(err));
    }


    return (
        <div>
            <label>Name:</label>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <label>Price:</label>
            <input value={price} onChange={(e) => setPrice(e.target.value)} />
            <div className="form-check form-check-inline">
                {
                    courses.map(course => (
                        <div className="form-check form-check-inline" key={course.id}>
                            <input type="radio"
                                checked={checked === course.id}
                                onChange={() => setChecked(course.id)} />
                            {course.name}
                        </div>
                    ))
                }
            </div>
            <button className="btn btn-outline-success" onClick={handleSubmit}>
                Add
            </button>
            <div>
                <div>
                    <input type="file" onChange={(e) => setImageSelected(e.target.files[0])} />
                </div>
                <button className="btn btn-outline-success" onClick={uploadImage} >Upload Image</button>
            </div>
        </div>
    )

}

export default PostProductForm;
