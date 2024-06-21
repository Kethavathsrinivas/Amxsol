import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './AboutUs.css';

const images = ['/a8.jpg', '/a6.jpg']; // Array of image sources

const coreValues = [
    {
        title: 'DIVERSITY & INCLUSION',
        description: 'Employees from all walks of life are welcome and we celebrate what makes us unique...',
        img: '/d1.jpg'
    },
    {
        title: 'CUSTOMER COMMITMENT',
        description: 'We are dedicated to delivering quality service and stellar customer support...',
        img: '/d2.jpg'
    },
    {
        title: 'PEOPLE CENTRIC',
        description: 'The happiness and wellbeing of our employees and clients is our top priority...',
        img: '/d3.jpg'
    },
    {
        title: 'TEAMWORK & COLLABORATION',
        description: 'We collaborate across teams, functions, and business units to deliver the best possible work...',
        img: '/d4.jpg'
    },
    {
        title: 'TRANSPARENCY & ACCOUNTABILITY',
        description: 'We value open and honest communication from associates to executives alike...',
        img: '/d5.jpg'
    },
    {
        title: 'RESPECT',
        description: 'To us, RESPECT means creating a work environment where everyone is heard and valued...',
        img: '/d6.jpg'
    },
    {
        title: 'INTEGRITY',
        description: 'We strive to do what\'s right when dealing with our fellow employees, clients, vendors...',
        img: '/d7.jpg'
    },
    {
        title: 'PASSION',
        description: 'We are committed to achieving and outperforming our goals with fierce dedication...',
        img: '/d8.jpg'
    }
];

const Marquee = () => {
    return (
        <div className="marquee-container">
            <div className="marquee-left">
                <button className="marquee-button marquee-button-left">DIVERSITY & INCLUSION</button>
                <button className="marquee-button marquee-button-left">CUSTOMER COMMITMENT</button>
                <button className="marquee-button marquee-button-left">PEOPLE CENTRIC</button>
                <button className="marquee-button marquee-button-left">INTEGRITY</button>
                <button className="marquee-button marquee-button-left">CUSTOMER COMMITMENT</button>
            </div>
            <div className="marquee-right">
                <button className="marquee-button marquee-button-right">TEAMWORK & COLLABORATION</button>
                <button className="marquee-button marquee-button-right">TRANSPARENCY & ACCOUNTABILITY</button>
                <button className="marquee-button marquee-button-right">RESPECT</button>
                <button className="marquee-button marquee-button-right">PASSION</button>
                <button className="marquee-button marquee-button-right">TEAMWORK & COLLABORATION</button>
            </div>
        </div>
    );
};

const subsections = [
    {
        title: "STRATEGIC LOCATIONS",
        content: "With offices placed strategically across North America and India...",
        imgSrc: "/b1.jpg" // Replace with actual image path
    },
    {
        title: "PROFESSIONAL TALENT",
        content: "When you partner with System Soft, you have access to our pool of highly-skilled associates...",
        imgSrc: "/b2.jpg" // Replace with actual image path
    },
    {
        title: "LONG-TERM PARTNERSHIPS",
        content: "We enjoy 80% repeat business from clients due to our great customer experience...",
        imgSrc: "/b3.jpg" // Replace with actual image path
    },
    {
        title: "CUTTING-EDGE TECHNOLOGIES",
        content: "We invest heavily in technologies and methods to enhance agility...",
        imgSrc: "/b4.jpg" // Replace with actual image path
    }
];

const Card = ({ title, content, imgSrc }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    
    return (
        <div className="card" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <div className="card-image" style={{ backgroundImage: `url(${imgSrc})` }}>
            <h3 className="card-title">{title}</h3>
            {isHovered && (
                <div className="card-content">
                    <div className="card-text">{content}</div>
                </div>
            )}
        </div>
    </div>
    );
};



const sections = [
    {
        title: "MISSION STATEMENT",
        content: "Accelerating innovation through exceptional IT services..."
    },
    {
        title: "VISION STATEMENT",
        content: "To be recognized as the most trusted and innovative IT partner..."
    },
];

