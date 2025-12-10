import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import './Header.css';

export default function Header({ onOpenNavigation }) {
    const { translate, setCurrentLanguage } = useLanguage();
    const { currentTheme, toggleTheme } = useTheme();
    
    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
    const [showEmailNotification, setShowEmailNotification] = useState(false);

    const handleLanguageChange = (langCode) => {
        setCurrentLanguage(langCode);
        setIsLanguageMenuOpen(false);
    };

    const handleEmailClick = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText('jazzlens@gmail.com');
        setShowEmailNotification(true);
        setTimeout(() => setShowEmailNotification(false), 2000);
    };

    return (
        <div className="top-row">
            {showEmailNotification && (
                <div className="notification">
                    Email copied to clipboard!
                </div>
            )}
            <div className="left">
                <img src="/profiel.png" className="profile-img" alt="profile photo" />
                <div className="info">
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/jazzlens" aria-label="LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                        <a href="#" onClick={handleEmailClick} aria-label="Email"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></a>
                        <a href="https://github.com/Jazzl08" aria-label="GitHub"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
                    </div>
                    <h2>Jazz Lens</h2>
                    <p className="role">{translate('role')}</p>
                </div>
            </div>

            <div className="actions" style={{ flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
                <div className="icons-row" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <button id="theme-btn" className="icon-btn" aria-label="Toggle Theme" onClick={toggleTheme}>
                        {currentTheme === 'dark' ? (
                            <svg className="sun-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                        ) : (
                            <svg className="moon-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                        )}
                    </button>
                    
                    <div className="dropdown-container">
                        <button id="lang-btn" className="icon-btn" aria-label="Change Language" onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                        </button>
                        {isLanguageMenuOpen && (
                            <div id="lang-menu" className="dropdown-menu">
                                <button onClick={() => handleLanguageChange('en')}>English</button>
                                <button onClick={() => handleLanguageChange('nl')}>Nederlands</button>
                                <button onClick={() => handleLanguageChange('id')}>Bahasa Indonesia</button>
                            </div>
                        )}
                    </div>

                    <button id="nav-btn" className="icon-btn" aria-label="Navigation" onClick={onOpenNavigation}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>
                    </button>
                </div>

                <a href="/resume.pdf" download className="resume-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    {translate('btn.resume')}
                </a>
            </div>
        </div>
    );
}
