import { Table } from 'react-bootstrap'

function Details({ courses }) {

    return (
        <>
            <Table table="true" striped>
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Price
                        </th>
                        <th>
                            Category
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td> Name: <span className="text-primary"> {courses.name} </span>  </td>
                        <td> Price: <span className="text-primary"> {courses.price}đ </span>  </td>
                        <td> Category: <span className="text-primary"> {
                            courses.category_productId === 1 ? "Coffe" :
                                courses.category_productId === 2 ? "Tea" :
                                    "Sinh Tố"} </span>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}
export default Details;