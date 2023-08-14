import { useState, useEffect } from 'react'

function Categories({ onChangeCate }) {
    const tabs = [1, 2, 3]

    const [type, setType] = useState(1);
    return (
        <div className="container-fluid pt-5">
            <div className="section-title">
                <h4 className="text-primary text-uppercase">Menu</h4>
                <div className="text-center">
                    {
                        tabs.map(tab => (
                            <button
                                key={tab}
                                style={{ borderRadius: "0" }}
                                className={type === tab ? "btn btn-primary" : "btn btn-outline-primary"}
                                onClick={() => {
                                    setType(tab);
                                    onChangeCate(tab);
                                }}
                            >
                                {tab == 1 ? "Coffe" :
                                    tab == 2 ? "Tea" :
                                        "Sinh tố"}
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Categories;