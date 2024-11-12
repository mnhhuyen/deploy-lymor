import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../Navbar.css'

function Experience() {
    return (
        <div className="bg-white py-16">
            <h1 className="text-center text-2xl font-semibold mb-12">The Tiffany Experience</h1>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div>
                    <i className="fas fa-box-open text-2xl mb-4"></i>
                    <h2 className="text-base">Complimentary Shipping & Returns</h2>
                    <p className="mt-2 text-sm text-gray-600 mb-4">We offer complimentary shipping and returns on all Tiffany orders.</p>
                    <a href="#" className="nav-link">Learn More <i className="fas fa-chevron-right"></i></a>
                </div>
                <div>
                    <i className="fas fa-bell text-2xl mb-4"></i>
                    <h2 className="text-base">Tiffany At Your Service</h2>
                    <p className="mt-2 text-sm text-gray-600 mb-4">Our client care experts are always here to help.</p>
                    <a href="#" className="nav-link">Contact Us <i className="fas fa-chevron-right"></i></a>
                </div>
                <div>
                    <i className="fas fa-calendar-alt text-2xl mb-4"></i>
                    <h2 className="text-base">Book an Appointment</h2>
                    <p className="mt-2 text-sm text-gray-600 mb-4">We’re happy to help with in-store or virtual appointments.</p>
                    <a href="#" className="nav-link">Book Now <i className="fas fa-chevron-right"></i></a>
                </div>
                <div>
                    <i className="fas fa-gift text-2xl mb-4"></i>
                    <h2 className="text-base">The Iconic Blue Box</h2>
                    <p className="mt-2 text-sm text-gray-600 mb-4">Your Tiffany purchase comes wrapped in our Blue Box packaging.</p>
                    <a href="#" className="nav-link">Explore All Gifts <i className="fas fa-chevron-right"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Experience;