const AboutUs = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [direction, setDirection] = useState(0); // -1 for left, 1 for right

    // Effect for auto-changing the images
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(interval);
    }, []);

    const handlePrev = () => {
        setDirection(-1);
        setCurrentCarouselIndex((prevIndex) => (prevIndex - 1 + sections.length) % sections.length);
    };

    const handleNext = () => {
        setDirection(1);
        setCurrentCarouselIndex((prevIndex) => (prevIndex + 1) % sections.length);
    };

    const handleButtonClick = () => {
        setIsButtonClicked(!isButtonClicked);
    };

    const buttonStyle = {
        backgroundColor: isButtonClicked ? 'black' : 'white',
        color: isButtonClicked ? 'white' : 'black',
        border: '1px solid blue',
        padding: '10px 20px',
        cursor: 'pointer',
        fontSize: '16px',
        borderRadius: '20px',
        transition: 'background-color 0.3s, color 0.3s'
    };

    return (
        <div className="about-us">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="container"
            >
                <motion.img
                    key={currentImageIndex}
                    src={images[currentImageIndex]}
                    alt="not found"
                    className="background-image"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                />
                <div className="text-overlay">
                    <h1 className='head'>WHAT WE CAN DO FOR YOU</h1>
                    <p>AMXSOL provides cost-effective software solutions and consulting services.</p>
                    <a href='#'> BUSINESS SOLUTIONS </a> |
                    <a href='#'> TALENT SOLUTIONS</a>
                </div>
            </motion.div>
            <motion.div initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 1 }} className="partnership-container">
                <h2>OUR APPROACH TO <span className="highlight">PARTNERSHIP</span></h2>
                <div className="content">
                    <div className="text">
                        <div className="image-container">
                            <img src="/a4.jpg" alt="Partnership Image" />
                        </div>
                        <p>
                            Our focus is on building long-term client relationships. By becoming partners and trusted advisors, we are able to truly understand and anticipate our clients’ unique needs. This includes strategically placing offices across North America and India so we can help our clients on a very personal level based on their geographic locations. By doing this, we successfully help organizations achieve significant ROI ahead of schedule and below budget.
                        </p>
                        <p>
                            We also believe that happy employees take good care of customers, so we are people-centric and strive to create an environment that nurtures and empowers our employees. By prioritizing the needs of our employees, we prioritize the needs of our clients – creating a
                            company culture driven to exceed expectations.
                        </p>
                    </div>
                </div>
                <button style={buttonStyle} onClick={handleButtonClick}>
                    PARTNER WITH US
                </button>
            </motion.div>

            <div className="carousel-container">
                <button className="carousel-button" onClick={handlePrev}>&lt;</button>
                <motion.div 
                    key={currentCarouselIndex}
                    initial={{ x: direction === 1 ? 100 : -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: direction === 1 ? -100 : 100, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="carousel-content">
                    <div className="section-card">
                        <h3>{sections[currentCarouselIndex].title}</h3>
                        <p>{sections[currentCarouselIndex].content}</p>
                    </div>
                </motion.div>
                <button className="carousel-button" onClick={handleNext}>&gt;</button>
            </div>

            <div className="card-container">
            {subsections.map((subsection, index) => (
                <Card
                    key={index}
                    title={subsection.title}
                    content={subsection.content}
                    imgSrc={subsection.imgSrc}
                />
            ))}
        </div>

        
            <Marquee />

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                <h2>CORE VALUES</h2>
                <div className="core-values">
                    {coreValues.map((value, index) => (
                        <div className="value" key={index} style={{ backgroundImage: `url(${value.img})` }}>
                            <div className="content">
                                <h4>{value.title}</h4>
                                <p>{value.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                <p className="quote">"Our deeply collaborative approach helps our clients overcome the most daunting IT challenges"</p>
            </motion.div>
        </div>
    );
};

export default AboutUs;
