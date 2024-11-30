import React from 'react';

const ContactFooter = () => {
    const items = [
        { icon: 'fas fa-envelope', text: 'contact@finwise.com' },
        { icon: 'fas fa-phone', text: '+44 7741-819-337' },
        { icon: 'fas fa-map-marker-alt', text: 'Glasgow, UK' },
        { icon: 'fab fa-youtube', text: 'YouTube' },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-black">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="w-full h-[120px] rounded-[10px] flex flex-col justify-center items-center p-4 shadow-lg relative overflow-hidden group"
                    style={{
                        background: 'rgba(255, 255, 255, 0.15)',
                        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        cursor: 'pointer'
                    }}
                >
                    {/* Shine effect */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white opacity-0 group-hover:opacity-50 transition-all duration-1000"></div>
                    <div className="z-10 text-center">
                        <i className={`${item.icon} text-3xl text-white mb-2`}></i>
                        <p className="text-white text-xs md:text-sm">{item.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ContactFooter;
