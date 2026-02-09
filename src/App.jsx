import { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import Header from './components/Header/Header';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import TechStack from './components/TechStack/TechStack';
import Contact from './components/Contact/Contact';
import CommandPalette from './components/CommandPalette/CommandPalette';
import Footer from './components/Footer/Footer';
import { ProgressiveBlur } from './components/ui/progressive-blur';
import './App.css';

function PortfolioContent() {
    const { translate } = useLanguage();
    const [isNavigationOpen, setIsNavigationOpen] = useState(false);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('work');

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        setTimeout(() => {
            const sections = document.querySelectorAll('.fade-in');
            sections.forEach(section => {
                observer.observe(section);
            });
        }, 100);

        return () => observer.disconnect();
    }, [activeTab]);

    return (
        <main className="box">
            <ProgressiveBlur position="top" height="100px" className="fixed top-0 z-50 pointer-events-none" />
            
            <Header onOpenNavigation={() => setIsNavigationOpen(true)} />

            <About />

            <Projects />

            <div className="view-toggle-container fade-in">
                <button 
                    className={`toggle-btn ${activeTab === 'work' ? 'active' : ''}`}
                    onClick={() => setActiveTab('work')}
                >
                    {translate('section.work')}
                </button>
                <button 
                    className={`toggle-btn ${activeTab === 'experience' ? 'active' : ''}`}
                    onClick={() => setActiveTab('experience')}
                >
                    {translate('section.experience')}
                </button>
            </div>

            <Experience type={activeTab} />
            
            <div className="tech-tools-wrapper fade-in">
                <TechStack />
            </div>
            <Footer />

            <ProgressiveBlur position="bottom" height="100px" className="fixed bottom-0 z-50 pointer-events-none" />

            <Contact
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />

            <CommandPalette
                isOpen={isNavigationOpen}
                onClose={() => setIsNavigationOpen(false)}
                onOpenContact={() => setIsContactModalOpen(true)}
            />
        </main>
    );
}

export default function App() {
    return (
        <LanguageProvider>
            <PortfolioContent />
        </LanguageProvider>
    );
}
