import React from 'react'

function ShopByCate() {
    return (
        <div className="text-center py-10">
            <h1 className="mt-24 text-3xl font-bold mb-2">Shop by Category</h1>
            <p className="text-gray-600 mb-10">Designs feature the world’s finest diamonds and unparalleled craftsmanship—signatures of the House for almost two centuries.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 px-10">
                <div>
                    <img src="https://placehold.co/300x300" alt="Necklace with a pendant" className="w-full" />
                    <p className="mt-2 font-bold">Necklaces & Pendants</p>
                </div>
                <div>
                    <img src="https://placehold.co/300x300" alt="Pair of earrings" className="w-full" />
                    <p className="mt-2 font-bold">Earrings</p>
                </div>
                <div>
                    <img src="https://placehold.co/300x300" alt="Set of bracelets" className="w-full" />
                    <p className="mt-2 font-bold">Bracelets</p>
                </div>
                <div>
                    <img src="https://placehold.co/300x300" alt="Set of rings" className="w-full" />
                    <p className="mt-2 font-bold">Rings</p>
                </div>
                <div>
                    <img src="https://placehold.co/300x300" alt="Engagement rings" className="w-full" />
                    <p className="mt-2 font-bold">Engagement Rings</p>
                </div>
                <div>
                    <img src="https://placehold.co/300x300" alt="Home decor items" className="w-full" />
                    <p className="mt-2 font-bold">Home</p>
                </div>
            </div>
        </div>
    );
}

export default ShopByCate;