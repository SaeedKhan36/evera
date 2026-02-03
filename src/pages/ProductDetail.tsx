import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, ChevronDown, ChevronUp, Star } from 'lucide-react';
import { products } from '../data/mockData';
import Button from '../components/common/Button';

const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const product = products.find(p => p.id === id);

    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState<string>('');
    const [activeAccordion, setActiveAccordion] = useState<string | null>('details');

    if (!product) {
        return (
            <div className="pt-32 pb-20 text-center min-h-[60vh]">
                <h2 className="text-2xl font-serif mb-4">Product Not Found</h2>
                <Link to="/collections" className="text-primary-gold underline">Back to Collections</Link>
            </div>
        );
    }

    // Mock sizes for demo
    const sizes = ['US 5', 'US 6', 'US 7', 'US 8', 'US 9'];

    const toggleAccordion = (section: string) => {
        setActiveAccordion(activeAccordion === section ? null : section);
    };

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert('Please select a size');
            return;
        }
        console.log(`Added to cart: ${product.name}, Size: ${selectedSize}, Qty: ${quantity}`);
        // Implement actual cart logic later
        alert('Added to cart!');
    };

    return (
        <div className="pt-24 pb-20 bg-white min-h-screen">
            <div className="container mx-auto px-4 md:px-8">

                {/* Breadcrumb */}
                <div className="text-sm text-gray-500 mb-8 uppercase tracking-wider">
                    <Link to="/" className="hover:text-accent transition-colors">Home</Link> /
                    <Link to="/collections" className="hover:text-accent transition-colors mx-1">Collections</Link> /
                    <span className="text-primary font-medium mx-1">{product.name}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">

                    {/* Image Section */}
                    <div className="space-y-4">
                        <div className="aspect-[4/5] bg-gray-50 overflow-hidden relative">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 left-4">
                                {product.isNew && <span className="bg-white px-3 py-1 text-xs font-medium uppercase tracking-wider shadow-sm">New Arrival</span>}
                            </div>
                        </div>
                        {/* Thumbnail placeholder */}
                        <div className="grid grid-cols-4 gap-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="aspect-square bg-gray-100 cursor-pointer hover:opacity-80 transition-opacity">
                                    <img src={product.image} alt="" className="w-full h-full object-cover opacity-50 hover:opacity-100 transition-opacity" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Details Section */}
                    <div>
                        <h1 className="text-3xl md:text-4xl font-serif text-primary mb-4">{product.name}</h1>

                        <div className="flex items-center space-x-4 mb-8">
                            <p className="text-2xl font-medium text-gray-900">${product.price.toFixed(2)}</p>
                            <div className="flex text-accent text-sm items-center">
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                                <span className="text-gray-400 ml-2">(12 reviews)</span>
                            </div>
                        </div>

                        <p className="text-gray-500 mb-8 leading-relaxed max-w-lg">
                            {product.description} Crafted with precision and care, this piece embodies the essence of modern luxury. Perfect for everyday wear or special occasions.
                        </p>

                        {/* Size Selector */}
                        <div className="mb-8">
                            <div className="flex justify-between items-center mb-4 text-sm font-medium uppercase tracking-wider">
                                <label>Size</label>
                                <button className="text-gray-400 font-normal normal-case hover:text-primary transition-colors">Size Guide</button>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {sizes.map(size => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-6 py-3 text-sm transition-all border ${selectedSize === size
                                            ? 'border-primary bg-primary text-white'
                                            : 'border-gray-200 text-gray-600 hover:border-primary'
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <div className="flex items-center border border-gray-200 w-full sm:w-32">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="p-3 hover:text-accent transition-colors"
                                >
                                    <Minus size={16} />
                                </button>
                                <span className="flex-1 text-center text-sm font-medium">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="p-3 hover:text-accent transition-colors"
                                >
                                    <Plus size={16} />
                                </button>
                            </div>
                            <Button
                                variant="primary"
                                size="lg"
                                className="flex-1 bg-primary hover:bg-black text-white"
                                onClick={handleAddToCart}
                            >
                                Add to Cart
                            </Button>
                        </div>

                        {/* Accordions */}
                        <div className="border-t border-gray-100">
                            {/* Product Details */}
                            <div className="border-b border-gray-100">
                                <button
                                    onClick={() => toggleAccordion('details')}
                                    className="w-full py-4 flex justify-between items-center text-left font-serif text-lg text-primary hover:text-accent transition-colors"
                                >
                                    <span>Product Details</span>
                                    {activeAccordion === 'details' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </button>
                                {activeAccordion === 'details' && (
                                    <div className="pb-4 text-gray-500 text-sm space-y-2 animate-in fade-in slide-in-from-top-1">
                                        <p>• Material: 18k Gold Plated</p>
                                        <p>• Gemstone: Certified Diamond</p>
                                        <p>• Weight: 3.5g</p>
                                        <p>• Handcrafted in Italy</p>
                                    </div>
                                )}
                            </div>

                            {/* Shipping */}
                            <div className="border-b border-gray-100">
                                <button
                                    onClick={() => toggleAccordion('shipping')}
                                    className="w-full py-4 flex justify-between items-center text-left font-serif text-lg text-primary hover:text-accent transition-colors"
                                >
                                    <span>Shipping & Returns</span>
                                    {activeAccordion === 'shipping' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </button>
                                {activeAccordion === 'shipping' && (
                                    <div className="pb-4 text-gray-500 text-sm animate-in fade-in slide-in-from-top-1">
                                        <p className="mb-2">Free standard shipping on orders over $200. Estimated delivery: 3-5 business days.</p>
                                        <p>Returns accepted within 30 days of purchase in original condition.</p>
                                    </div>
                                )}
                            </div>

                            {/* Care */}
                            <div className="border-b border-gray-100">
                                <button
                                    onClick={() => toggleAccordion('care')}
                                    className="w-full py-4 flex justify-between items-center text-left font-serif text-lg text-primary hover:text-accent transition-colors"
                                >
                                    <span>Jewellery Care</span>
                                    {activeAccordion === 'care' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </button>
                                {activeAccordion === 'care' && (
                                    <div className="pb-4 text-gray-500 text-sm animate-in fade-in slide-in-from-top-1">
                                        <p>Avoid contact with water, perfumes, and styling products. Store in the provided pouch when not in use.</p>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
