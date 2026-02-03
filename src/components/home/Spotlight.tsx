import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../product/ProductCard';
import { products } from '../../data/mockData';
import Button from '../common/Button';

interface SpotlightProps {
    title: string;
    filter: 'new' | 'best-seller';
}

const Spotlight: React.FC<SpotlightProps> = ({ title, filter }) => {
    // Simple filter logic for mock data
    const filteredProducts = filter === 'new'
        ? products.filter(p => p.isNew).slice(0, 4)
        : products.slice(0, 4);

    return (
        <section className="py-20 md:py-28 bg-bg-subtle">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="text-center md:text-left w-full md:w-auto">
                        <h2 className="text-3xl md:text-4xl font-serif text-primary mb-2">{title}</h2>
                        <div className="h-1 w-16 bg-accent mx-auto md:mx-0"></div>
                    </div>
                    <Link to="/collections">
                        <Button variant="outline" size="sm" className="hidden md:inline-flex">View All</Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link to="/collections">
                        <Button variant="outline" size="md">View All</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Spotlight;
