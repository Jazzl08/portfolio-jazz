import { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header/Header';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import TechStack from './components/TechStack/TechStack';
import Tools from './components/Tools/Tools';
import Contact from './components/Contact/Contact';
import CommandPalette from './components/CommandPalette/CommandPalette';

export default function App() {
    const [isNavigationOpen, setIsNavigationOpen] = useState(false);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

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

        const sections = document.querySelectorAll('.fade-in');
        sections.forEach(section => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <LanguageProvider>
            <ThemeProvider>
                <main className="box">
                    <Header onOpenNavigation={() => setIsNavigationOpen(true)} />

                    <About />
                    <Projects />
                    <TechStack />
                    <Tools />
                    <Experience />



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
            </ThemeProvider>
        </LanguageProvider>
    );
}
