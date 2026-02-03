import React from 'react';
import { X } from 'lucide-react';

interface FilterSidebarProps {
    filters: {
        category: string[];
        priceRange: [number, number];
        material: string[];
        style: string[];
    };
    setFilters: React.Dispatch<React.SetStateAction<any>>;
    isOpen: boolean;
    onClose: () => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ filters, setFilters, isOpen, onClose }) => {
    const categories = ['Rings', 'Necklaces', 'Earrings', 'Bracelets'];
    const materials = ['Gold Plated', 'Sterling Silver', 'Rose Gold', 'Diamond'];

    const handleCategoryChange = (category: string) => {
        setFilters((prev: any) => {
            const newCategories = prev.category.includes(category)
                ? prev.category.filter((c: string) => c !== category)
                : [...prev.category, category];
            return { ...prev, category: newCategories };
        });
    };

    const handleMaterialChange = (material: string) => {
        setFilters((prev: any) => {
            const newMaterials = prev.material.includes(material)
                ? prev.material.filter((m: string) => m !== material)
                : [...prev.material, material];
            return { ...prev, material: newMaterials };
        });
    };

    return (
        <>
            {/* Overlay for mobile */}
            <div
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
            />

            {/* Sidebar */}
            <div className={`
        fixed top-0 left-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-out p-8 border-r border-gray-100 shadow-2xl lg:shadow-none
        lg:relative lg:translate-x-0 lg:w-64 lg:block lg:h-auto lg:z-0 lg:border-none lg:p-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
                <div className="flex items-center justify-between mb-10 lg:hidden">
                    <h2 className="text-2xl font-serif text-primary">Filters</h2>
                    <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full transition-colors"><X size={24} /></button>
                </div>

                {/* Categories */}
                <div className="mb-10">
                    <h3 className="text-sm font-bold uppercase tracking-widest mb-6 font-primary text-primary">Category</h3>
                    <div className="space-y-3">
                        {categories.map(cat => (
                            <label key={cat} className="flex items-center space-x-3 cursor-pointer group">
                                <div className="relative flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={filters.category.includes(cat)}
                                        onChange={() => handleCategoryChange(cat)}
                                        className="peer h-4 w-4 cursor-pointer appearance-none border border-gray-300 transition-all checked:border-primary checked:bg-primary hover:border-primary"
                                    />
                                    <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 text-white">
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                </div>
                                <span className="text-gray-500 group-hover:text-primary transition-colors text-sm">{cat}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Price Range */}
                <div className="mb-10">
                    <h3 className="text-sm font-bold uppercase tracking-widest mb-6 font-primary text-primary">Price Range</h3>
                    <div className="flex items-center space-x-3">
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">$</span>
                            <input
                                type="number"
                                value={filters.priceRange[0]}
                                onChange={(e) => setFilters((prev: any) => ({ ...prev, priceRange: [Number(e.target.value), prev.priceRange[1]] }))}
                                className="w-full pl-6 pr-2 py-2 border border-gray-200 text-sm focus:border-primary outline-none transition-colors bg-bg-subtle"
                                placeholder="0"
                            />
                        </div>
                        <span className="text-gray-400">-</span>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">$</span>
                            <input
                                type="number"
                                value={filters.priceRange[1]}
                                onChange={(e) => setFilters((prev: any) => ({ ...prev, priceRange: [prev.priceRange[0], Number(e.target.value)] }))}
                                className="w-full pl-6 pr-2 py-2 border border-gray-200 text-sm focus:border-primary outline-none transition-colors bg-bg-subtle"
                                placeholder="5000"
                            />
                        </div>
                    </div>
                </div>

                {/* Material */}
                <div className="mb-10">
                    <h3 className="text-sm font-bold uppercase tracking-widest mb-6 font-primary text-primary">Material</h3>
                    <div className="space-y-3">
                        {materials.map(mat => (
                            <label key={mat} className="flex items-center space-x-3 cursor-pointer group">
                                <div className="relative flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={filters.material.includes(mat)}
                                        onChange={() => handleMaterialChange(mat)}
                                        className="peer h-4 w-4 cursor-pointer appearance-none border border-gray-300 transition-all checked:border-primary checked:bg-primary hover:border-primary"
                                    />
                                    <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 text-white">
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                </div>
                                <span className="text-gray-500 group-hover:text-primary transition-colors text-sm">{mat}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FilterSidebar;
