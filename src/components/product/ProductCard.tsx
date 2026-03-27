import React from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    isNew?: boolean;
}

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { addToCart } = useCart();

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent navigation to product detail
        e.stopPropagation();
        addToCart(product);
        // Optional: Simple user feedback
        // In a real app, use a Toast notification
        // alert(`${product.name} added to cart!`); 
    };

    return (
        <div className="group cursor-pointer">
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                {product.isNew && (
                    <span className="absolute top-2 left-2 z-10 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary shadow-sm">
                        New
                    </span>
                )}

                <Link to={`/product/${product.id}`}>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                    />
                </Link>

                {/* Quick Add Button Overlay */}
                <button
                    onClick={handleAddToCart}
                    className="absolute bottom-4 right-4 translate-y-full opacity-0 bg-white p-3 text-primary shadow-lg transition-all duration-300 hover:bg-black hover:text-white group-hover:translate-y-0 group-hover:opacity-100"
                    title="Add to Cart"
                >
                    <Plus size={20} />
                </button>
            </div>

            <div className="mt-4 text-center">
                <h3 className="text-sm font-medium text-primary hover:text-accent transition-colors truncate px-2">
                    <Link to={`/product/${product.id}`}>
                        {product.name}
                    </Link>
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                    ${product.price.toFixed(2)}
                </p>
            </div>
        </div>
    );
};

export default ProductCard;
