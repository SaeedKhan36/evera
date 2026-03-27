import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, ChevronDown } from 'lucide-react';
import ProductCard from '../components/product/ProductCard';
import FilterSidebar from '../components/collections/FilterSidebar';
import { products } from '../data/mockData';

const Collections: React.FC = () => {
    const [searchParams] = useSearchParams();
    const initialCategory = searchParams.get('category'); // e.g. 'rings'

    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [sortBy, setSortBy] = useState('featured');

    const [filters, setFilters] = useState({
        category: initialCategory ? [initialCategory.charAt(0).toUpperCase() + initialCategory.slice(1)] : [], // Simple capitalization
        priceRange: [0, 5000] as [number, number],
        material: [] as string[],
        style: [] as string[]
    });

    // Effect to update filters if URL param changes
    useEffect(() => {
        if (initialCategory) {
            const catName = initialCategory.charAt(0).toUpperCase() + initialCategory.slice(1);
            setFilters(prev => ({ ...prev, category: prev.category.includes(catName) ? prev.category : [catName] }));
        }
    }, [initialCategory]);

    // Filter Logic
    const filteredProducts = products.filter(product => {
        // 1. Category Filter
        if (filters.category.length > 0 && !filters.category.includes(product.category)) {
            return false;
        }
        // 2. Price Filter
        if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
            return false;
        }
        // 3. Material Filter (Mock data doesn't have material yet, so we skip exact check or assume all match for now to avoid empty list)
        // In a real app, product would have 'material' property.

        return true;
    });

    // Sort Logic
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        return 0; // featured/newest default order
    });

    return (
        <div className="pt-20 min-h-screen bg-white">
            {/* Header */}
            <div className="bg-bg-subtle py-16 mb-8">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif mb-4 text-primary">All Collections</h1>
                    <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        Explore our meticulously curated selection of fine jewellery, designed to celebrate every moment.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 pb-20">
                {/* Toolbar */}
                <div className="flex flex-wrap items-center justify-between mb-8 pb-4 border-b border-gray-100 sticky top-20 bg-white/95 backdrop-blur-sm z-20">
                    <button
                        onClick={() => setIsFilterOpen(true)}
                        className="lg:hidden flex items-center space-x-2 text-primary hover:text-accent transition-colors"
                    >
                        <Filter size={20} />
                        <span className="font-medium">Filters</span>
                    </button>

                    <p className="text-gray-500 text-sm hidden lg:block uppercase tracking-wider">
                        Showing {sortedProducts.length} results
                    </p>

                    <div className="flex items-center space-x-6 ml-auto">
                        <span className="text-sm text-gray-500 hidden sm:inline uppercase tracking-wider">Sort by:</span>
                        <div className="relative group">
                            <button className="flex items-center space-x-2 text-sm font-medium hover:text-accent transition-colors">
                                <span>{sortBy === 'featured' ? 'Featured' : sortBy === 'price-low' ? 'Price: Low to High' : 'Price: High to Low'}</span>
                                <ChevronDown size={14} />
                            </button>
                            <div className="absolute right-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-30">
                                <div className="bg-white shadow-xl border border-gray-100 py-2 w-48 animate-in fade-in slide-in-from-top-2">
                                    <button onClick={() => setSortBy('featured')} className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-bg-subtle hover:text-primary transition-colors">Featured</button>
                                    <button onClick={() => setSortBy('price-low')} className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-bg-subtle hover:text-primary transition-colors">Price: Low to High</button>
                                    <button onClick={() => setSortBy('price-high')} className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-bg-subtle hover:text-primary transition-colors">Price: High to Low</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar */}
                    <aside className="lg:w-64 flex-shrink-0 hidden lg:block">
                        <FilterSidebar
                            filters={filters}
                            setFilters={setFilters}
                            isOpen={isFilterOpen}
                            onClose={() => setIsFilterOpen(false)}
                        />
                    </aside>
                    {/* Mobile Sidebar (controlled by state, rendered inside FilterSidebar usually but we need to ensure structure) */}
                    {/* Actually FilterSidebar handles its own visibility via props for mobile too, so we just render it.*/}
                    {/* Wait, the desktop Aside hides it if hidden lg:block, but FilterSidebar has fixed/mobile logic inside? 
                        The FilterSidebar component I wrote handles mobile fixed overlay and desktop relative.
                        So I should render it unconditionally or handle it properly.
                        In my Collections code, I put it inside <aside className="lg:w-64 ...">. 
                        If I hide the aside on mobile, the mobile drawer won't show if it's inside the aside.
                        I should place the FilterSidebar OUTSIDE the aside for mobile, or make the aside not hidden.
                        The FilterSidebar component has `lg:hidden` relative logic? 
                        Let's check previous file content. 
                        It has `fixed ... lg:relative`. 
                        So if I wrap it in `hidden lg:block`, I kill the mobile version.
                    */}
                    {/* Correcting structure -> Render FilterSidebar once, let IT handle the responsive logic. */}
                    <div className="lg:hidden">
                        <FilterSidebar
                            filters={filters}
                            setFilters={setFilters}
                            isOpen={isFilterOpen}
                            onClose={() => setIsFilterOpen(false)}
                        />
                    </div>

                    {/* Grid */}
                    <main className="flex-1">
                        {sortedProducts.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {sortedProducts.map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 text-gray-500">
                                <p className="mb-4">No products found matching your criteria.</p>
                                <button
                                    onClick={() => setFilters({ category: [], priceRange: [0, 5000], material: [], style: [] })}
                                    className="text-accent underline hover:text-primary transition-colors"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Collections;
