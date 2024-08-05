import React from 'react';

function LandingPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen">
            <div className="text-white text-6xl font-inter font-bold text-center mb-5">
                <h1>Cross Platform</h1>
                <h1>Content Diversification Tool.</h1>
            </div>
            <div className="flex flex-col items-center justify-center text-gray-400 font-medium text-xl font-inter mb-5">
                <p>Bridge Platforms Seamlessly - Empower your Presence Everywhere.</p>
                <p>Powered by AI.</p>
            </div>
            <div className="w-full max-w-md">
                <button
                    type="submit"
                    className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-inter font-medium text-xl">
                    Start Converting &#8594;
                </button>
            </div>
        </div>
    );
}

export default LandingPage;
