import React from 'react';

export default function Currency() {
    return (

        <div className="container mx-auto px-4 py-16 relative flex items-center justify-center w-full sm:py-20">
            <div className="w-full max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row">
                    <div className="relative w-full md:w-1/2 p-6 md:p-8 lg:p-12">
                        <div className="absolute opacity-30 top-0 left-4 sm:left-10 w-[200px] sm:w-[305px] h-[200px] sm:h-[305px] bg-[#d8ddd8] rounded-full transform -translate-x-1/4 -translate-y-1/4"></div>
                        <img
                            src="/undraw_sign_in.png"
                            alt="Currency Balance Illustration"
                            className="absolute bottom-0 left-0 w-full max-w-[390px] md:max-w-[480px] object-contain"
                        />
                    </div>

                    <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-12">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#000000] mb-2 md:mb-4">
                            Real-time Currency balance check
                        </h2>
                        <div className="w-12 md:w-16 h-1 bg-gray-300 mb-4 md:mb-6"></div>
                        <p className="text-base md:text-lg text-gray-600 mb-2 md:mb-4 md:w-[320px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed.
                        </p>
                        <a
                            href="#"
                            className="text-lg md:text-xl font-semibold text-[#6C63FF] hover:underline"
                        >
                            Read More {'>'}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}