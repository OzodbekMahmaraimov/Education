import React from 'react';
import { useDispatch, useSelector } from "react-redux";

const Experiment = () => {
    const isCheckout = useSelector((state) => state.checkout);
    const dispatch = useDispatch();

    dispatch({ type: "checkout", checkout: true });

    console.log(isCheckout);

    return (
        <div>
            {/* Add your JSX here */}
        </div>
    );
}

export default Experiment;
