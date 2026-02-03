import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/mockData';

const FeaturedCategories: React.FC = () => {
    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">Shop by Category</h2>
                    <div className="h-1 w-20 bg-accent mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {categories.map((category) => (
                        <Link
                            to={`/collections?category=${category.id}`}
                            key={category.id}
                            className="group relative block aspect-[3/4] overflow-hidden bg-gray-100"
                        >
                            <img
                                src={category.image}
                                alt={category.name}
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />

                            {/* Floating Text */}
                            <div className="absolute inset-x-0 bottom-6 text-center">
                                <span className="inline-block bg-white/90 backdrop-blur-sm px-6 py-3 text-sm font-medium uppercase tracking-widest text-primary shadow-sm hover:bg-primary hover:text-white transition-all duration-300">
                                    {category.name}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedCategories;
