import React, { useEffect } from 'react';

const PolicyLayout: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 pb-20 bg-white min-h-screen">
            <div className="container mx-auto px-4 max-w-3xl">
                <h1 className="text-3xl md:text-4xl font-serif mb-8 text-primary">{title}</h1>
                <div className="prose prose-stone max-w-none text-gray-500 leading-relaxed">
                    {children}
                </div>
            </div>
        </div>
    );
};

export const PrivacyPolicy: React.FC = () => (
    <PolicyLayout title="Privacy Policy">
        <p>Last updated: December 2024</p>
        <p>At Evera, we take your privacy seriously. This policy describes how we collect and use your data.</p>
        <h3>Information We Collect</h3>
        <p>We collect information you provide directly to us, such as when you create an account, make a purchase, or sign up for our newsletter.</p>
        <h3>How We Use Your Information</h3>
        <p>We use your information to process transactions, send you updates, and improve our services.</p>
        <h3>Data Security</h3>
        <p>We implement appropriate security measures to protect your personal information.</p>
    </PolicyLayout>
);

export const TermsConditions: React.FC = () => (
    <PolicyLayout title="Terms & Conditions">
        <p>Welcome to Evera. By accessing this website, you agree to these terms.</p>
        <h3>Use of Website</h3>
        <p>You may not use our products for any illegal purpose. You must not transmit any worms or viruses.</p>
        <h3>Intellectual Property</h3>
        <p>All content on this site is the property of Evera. You may not reproduce it without permission.</p>
    </PolicyLayout>
);

export const RefundPolicy: React.FC = () => (
    <PolicyLayout title="Return & Refund Policy">
        <p>We want you to be completely happy with your purchase.</p>
        <h3>Returns</h3>
        <p>Our policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can’t offer you a refund or exchange.</p>
        <p>To be eligible for a return, your item must be unused and in the same condition that you received it.</p>
        <h3>Refunds</h3>
        <p>Once your return is received and inspected, we will send you an email to notify you off the approval or rejection of your refund.</p>
    </PolicyLayout>
);
