import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-bg-subtle border-t border-gray-100 pt-20 pb-10">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div className="space-y-6">
                        <Link to="/" className="text-2xl font-serif font-bold tracking-wider text-primary">EVERA.</Link>
                        <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                            Handcrafted jewellery designed to make every moment pleasing and precious. Timeless elegance for the modern soul.
                        </p>
                        <div className="flex space-x-5 text-gray-400">
                            <a href="#" className="hover:text-primary transition-colors"><Instagram size={18} /></a>
                            <a href="#" className="hover:text-primary transition-colors"><Facebook size={18} /></a>
                            <a href="#" className="hover:text-primary transition-colors"><Twitter size={18} /></a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-widest mb-6">Shop</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li><Link to="/collections?category=new" className="hover:text-primary transition-colors">New Arrivals</Link></li>
                            <li><Link to="/collections?category=bestsellers" className="hover:text-primary transition-colors">Best Sellers</Link></li>
                            <li><Link to="/collections?category=rings" className="hover:text-primary transition-colors">Rings</Link></li>
                            <li><Link to="/collections?category=necklaces" className="hover:text-primary transition-colors">Necklaces</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-widest mb-6">Support</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/returns-policy" className="hover:text-primary transition-colors">Returns & Exchanges</Link></li>
                            <li><Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-widest mb-6">Contact</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li className="flex items-start gap-3">
                                <MapPin size={16} className="mt-1 shrink-0" />
                                <span>123 Jewellery Lane, Gold City, NY 10012</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={16} />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={16} />
                                <span>hello@everajewellery.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Evera Jewellery. All rights reserved.</p>
                    <p className="mt-2 md:mt-0 font-medium">Designed with Elegance</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
