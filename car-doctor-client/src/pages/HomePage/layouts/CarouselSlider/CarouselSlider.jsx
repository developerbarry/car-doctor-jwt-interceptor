import { useState } from "react";

const CarouselSlider = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        'https://i.ibb.co.com/cQNfZM6/1.jpg',
        'https://i.ibb.co.com/9ZBvdGr/2.jpg',
        'https://i.ibb.co.com/dmjF99b/3.jpg',
        'https://i.ibb.co.com/KLnSHnR/4.jpg',
        'https://i.ibb.co.com/PcWnVS5/5.jpg',
        'https://i.ibb.co.com/LhGgbSZ/6.jpg',
    ];


    const handleNext = (idx) => {
        let nextIndex = idx;
        const imgLength = images.length - 1;
        if (nextIndex === imgLength) {
            nextIndex = 0;
        } else {
            nextIndex = nextIndex + 1;
        }

        setCurrentIndex(nextIndex)
    };


    const handlePrev = (idx) => {
        let prevIndex = idx;
        if (prevIndex === 0) {
            prevIndex = images.length - 1;
        } else {
            prevIndex = prevIndex - 1;
        }

        setCurrentIndex(prevIndex);
    };


    return (
        <div className="container mx-auto px-4 md:px-12 lg:px-24 py-4">
            <div className="relative w-full">

                {/* Carousel wrapper */}
                <div className="relative h-56 overflow-hidden rounded-lg h-[380px] md:h-[550px]">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                                }`}
                        >
                            <img
                                src={image}
                                className="absolute block w-full h-full object-cover"
                                alt={`Slide ${index + 1}`}
                            />
                            <div className="absolute font-inter w-full h-full bg-gradient-to-r from-[#151515] to-[#15151500] space-y-5 md:space-y-8 p-8 md:px-14 md:py-24 lg:px-20 lg:py-28 ">
                                <h2 className="font-bold text-[30px] pr-14 md:pr-0 md:text-5xl text-white md:w-[55%] lg:w-2/6">Affordable Price For Car Servicing</h2>
                                <p className="text-white text-sm md:text-base md:w-[90%] lg:w-[49%] capitalize">There are many variations of passages of available, but the majority have suffered alteration in some form</p>
                                <div className="flex gap-4 text-white">
                                    <button className="px-3 md:px-4 py-3 bg-[#FF3811] transition-colors duration-300 hover:bg-[#b3260b] font-semibold text-sm rounded">
                                        Discover More
                                    </button>
                                    <button className="px-3 md:px-4 py-3 bg-[#FFFFFF00] border font-semibold text-sm rounded">Latest Project</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Slider controls */}
                <div className="absolute flex bottom-4 right-5 md:bottom-10 md:right-8">
                    <button
                        type="button"
                        onClick={() => handlePrev(currentIndex)}
                        className=" bottom-0 left-0 z-30 flex items-center h-full px-3 cursor-pointer group focus:outline-none"
                    >
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#FFFFFF33] dark:bg-[#FFFFFF33] group-hover:bg-[#FFFFFF33] dark:group-hover:bg-[#e1d2d233] group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg
                                className="w-4 h-4 text-white dark:text-gray-800"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 1 1 5l4 4"
                                />
                            </svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button
                        type="button"
                        onClick={() => handleNext(currentIndex)}
                        className=" top-0 right-0 z-30 flex items-center h-full px-3 cursor-pointer group focus:outline-none"
                    >
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#FF3811] dark:bg-[#FF3811] group-hover:bg-[#b3260a] dark:group-hover:bg-[#b3260a] group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-[#FFFFFF33] group-focus:outline-none">
                            <svg
                                className="w-4 h-4 text-white dark:text-gray-800"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 9 4-4-4-4"
                                />
                            </svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CarouselSlider;
