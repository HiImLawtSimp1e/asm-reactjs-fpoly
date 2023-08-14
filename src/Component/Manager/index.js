import { useState, memo } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import PutProductForm from './PutProductForm'

function Manager({ courses, onDelete, onUpdate }) {
    const heading = ["#", "Name", "Price", "Category"];

    const [btn, setBtn] = useState(false);

    const changeBtn = () => {
        setBtn(!btn)
    }

    const [data, setData] = useState();


    return (
        < div >
            {
                btn &&
                <PutProductForm
                    data={data}
                    onUpdate={onUpdate}
                    onChangeBtn={changeBtn}
                />
            }
            <Table table striped>
                <thead>
                    <tr>
                        {heading.map(head => <th>{head}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course, index) => {
                        const detail = `/detail/${course.id}`;
                        return (
                            <tr key={course.id}>
                                <td> {index + 1} </td>
                                <td> {course.name} </td>
                                <td> {course.price}đ </td>
                                <td> <p> {
                                    course.category_productId === 1 ? "Coffe" :
                                        course.category_productId === 2 ? "Tea" :
                                            "Sinh Tố"} </p>
                                </td>
                                <td>
                                    <Link to={detail}>
                                        <button
                                            className="btn btn-secondary"
                                        >
                                            Detail
                                        </button>
                                    </Link>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => {
                                            changeBtn();
                                            setData(course);
                                        }}>
                                        Update
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => onDelete(course)}>
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div >
    );
}

export default Manager;