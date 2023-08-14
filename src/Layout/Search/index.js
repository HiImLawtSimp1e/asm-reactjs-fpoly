import { useState } from 'react'
import { Link } from 'react-router-dom'

function Search() {

    const [search, setSearch] = useState();

    const param = `/shop/${search}`;

    return (

        <div>
            <input value={search} onChange={(e) => setSearch(e.target.value)} />

            <Link to={param} onClick={() => setSearch('')}>
                <button
                    className="btn btn-secondary"
                >Search</button>
            </Link>

        </div >
    )
}

export default Search