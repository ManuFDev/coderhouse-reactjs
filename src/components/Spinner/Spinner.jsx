import React, { useState, useEffect} from 'react';
import { PacmanLoader } from "react-spinners";

const override = {
    position: 'absolute',
    top: '40%',
    left: '40%',
};

function Spinner() {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 1200)

    }, [])

    return (
        <PacmanLoader
        className="spinner" color={'#626b69'} cssOverride={override}  size={80} />
    )
}

export default Spinner