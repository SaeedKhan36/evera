import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Minus, Plus, Trash2, ArrowRight } from 'lucide-react';
import Button from '../components/common/Button';
import { products } from '../data/mockData';

const Cart: React.FC = () => {
    const navigate = useNavigate();

    // Mock Cart Items
    const [cartItems, setCartItems] = useState<Array<typeof products[0] & { quantity: number; selectedSize: string; }>>([
        { ...products[0], quantity: 1, selectedSize: 'US 6' },
        { ...products[1], quantity: 1, selectedSize: 'Standard' }
    ]);

    const updateQuantity = (id: string, delta: number) => {
        setCartItems(prev => prev.map(item => {
            if (item.id === id) {
                return { ...item, quantity: Math.max(1, item.quantity + delta) };
            }
            return item;
        }));
    };

    const removeItem = (id: string) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 500 ? 0 : 20; // Free for orders > $500
    const total = subtotal + shipping;

    if (cartItems.length === 0) {
        return (
            <div className="pt-32 pb-20 text-center min-h-[60vh]">
                <h2 className="text-3xl font-serif mb-4">Your Cart is Empty</h2>
                <p className="text-text-muted mb-8">Looks like you haven't added anything yet.</p>
                <Link to="/collections">
                    <Button variant="primary">Continue Shopping</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-20 bg-bg-subtle min-h-screen">
            <div className="container mx-auto px-4 md:px-8">
                <h1 className="text-3xl md:text-4xl font-serif mb-12 text-center text-primary">Shopping Cart</h1>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Cart Items */}
                    <div className="flex-grow">
                        <div className="bg-white p-6 md:p-8 shadow-sm border border-gray-100">
                            <div className="hidden md:grid grid-cols-12 gap-4 border-b border-gray-100 pb-4 mb-4 text-sm text-gray-400 uppercase tracking-widest font-medium">
                                <div className="col-span-6">Product</div>
                                <div className="col-span-2 text-center">Price</div>
                                <div className="col-span-2 text-center">Quantity</div>
                                <div className="col-span-2 text-right">Total</div>
                            </div>

                            <div className="space-y-6">
                                {cartItems.map(item => (
                                    <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 items-center border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                                        {/* Product Info */}
                                        <div className="col-span-12 md:col-span-6 flex items-center space-x-6">
                                            <div className="w-20 h-24 bg-gray-50 flex-shrink-0">
                                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <h3 className="font-serif text-lg text-primary">{item.name}</h3>
                                                <p className="text-gray-500 text-sm mt-1">Size: {item.selectedSize}</p>
                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="text-red-400 text-xs flex items-center mt-3 hover:text-red-600 transition-colors uppercase tracking-wider"
                                                >
                                                    <Trash2 size={12} className="mr-1" /> Remove
                                                </button>
                                            </div>
                                        </div>

                                        {/* Price - Quantity - Total (Responsive simplified) */}
                                        <div className="col-span-12 md:col-span-6 grid grid-cols-3 gap-4 items-center">
                                            <div className="text-center md:text-center font-medium">
                                                <span className="md:hidden text-gray-400 text-xs block mb-1">Price:</span>
                                                ${item.price.toFixed(2)}
                                            </div>
                                            <div className="flex justify-center">
                                                <div className="flex items-center border border-gray-200">
                                                    <button onClick={() => updateQuantity(item.id, -1)} className="p-2 hover:bg-gray-50 hover:text-accent transition-colors"><Minus size={14} /></button>
                                                    <span className="px-3 text-sm font-medium w-8 text-center">{item.quantity}</span>
                                                    <button onClick={() => updateQuantity(item.id, 1)} className="p-2 hover:bg-gray-50 hover:text-accent transition-colors"><Plus size={14} /></button>
                                                </div>
                                            </div>
                                            <div className="text-right font-medium text-primary">
                                                <span className="md:hidden text-gray-400 text-xs block mb-1">Total:</span>
                                                ${(item.price * item.quantity).toFixed(2)}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:w-96 flex-shrink-0">
                        <div className="bg-white p-8 shadow-sm border border-gray-100 sticky top-24">
                            <h2 className="text-xl font-serif mb-8 border-b border-gray-100 pb-4">Order Summary</h2>

                            <div className="space-y-4 mb-6 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Subtotal</span>
                                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Shipping</span>
                                    <span className="font-medium">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                                </div>
                            </div>

                            <div className="border-t border-gray-100 pt-6 mb-8 flex justify-between items-center text-lg font-medium text-primary">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>

                            <Button
                                fullWidth
                                onClick={() => navigate('/checkout')}
                                className="flex items-center justify-center space-x-2 bg-primary hover:bg-black text-white py-4"
                            >
                                <span>Proceed to Checkout</span>
                                <ArrowRight size={16} />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
