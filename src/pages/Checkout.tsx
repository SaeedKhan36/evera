import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';

const Checkout: React.FC = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1); // 1: Info, 2: Payment, 3: Success

    const handlePlaceOrder = (e: React.FormEvent) => {
        e.preventDefault();
        setStep(3);
    };

    if (step === 3) {
        return (
            <div className="pt-32 pb-20 text-center min-h-[60vh] container mx-auto px-4">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl text-green-600">✓</span>
                </div>
                <h2 className="text-3xl font-serif mb-4">Order Confirmed!</h2>
                <p className="text-text-muted mb-8">Thank you for your purchase. You will receive an email confirmation shortly.</p>
                <button
                    onClick={() => navigate('/')}
                    className="text-primary-gold underline hover:text-text-dark"
                >
                    Back to Home
                </button>
            </div>
        );
    }

    const inputClass = "w-full p-3 border border-gray-200 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm";

    return (
        <div className="pt-24 pb-20 bg-bg-subtle min-h-screen">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-serif mb-12 text-center text-primary">Checkout</h1>

                <div className="bg-white p-8 md:p-10 shadow-sm border border-gray-100">
                    <form onSubmit={handlePlaceOrder}>
                        {/* Section 1: Contact & Shipping */}
                        <div className="mb-12">
                            <h2 className="text-xl font-serif mb-8 border-b border-gray-100 pb-4 text-primary">Shipping Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-medium mb-2 uppercase tracking-wider text-gray-500">First Name</label>
                                    <input required type="text" className={inputClass} />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium mb-2 uppercase tracking-wider text-gray-500">Last Name</label>
                                    <input required type="text" className={inputClass} />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-xs font-medium mb-2 uppercase tracking-wider text-gray-500">Email</label>
                                    <input required type="email" className={inputClass} />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-xs font-medium mb-2 uppercase tracking-wider text-gray-500">Address</label>
                                    <input required type="text" className={inputClass} />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium mb-2 uppercase tracking-wider text-gray-500">City</label>
                                    <input required type="text" className={inputClass} />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium mb-2 uppercase tracking-wider text-gray-500">Postal Code</label>
                                    <input required type="text" className={inputClass} />
                                </div>
                            </div>
                        </div>

                        {/* Section 2: Payment */}
                        <div className="mb-12">
                            <h2 className="text-xl font-serif mb-8 border-b border-gray-100 pb-4 text-primary">Payment</h2>
                            <div className="space-y-4">
                                <div className="border border-primary-light bg-blue-50/20 p-4 flex items-center">
                                    <input type="radio" name="payment" defaultChecked className="mr-3 text-primary focus:ring-primary h-4 w-4" />
                                    <span className="font-medium text-primary">Credit Card</span>
                                </div>
                                <div className="p-6 bg-gray-50 border border-gray-200 border-t-0 space-y-4">
                                    <input placeholder="Card Number" className={inputClass} required />
                                    <div className="grid grid-cols-2 gap-4">
                                        <input placeholder="MM/YY" className={inputClass} required />
                                        <input placeholder="CVC" className={inputClass} required />
                                    </div>
                                </div>

                                <div className="border border-gray-200 p-4 flex items-center opacity-50 cursor-not-allowed">
                                    <input type="radio" name="payment" disabled className="mr-3 h-4 w-4" />
                                    <span>PayPal (Coming Soon)</span>
                                </div>
                            </div>
                        </div>

                        <Button type="submit" variant="primary" fullWidth size="lg" className="bg-primary hover:bg-black text-white py-4 text-base">
                            Pay Now
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
