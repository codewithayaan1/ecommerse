import React, { useEffect } from 'react';
import './home.css';
import { Section } from './Section';

const SECTIONS = [
    "Top Products",
    "Features Products",
    "Products of the day",
    "40% OFf Products",
    "Deals of the day",
    "LOOT Products",
    "Fashion Sell",
    "Best Seller"
]

const HomePage = () => {
    return (
        <div className="homepage">
            <section >
                {SECTIONS.map((sectionName) =>
                    <Section name={sectionName} key={sectionName} />
                )}
            </section>
            <footer className="footer">
                <div className="contact-info">
                    <p>123 Main Street, Cityville, ABC 12345</p>
                    <p>Email: info@example.com</p>
                    <p>Phone: +1 (123) 456-7890</p>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
