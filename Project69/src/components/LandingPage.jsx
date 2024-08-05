import React from 'react';

function LandingPage() {
    return (
        <div className="flex flex-col items-center justify-center mt-40">
            <div className="text-white text-6xl font-inter font-bold text-center mb-5">
                <h1>Cross Platform</h1>
                <h1>Content Diversification Tool.</h1>
            </div>
            <div className="flex flex-col items-center justify-center text-zinc-400 font-medium text-xl font-inter mb-5">
                <p>Bridge Platforms Seamlessly - Empower your Presence Everywhere.</p>
                <p>Powered by AI.</p>
            </div>
            <div className="w-full max-w-md">
                <button
                    type="submit"
                    className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-inter font-medium text-xl ">
                    Start Converting &#8594;
                </button>
            </div>
            <div className="font-inter mt-20 p-12 rounded-2xl border border-zinc-600 flex items-center justify-between hover:bg-zinc-900">
                <div className='mr-10'>
                    <p className="font-medium text-base text-white">About Diversify.ai</p>
                    <p className="text-zinc-400 text-sm mt-1">Know more about what we do</p>
                </div>
                <div className='text-zinc-400'> 
                    ►
                </div>    
            </div>
        </div>
    );
}

export default LandingPage;
