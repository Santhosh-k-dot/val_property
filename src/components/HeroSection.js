import React, { useEffect, useState, Suspense } from 'react';
import '../styles/HeroSection.css';  // Import the updated CSS
import propertyImage from '../assets/banner_2.jpg';

const HeroSection = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Trigger the fade-in effect after component mounts
        setLoaded(true);
    }, []);

    return (
        <div className="hero-section">
            <Suspense fallback={<div>Loading...</div>}>
                <img
                    src={propertyImage}
                    alt="A scenic view representing property valuation"
                    className={`hero-image ${loaded ? 'fade-in' : ''}`}  // Add 'fade-in' class when loaded
                    loading="lazy"
                />
            </Suspense>
            <div className="hero-text">
                <h1>Property valuation <span style={{ color: 'aqua' }}>Simplified</span></h1>
                <p>Get the preliminary value of your property in just a few clicks</p>
                <button className="cta-button">Know your property value</button>
            </div>
            <div className="bubbles">
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
            </div>
            <div className="valuation-text">
                <p>
                    One Click solution for all your valuation requirements including Sale or Purchase of Property, 
                    Capital Gain Assessment, Insurance Purpose, Valuation for Dispute, across 50 cities in India.
                </p>
            </div>
        </div>
    );
};

export default HeroSection;
