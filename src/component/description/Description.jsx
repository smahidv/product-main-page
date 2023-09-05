import React, { useState } from 'react';
import './description.css'
import { BsCart3 } from 'react-icons/bs'
import { HiMinus, HiPlus } from 'react-icons/hi'
import { useCart } from '../../component/CartContext';
import product11 from '../../images/image-product-1-thumbnail.jpg'

const Description = () => {
    const { addToCart } = useCart();
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const handleAddToCart = () => {
        if (count > 0) {
            const item = {
                title: 'Fall Limited Edition Sneakers',
                price: 125.0,
                quantity: count,
                image: product11,
            };
            addToCart(item);
            setCount(0);
        }
    };

    return (
        <div className='mainContent-description'>
            <h1>Sneaker Company</h1>
            <h2>Fall Limited Edition Sneakers</h2>
            <p>These low-profile sneakers are your perfect casual wear companion. Featuring a
                durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            <div className="price flex">
                <div className="price-flex-2 flex">
                    <div className="currentPrice">$125.00</div>
                    <div className="descount">50%</div>
                </div>
                <del>$250.00</del>
            </div>
            <div className="flex-desktopversion">
            <div className="count-bar flex">
                <div className="operator" onClick={decrement}>
                    <HiMinus />
                </div>
                <div className="count-bar_current-number">{count}</div>
                <div className="operator" onClick={increment}>
                    <HiPlus />
                </div>
            </div>
            <button className="flex" onClick={handleAddToCart} >
                <BsCart3
                    color="var(--White)"
                />
                <p>Add to cart</p>
            </button>
            </div>
        </div>
    );
}

export default Description;
