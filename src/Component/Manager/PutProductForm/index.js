import { useState, memo } from 'react'
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

function PutProductForm({ data, onUpdate, onChangeBtn }) {

    const [name, setName] = useState(data.name);
    const [price, setPrice] = useState(data.price);

    const [checked, setChecked] = useState(data.category_productId);
    let img = data.title_cdn;

    const handleSubmit = () => {
        onUpdate(data.id, {
            name: name,
            title_cdn: img,
            price: price,
            category_productId: checked
        });
        onChangeBtn();

    }
    return (
        <div>
            <div>Update Form</div>
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
            <button className="btn btn-success" onClick={handleSubmit}>
                Update
            </button>
        </div>
    )

}
export default PutProductForm;
