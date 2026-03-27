import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
    return (
        <div className="relative pt-20"> {/* Offset for Fixed Navbar */}
            <div className="container mx-auto px-4 md:px-8 py-12 md:py-20 lg:py-28">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content (Left) */}
                    <div className="flex-1 text-center lg:text-left space-y-6 animate-fade-in">
                        <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                            <span className="h-px w-10 bg-gray-400"></span>
                            <span className="text-sm font-medium tracking-widest text-gray-500 uppercase">Our Best Seller</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-primary leading-tight">
                            Latest Arrivals
                        </h1>

                        <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
                            <Link to="/collections" className="group flex items-center gap-2 text-sm font-semibold tracking-widest uppercase hover:text-accent transition-colors">
                                Shop Now
                                <span className="h-px w-12 bg-primary group-hover:bg-accent transition-colors"></span>
                            </Link>
                        </div>
                    </div>

                    {/* Image (Right) */}
                    <div className="flex-1 w-full max-w-lg lg:max-w-none relative animate-fade-in">
                        <div className="aspect-[4/5] bg-[#FAD9D5] relative overflow-hidden">
                            {/* Using pinkish bg from reference image 1 for placeholders */}
                            <div className="absolute inset-0 bg-[#FFECE9]"></div> {/* Fallback/Placeholder color */}
                            <img
                                src="/ZirconNecklace1.webp"
                                alt="Jewellery Model"
                                className="relative z-10 w-full h-full object-cover mix-blend-multiply opacity-90 hover:scale-105 transition-transform duration-1000"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;
