import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../Navbar.css'
// import './Navbar.css'

function Shopnew() {
    return (
        <div className="flex flex-col items-center">
            <button className="mt-8 px-6 py-2 border border-black text-black text-lg mb-8">
                <span className="nav-link">Shop New Jewelry</span>
            </button>
            <div className="flex space-x-4">
                <div className="relative">
                    <img src="https://placehold.co/300x300" alt="Gold necklace with a lock and a ball pendant" className="w-72 h-72 object-cover" />
                    <div className="absolute top-2 left-2 bg-white px-2 py-1 text-sm font-semibold">New</div>
                    <div className="absolute top-2 right-2">
                        <i className="far fa-heart"></i>
                    </div>
                </div>
                <div className="relative">
                    <img src="https://placehold.co/300x300" alt="Gold bracelet with a lock and a ball pendant" className="w-72 h-72 object-cover" />
                    <div className="absolute top-2 left-2 bg-white px-2 py-1 text-sm font-semibold">New</div>
                    <div className="absolute top-2 right-2">
                        <i className="far fa-heart"></i>
                    </div>
                </div>
                <div className="relative">
                    <img src="https://placehold.co/300x300" alt="Silver earrings with a bow design" className="w-72 h-72 object-cover" />
                    <div className="absolute top-2 left-2 bg-white px-2 py-1 text-sm font-semibold">New</div>
                    <div className="absolute top-2 right-2">
                        <i className="far fa-heart"></i>
                    </div>
                </div>
                <div className="relative">
                    <img src="https://placehold.co/300x300" alt="Silver ring with a bow design" className="w-72 h-72 object-cover" />
                    <div className="absolute top-2 left-2 bg-white px-2 py-1 text-sm font-semibold">New</div>
                    <div className="absolute top-2 right-2">
                        <i className="far fa-heart"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shopnew;
