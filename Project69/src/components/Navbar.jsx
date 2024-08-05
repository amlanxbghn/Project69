import React from 'react';

function Navbar() {
    return (
        <nav className="text-white p-4 flex items-center justify-between">
            <div className="text-3xl font-bold font-inter ml-5 mt-2">diversify.ai</div>
            <button className="bg-zinc-900 border border-zinc-600 hover:bg-zinc-800 text-white font-medium py-2 px-4 rounded-xl mr-5 mt-2">
                Register
            </button>
        </nav>
    );
}

export default Navbar;
