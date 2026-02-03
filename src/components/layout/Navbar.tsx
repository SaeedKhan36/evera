import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X, User } from 'lucide-react';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    // Active link style
    const linkClass = ({ isActive }: { isActive: boolean }) =>
        `text-sm font-medium tracking-widest uppercase hover:text-accent transition-colors ${isActive ? 'text-accent' : 'text-gray-600'}`;

    return (
        <>
            <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
                <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">

                    {/* Logo */}
                    <Link to="/" className="text-2xl md:text-3xl font-serif font-bold tracking-wider text-primary">
                        EVERA.
                    </Link>

                    {/* Desktop Links (Center) */}
                    <div className="hidden lg:flex items-center space-x-10">
                        <NavLink to="/" className={linkClass}>Home</NavLink>
                        <NavLink to="/collections" className={linkClass}>Shop</NavLink>
                        <NavLink to="/about" className={linkClass}>About</NavLink>
                        <NavLink to="/contact" className={linkClass}>Contact</NavLink>
                    </div>

                    {/* Icons (Right) */}
                    <div className="flex items-center space-x-5">
                        <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="hidden md:block hover:text-accent transition-colors">
                            <Search size={20} strokeWidth={1.5} />
                        </button>
                        <Link to="/account" className="hidden md:block hover:text-accent transition-colors">
                            <User size={20} strokeWidth={1.5} />
                        </Link>
                        <Link to="/cart" className="hover:text-accent transition-colors relative">
                            <ShoppingBag size={20} strokeWidth={1.5} />
                            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] text-white">0</span>
                        </Link>
                        <button onClick={() => setIsMenuOpen(true)} className="lg:hidden p-1">
                            <Menu size={24} strokeWidth={1.5} />
                        </button>
                    </div>
                </div>

                {/* Mobile Filter / Search Overlay can go here or separate */}
                {isSearchOpen && (
                    <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 p-4 animate-in fade-in slide-in-from-top-2 shadow-sm">
                        <div className="container mx-auto max-w-xl relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full p-3 pl-10 bg-gray-50 border-none outline-none text-sm"
                                autoFocus
                            />
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <button onClick={() => setIsSearchOpen(false)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary">
                                <X size={18} />
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Mobile Menu Sidebar */}
            <div className={`fixed inset-0 z-50 lg:hidden ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
                {/* Backdrop */}
                <div
                    className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
                    onClick={() => setIsMenuOpen(false)}
                />

                {/* Drawer */}
                <div className={`absolute top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="p-6 flex flex-col h-full">
                        <div className="flex justify-between items-center mb-10">
                            <span className="text-xl font-serif font-bold">Menu</span>
                            <button onClick={() => setIsMenuOpen(false)}><X size={24} /></button>
                        </div>

                        <div className="flex flex-col space-y-6 text-lg font-medium">
                            <Link to="/" onClick={() => setIsMenuOpen(false)} className="border-b border-gray-100 pb-2">Home</Link>
                            <Link to="/collections" onClick={() => setIsMenuOpen(false)} className="border-b border-gray-100 pb-2">Shop</Link>
                            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="border-b border-gray-100 pb-2">About</Link>
                            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="border-b border-gray-100 pb-2">Contact</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
