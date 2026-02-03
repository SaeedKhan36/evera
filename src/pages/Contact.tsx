import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import Button from '../components/common/Button';

const Contact: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');
        setTimeout(() => {
            setFormStatus('success');
            // Reset after 3s
            setTimeout(() => setFormStatus('idle'), 3000);
        }, 1500);
    };

    return (
        <div className="pt-24 pb-20 bg-white min-h-screen">
            <div className="container mx-auto px-4 max-w-5xl">
                <h1 className="text-4xl md:text-5xl font-serif mb-12 text-center text-primary">Contact Us</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-2xl font-serif mb-6 text-primary">Get in Touch</h2>
                        <p className="text-gray-500 mb-8 leading-relaxed">
                            Have a question about an order, our products, or just want to say hello? We'd love to hear from you.
                        </p>

                        <div className="space-y-8 mb-10">
                            <div className="flex items-start space-x-4 group">
                                <div className="p-3 bg-bg-subtle rounded-full text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h3 className="font-medium text-primary">Email</h3>
                                    <p className="text-gray-500">help@everajewellery.com</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 group">
                                <div className="p-3 bg-bg-subtle rounded-full text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h3 className="font-medium text-primary">WhatsApp / Phone</h3>
                                    <p className="text-gray-500">+1 (555) 123-4567</p>
                                    <p className="text-xs text-gray-400 mt-1">Mon-Fri, 9am - 6pm EST</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 group">
                                <div className="p-3 bg-bg-subtle rounded-full text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h3 className="font-medium text-primary">Studio</h3>
                                    <p className="text-gray-500">123 Jewellery Lane,<br />Gold City, NY 10012</p>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-lg font-medium mb-4 text-primary">Follow Us</h3>
                        <div className="flex space-x-4">
                            <Button variant="secondary" size="sm" className="space-x-2 border-gray-200 text-gray-600 hover:text-primary">
                                <Instagram size={18} /> <span>Instagram</span>
                            </Button>
                            <Button variant="secondary" size="sm" className="space-x-2 border-gray-200 text-gray-600 hover:text-primary">
                                <Facebook size={18} /> <span>Facebook</span>
                            </Button>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-bg-subtle p-8 md:p-10">
                        <h2 className="text-2xl font-serif mb-6 text-primary">Send a Message</h2>
                        {formStatus === 'success' ? (
                            <div className="bg-green-50 text-green-800 p-4 rounded text-center border border-green-100">
                                Message sent successfully! We'll get back to you soon.
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-primary">Name</label>
                                    <input required type="text" className="w-full p-3 border border-gray-200 focus:border-accent outline-none bg-white transition-colors text-sm" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-primary">Email</label>
                                    <input required type="email" className="w-full p-3 border border-gray-200 focus:border-accent outline-none bg-white transition-colors text-sm" placeholder="your@email.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-primary">Message</label>
                                    <textarea required rows={4} className="w-full p-3 border border-gray-200 focus:border-accent outline-none bg-white transition-colors text-sm" placeholder="How can we help?"></textarea>
                                </div>
                                <Button type="submit" variant="primary" fullWidth disabled={formStatus === 'submitting'} className="bg-primary hover:bg-black text-white">
                                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
