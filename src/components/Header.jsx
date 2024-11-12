import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import SearchWindow from './SearchWindow';

function Header({ onSearchClick }) {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const toggleSearchWindow = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    return (
        <div className="flex justify-between items-center p-4" style={{ fontFamily: 'Lora, Chivo, Arial, sans-serif' }}>
            <div className="flex items-center space-x-4 text-gray-600">
                <i className="fas fa-search cursor-pointer" onClick={onSearchClick}></i>
                <i className="fas fa-map-marker-alt"></i>
                <i className="fas fa-bell"></i>
                <Link to="/customer-service" className="text-sm hover:text-black">Contact Us</Link>
            </div>
            <div className="flex justify-center">
                <div className="ml-32 text-4xl text-center">
                    <Link to="/" className="text-black hover:text-gray-800">LYMOR</Link>
                </div>
            </div>
            <div className="flex items-center space-x-4 text-gray-600">
                <i className="fas fa-calendar-alt"></i>
                <span className="text-sm hover:text-black cursor-pointer">Book an Appointment</span>
                <i className="fas fa-user"></i>
                <i className="fas fa-heart"></i>
                <i className="fas fa-shopping-bag"></i>
            </div>
        </div>
    );
}

export default Header;
