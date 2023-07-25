import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DatabaseManagerComponent = () => {
    const navigate = useNavigate();
    const employeeManager = () => {
        navigate(`/employees`)
    }

    const productManager = () => {
        navigate(`/products`)
    }

    return (
        <div>
             <h2 className="text-center">Choose a Database Manager</h2>
             <div className="row">
                <button className="btn btn-primary" onClick={employeeManager}>
                    Employee Manager
                </button>
             </div>
             <br></br>
             <div className="row">
                <button className="btn btn-primary" onClick={productManager}>
                    Product Manager
                </button>
             </div>
        </div>
    )
}

export default DatabaseManagerComponent;