import React from "react";

function Stories() {
    return (
        <div className="container mx-auto p-8">
            <h1 className="mt-24 text-center text-2xl font-bold mb-8">Stories</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="border p-4">
                    <img src="https://placehold.co/600x400" alt="A woman in a black dress with jewelry" className="w-full mb-4" />
                    <h2 className="text-lg font-bold mb-2">A Tiffany Holiday Awaits</h2>
                    <p>This season, discover a place where every act of love is celebrated.</p>
                </div>
                <div className="border p-4">
                    <img src="https://placehold.co/600x400" alt="A jeweled phoenix brooch" className="w-full mb-4" />
                    <h2 className="text-lg font-bold mb-2">New from Blue Book 2024</h2>
                    <p>The fall expression of our 2024 high jewelry collection showcases expertly crafted masterw...</p>
                </div>
                <div className="border p-4">
                    <img src="https://placehold.co/600x400" alt="Three bracelets in different colors" className="w-full mb-4" />
                    <h2 className="text-lg font-bold mb-2">Tiffany & Co. for The Nature Conservancy</h2>
                    <p>Introducing the Love For Our Oceans initiative,</p>
                </div>
            </div>
        </div>
    );
}

export default Stories;