import React, { useEffect } from 'react';

const About: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 pb-20 bg-white min-h-screen">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif mb-6 text-primary">Our Story</h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        Evera was born from a desire to create jewellery that is not just worn, but cherished. A blend of modern aesthetics and timeless traditions.
                    </p>
                </div>

                <div className="mb-20">
                    <div className="aspect-video bg-gray-100 mb-8 overflow-hidden rounded-sm">
                        <img src="https://images.unsplash.com/photo-1549488344-c7388568e64c?auto=format&fit=crop&q=80&w=1200" alt="Jewellery Making" className="w-full h-full object-cover" />
                    </div>
                    <div className="prose prose-lg mx-auto text-gray-500 font-light leading-relaxed">
                        <p className="mb-6">
                            Founded in 2024, Evera started as a small studio with a big vision: to make luxury accessible without compromising on quality. We believe that every piece of jewellery tells a story—your story. Whether it's a celebration of a milestone, a token of love, or a treat for yourself, Evera is there to make it special.
                        </p>
                        <p>
                            Our artisans blend traditional techniques with cutting-edge technology to craft pieces that are as durable as they are beautiful. We use only ethical gold and conflict-free gemstones, ensuring that your sparkle is guilt-free.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-bg-subtle p-12 mb-20">
                    <div>
                        <h3 className="text-2xl font-serif mb-4 text-primary">Our Values</h3>
                        <ul className="space-y-4 text-gray-600">
                            <li className="flex items-start">
                                <span className="text-accent mr-3 mt-1">✦</span>
                                <div><strong className="text-primary font-medium">Integrity:</strong> We are transparent about our materials and pricing.</div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-accent mr-3 mt-1">✦</span>
                                <div><strong className="text-primary font-medium">Quality:</strong> Every piece undergoes rigorous quality checks.</div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-accent mr-3 mt-1">✦</span>
                                <div><strong className="text-primary font-medium">Sustainability:</strong> We are committed to reducing our environmental footprint.</div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-serif mb-4 text-primary">The Promise</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            When you choose Evera, you're choosing more than just jewellery. You're joining a community that values elegance, quality, and trust. We offer a lifetime warranty on all our pieces because we believe in their longevity.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
