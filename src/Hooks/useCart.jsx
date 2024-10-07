import React, {useEffect, useState} from 'react';


const UseCart = () => {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("https://server-upfluent.vercel.app/cart")
            .then(res => res.json)
            .then(data => {
                setCart(data)
            })
    }, []);

    return [cart]
};

export default UseCart;