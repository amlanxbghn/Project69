import React from 'react';

function LandingPage() {
    return (
        <div className="flex flex-col items-center justify-center mt-20 sm:mt-10 px-4 relative">
            <div className="flex justify-between items-start w-full max-w-7xl mx-auto">

                <div className="flex flex-col space-y-4">
                    <img src="path/to/image1.jpg" alt="Image 1" className="w-40 h-40 object-cover rounded-xl" />
                    <img src="path/to/image2.jpg" alt="Image 2" className="w-40 h-40 object-cover rounded-xl" />
                </div>
                

                <div className="flex flex-col items-center justify-center flex-grow text-center">
                    <div className="text-white text-6xl font-inter font-bold mb-5 sm:text-6xl">
                        <h1>Cross Platform</h1>
                        <h1>Content Diversification Tool.</h1>
                    </div>
                    <div className="text-zinc-400 font-medium text-xl font-inter mb-5 sm:text-lg">
                        <p>Bridge Platforms Seamlessly - Empower your Presence Everywhere.</p>
                        <p>Powered by AI.</p>
                    </div>
                    <div className="w-full max-w-md sm:max-w-sm mb-10">
                        <button
                            type="submit"
                            className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-inter font-medium text-xl sm:text-lg sm:p-2">
                            Start Converting &#8594;
                        </button>
                    </div>
                    <button className="group font-inter mt-20 p-12 rounded-2xl border border-zinc-600 flex items-center justify-between">
                        <div className='mr-10'>
                            <p className="font-medium text-base text-white sm:text-sm">About Diversify.ai</p>
                            <p className="text-zinc-400 text-sm mt-1 sm:text-xs">Know more about what we do</p>
                        </div>
                        <div className='text-zinc-400'> 
                            ►
                        </div>    
                    </button>
                </div>
                

                <div className="flex flex-col space-y-4">
                    <img src="path/to/image3.jpg" alt="Image 3" className="w-40 h-40 object-cover rounded-xl" />
                    <img src="path/to/image4.jpg" alt="Image 4" className="w-40 h-40 object-cover rounded-xl" />
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
