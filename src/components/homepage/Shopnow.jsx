import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../Navbar.css'

function Shopnow() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <button className="mt-8 px-6 py-2 border border-black text-black text-lg mb-8">
                <span className="nav-link">Shop Now</span>
            </button>
            <div className="flex space-x-8">
                <div className="text-center">
                    <img src="https://placehold.co/400x400" alt="Three bracelets with diamonds" className="w-80 h-80 object-cover" />
                    <h2 className="mt-4 text-lg font-semibold">Gifts for Her</h2>
                    <a href="#" className="text-gray-600 nav-link">Shop Now <i className="fas fa-chevron-right"></i></a>
                </div>
                <div className="text-center">
                    <img src="https://placehold.co/400x400" alt="Diamond ring" className="w-80 h-80 object-cover" />
                    <h2 className="mt-4 text-lg font-semibold">Diamond Jewelry</h2>
                    <a href="#" className="text-gray-600 nav-link">Shop Now <i className="fas fa-chevron-right"></i></a>
                </div>
                <div className="text-center">
                    <img src="https://placehold.co/400x400" alt="Gold chain necklace" className="w-80 h-80 object-cover" />
                    <h2 className="mt-4 text-lg font-semibold">Gold Jewelry</h2>
                    <a href="#" className="text-gray-600 nav-link">Shop Now <i className="fas fa-chevron-right"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Shopnow;
