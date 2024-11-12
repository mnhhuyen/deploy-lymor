import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Vidintro() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <video className="w-full h-full object-cover" autoPlay muted loop>
                <source src="/media/videos/2024_HOLIDAY_ATJ_CS_VIDEO_Mobile-1.mp4" type="video/mp4" />
                The season for love
            </video>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-white">
                <h1 className="text-2xl font-bold">Iconic Gifts Since 1837</h1>
                <p className="text-sm">This holiday, discover iconic designs, each an extraordinary expression of love.</p>
            </div>
        </div>
    );
}

export default Vidintro;