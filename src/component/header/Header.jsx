import React, { useState } from 'react';
import { BsCart3 } from 'react-icons/bs';
import { FaBars, FaTimes, FaTrashAlt } from 'react-icons/fa';
import logo from '../../images/logo.svg';
import user from '../../images/image-avatar.png';
import './header.css';
import { useCart } from '../CartContext';

const Header = () => {
    const { cart = [], removeFromCart } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <div className="header-content-4 flex">
            <div className="nav-bar pointer" onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
            <img src={logo} alt="logo" />
            <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="flex flex-userCart-2">
                <div className="cardShooping ">
                    <div className="cardSooping_icon pointer" onClick={toggleCart}>
                        <BsCart3 color="black" size="1.6em" />
                        <div className="notificationsCard">{cart.length}</div>
                    </div>
                    {isCartOpen && (
                        <div className={`cardShooping_content ${isCartOpen ? 'open' : ''}`}>
                            <div className="cardShooping_content-title">Cart</div>
                            <div className="cardShooping_content-items">
                                {cart.length === 0 && (
                                    <div className="emptyCartMessage">Your cart is empty</div>
                                )}
                                {cart.map((item, index) => (
                                    <div className="cardShooping_content-item flex" key={index}>
                                        <img src={item.image} alt={item.title} />
                                        <div className="cardShooping_content-item-description">
                                            <p>{item.title}</p>
                                            <div className="cardShooping_content-item-description__price flex">
                                                <div className="cardShooping_content-item-description__price-multiply">
                                                    ${item.price.toFixed(2)} × {item.quantity}
                                                </div>
                                                <div className="cardShooping_content-item-description__price-result">
                                                    ${(item.price * item.quantity).toFixed(2)}
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className="icon-trash" onClick={() => removeFromCart(index)}>
                                                <FaTrashAlt
                                                    color='var(--Grayish-blue)'
                                                    cursor='pointer'
                                                />
                                            </div>
                                    </div>
                                ))}
                            </div>
                            <button><p>Checkout</p></button>
                        </div>
                    )}
                </div>
                <img src={user} alt="user" />
            </div>
        </div>
    );
}

export default Header;
