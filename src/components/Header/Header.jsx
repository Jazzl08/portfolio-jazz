import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import './Header.css';

export default function Header() {
    const { translate, currentLanguage, setCurrentLanguage } = useLanguage();
    
    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
    const [notice, setNotice] = useState(null);

    const handleLanguageChange = (langCode) => {
        setCurrentLanguage(langCode);
        setIsLanguageMenuOpen(false);
    };

    const showNotice = (text) => {
        setNotice({ text, id: Date.now() });
        setTimeout(() => setNotice(null), 2000);
    };

    const handleResumeClick = () => {
        showNotice(translate('notice.resume'));
    };

    return (
        <div className="top-row">
            {notice && (
                <div className="notification" key={notice.id}>
                    {notice.text}
                </div>
            )}
            <div className="left">
                <img src="/profiel.png" className="profile-img" alt="profile photo" />
                <div className="info">
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/jazzlens" aria-label="LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                        <a href="mailto:lensjazz8@gmail.com" aria-label="Email"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></a>
                        <a href="https://github.com/Jazzl08" aria-label="GitHub"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
                    </div>
                    <h2>Jazz Lens</h2>
                    <p className="role" dangerouslySetInnerHTML={{ __html: translate('role') }}></p>
                    <p className="location">Rotterdam, Netherlands</p>
                </div>
            </div>

            <div className="actions">
                <div className="icons-row">
                    <div className="dropdown-container">
                        <button id="lang-btn" className="icon-btn" aria-label="Change Language" aria-expanded={isLanguageMenuOpen} onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                        </button>
                        {isLanguageMenuOpen && (
                            <div id="lang-menu" className="dropdown-menu">
                                <button className={currentLanguage === 'en' ? 'active' : ''} onClick={() => handleLanguageChange('en')}>English</button>
                                <button className={currentLanguage === 'nl' ? 'active' : ''} onClick={() => handleLanguageChange('nl')}>Nederlands</button>
                            </div>
                        )}
                    </div>
                    <a href="/CV_Jazz_Lens_Resume.pdf" download className="resume-inline" aria-label={translate('btn.resume')} title={translate('btn.resume')} onClick={handleResumeClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                        <span>{translate('btn.resume')}</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
