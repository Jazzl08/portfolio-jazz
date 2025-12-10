import React, { useState, createContext, useContext, useRef, useEffect } from 'react';
import './HoverCard.css';

const HoverCardContext = createContext();

export const HoverCard = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);

    const handleMouseEnter = () => {
        if (timeoutId) clearTimeout(timeoutId);
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        const id = setTimeout(() => setIsOpen(false), 300);
        setTimeoutId(id);
    };

    return (
        <HoverCardContext.Provider value={{ isOpen }}>
            <div 
                className="hover-card-container" 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}
            >
                {children}
            </div>
        </HoverCardContext.Provider>
    );
};

export const HoverCardTrigger = ({ children, className }) => {
    return (
        <span className={`hover-card-trigger ${className || ''}`}>
            {children}
        </span>
    );
};

export const HoverCardContent = ({ children, className }) => {
    const { isOpen } = useContext(HoverCardContext);
    
    if (!isOpen) return null;

    return (
        <div className={`hover-card-content ${className || ''}`}>
            {children}
        </div>
    );
};
