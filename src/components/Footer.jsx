import React from 'react'
import './Footer.css';
import './Navbar.css'


function Footer(){
    return(
        <div className="footer">
            <div className="grid grid-cols-4 gap-4">
                <div>
                    <h2>Client Care</h2>
                    <p><a href="#" className="nav-link text-sm">Contact Us</a></p>
                    <p><a href="#" className="nav-link text-sm">Track Your Order</a></p>
                    <p><a href="#" className="nav-link text-sm">Product Care & Repair</a></p>
                    <p><a href="#" className="nav-link text-sm">Book an Appointment</a></p>
                    <p><a href="#" className="nav-link text-sm">Frequently Asked Questions</a></p>
                    <p><a href="#" className="nav-link text-sm">Shipping & Returns</a></p>
                    <p><a href="#" className="nav-link text-sm">Tiffany Select Financing</a></p>
                    <p><a href="#" className="nav-link text-sm">Gift Cards</a></p>
                    <p><a href="#" className="nav-link text-sm">Website Accessibility</a></p>
                </div>
                <div>
                    <h2>Our Company</h2>
                    <p><a href="#" className="nav-link text-sm">World of Tiffany</a></p>
                    <p><a href="#" className="nav-link text-sm">Sustainability</a></p>
                    <p><a href="#" className="nav-link text-sm">California Supply Chains Act</a></p>
                    <p><a href="#" className="nav-link text-sm">California Privacy</a></p>
                    <p><a href="#" className="nav-link text-sm">Tiffany Careers</a></p>
                    <p><a href="#" className="nav-link text-sm">Privacy and Other Website Policies</a></p>
                    <p><a href="#" className="nav-link text-sm">Transparency in Coverage</a></p>
                    <p><a href="#" className="nav-link text-sm">Do Not Sell or Share My Personal Information</a></p>
                    <p><a href="#" className="nav-link text-sm">Opt-Out of Targeted Advertising</a></p>
                </div>
                <div>
                    <h2>Related Tiffany Sites</h2>
                    <p><a href="#" className="nav-link text-sm">Wedding & Gift Registry</a></p>
                    <p><a href="#" className="nav-link text-sm">Business Accounts</a></p>
                    <p><a href="#" className="nav-link text-sm">Tiffany for the Press</a></p>
                    <p><a href="#" className="nav-link text-sm">The Tiffany & Co. Foundation</a></p>
                    <p><a href="#" className="nav-link text-sm">Tiffany Alertline</a></p>
                    <p><a href="#" className="nav-link text-sm">Site Index</a></p>
                </div>
                <div>
                    <h2>Latest from Tiffany</h2>
                    <p className="text-sm">Be the first to know about exciting new designs, special events, store openings and much more.</p>
                    <div className="email-signup">
                        <input type="email" placeholder="Email" />
                        <button>Sign up</button>
                    </div>
                    <div className="social-icons mt-2">
                        <a href="#" className="nav-link"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="nav-link"><i className="fab fa-facebook"></i></a>
                        <a href="#" className="nav-link"><i className="fab fa-pinterest"></i></a>
                        <a href="#" className="nav-link"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="nav-link"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <p className="text-sm">Change Location: United States <i className="fas fa-caret-down"></i></p>
            </div>
        </div>
    );
}

export default Footer;