import { createContext, useState, useContext, useEffect } from 'react';
import { translations } from '@/i18n';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('lang') || 'en');

    useEffect(() => {
        localStorage.setItem('lang', currentLanguage);
    }, [currentLanguage]);

    const translate = (key) => {
        return translations[currentLanguage][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage, translate }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);


