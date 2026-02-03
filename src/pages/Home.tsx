import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import FeaturedCategories from '../components/home/FeaturedCategories';
import Spotlight from '../components/home/Spotlight';

const Home: React.FC = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen">
            <Hero />
            <FeaturedCategories />
            <Spotlight title="New Arrivals" filter="new" />
            <Spotlight title="Best Sellers" filter="best-seller" />

            {/* Brand Values Section */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif mb-16 text-primary">Why Evera?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div>
                            <div className="w-16 h-16 bg-bg-subtle rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl">✨</span>
                            </div>
                            <h3 className="text-xl font-serif mb-4 text-primary">Finest Craftsmanship</h3>
                            <p className="text-gray-500 leading-relaxed">Every piece is handcrafted by expert artisans with decades of experience.</p>
                        </div>
                        <div>
                            <div className="w-16 h-16 bg-bg-subtle rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl">💎</span>
                            </div>
                            <h3 className="text-xl font-serif mb-4 text-primary">Certified Quality</h3>
                            <p className="text-gray-500 leading-relaxed">We use only certified gold and ethically sourced diamonds and gemstones.</p>
                        </div>
                        <div>
                            <div className="w-16 h-16 bg-bg-subtle rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl">🛡️</span>
                            </div>
                            <h3 className="text-xl font-serif mb-4 text-primary">Lifetime Warranty</h3>
                            <p className="text-gray-500 leading-relaxed">We stand by our quality with a lifetime warranty on plating and stones.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
