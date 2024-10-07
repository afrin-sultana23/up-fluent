import React, {useEffect, useState} from 'react';
import {data} from "autoprefixer";

const UseCart = () => {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("https://localhost:5000/cart")
            .then(res => res.json)
            .then(data => {
                setCart(data)
            })
    }, []);

    return [cart]
};

export default UseCart;