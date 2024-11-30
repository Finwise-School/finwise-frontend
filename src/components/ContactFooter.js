import React from 'react';

const ContactFooter = () => {
    const items = [
        { 
            icon: 'fas fa-envelope', 
            text: 'contact@finwiseschool.com', 
            link: 'mailto:contact@finwiseschool.com' // mailto link for email
        },
        { 
            icon: 'fas fa-phone', 
            text: '+44 7741-819-337', 
            link: 'tel:+447741819337' // tel link for phone number
        },
        { 
            icon: 'fas fa-map-marker-alt', 
            text: 'Glasgow, UK', 
            link: 'https://maps.app.goo.gl/gN66sHs84S44Ba5J8' // Google Maps link for location
        },
        { 
            icon: 'fab fa-youtube', 
            text: 'YouTube', 
            link: 'https://youtube.com/@finwiseschool?si=HtlrLSelgF0_JTCv' // Link to YouTube channel
        },
    ];

    return (
        <div className="grid-for-calci grid-cols-1 md:grid-cols-4 gap-6 p-8 bg-black">
            {items.map((item, index) => (
                <a 
                    key={index} 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full h-[120px] rounded-[10px] flex flex-col justify-center items-center p-4 shadow-lg relative overflow-hidden group"
                    style={{
                        background: 'rgba(255, 255, 255, 0.15)',
                        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        cursor: 'pointer',
                        textDecoration: 'none' // Remove underline for the anchor tag
                    }}
                >
                    {/* Shine effect */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white opacity-0 group-hover:opacity-50 transition-all duration-1000"></div>
                    <div className="z-10 text-center">
                        <i className={`${item.icon} text-3xl text-white mb-2`}></i>
                        <p className="text-white text-sm md:text-sm">{item.text}</p>
                    </div>
                </a>
            ))}
        </div>
    );
};

export default ContactFooter;
