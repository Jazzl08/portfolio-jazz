import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import TechStack from './components/TechStack/TechStack';
import Contact from './components/Contact/Contact';
import CommandPalette from './components/CommandPalette/CommandPalette';
import WorkExperienceModal from './components/WorkExperienceModal/WorkExperienceModal';
import Footer from './components/Footer/Footer';
import { ProgressiveBlur } from './components/ui/progressive-blur';
import './App.css';

function PortfolioContent() {
    const [isNavigationOpen, setIsNavigationOpen] = useState(false);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [isWorkExperienceModalOpen, setIsWorkExperienceModalOpen] = useState(false);

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

        gsap.set('.top-row, #about, .project-card, .tech-icon', {
            opacity: 0,
            y: 12
        });

        gsap.set('.tech-icon', {
            y: 8
        });

        const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
        tl.to('.top-row', {
            opacity: 1,
            y: 0,
            duration: 0.45
        })
            .to('#about', {
                opacity: 1,
                y: 0,
                duration: 0.4
            }, '-=0.2')
            .to('.project-card', {
                opacity: 1,
                y: 0,
                stagger: 0.1,
                duration: 0.38
            }, '-=0.15')
            .to('.tech-icon', {
                opacity: 1,
                y: 0,
                stagger: 0.07,
                duration: 0.3
            }, '-=0.2');

        return () => {
            observer.disconnect();
            tl.kill();
        };
    }, []);

    return (
        <main className="box">
            <ProgressiveBlur position="top" height="100px" className="fixed top-0 z-50 pointer-events-none" />
            
            <Header onOpenNavigation={() => setIsNavigationOpen(true)} />

            <About />

            <Projects />
            
            <div className="tech-tools-wrapper fade-in">
                <TechStack />
            </div>
            <Footer />

            <ProgressiveBlur position="bottom" height="100px" className="fixed bottom-0 z-50 pointer-events-none" />

            <Contact
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />

            <WorkExperienceModal
                isOpen={isWorkExperienceModalOpen}
                onClose={() => setIsWorkExperienceModalOpen(false)}
            />

            <CommandPalette
                isOpen={isNavigationOpen}
                onClose={() => setIsNavigationOpen(false)}
                onOpenContact={() => setIsContactModalOpen(true)}
                onOpenWorkExperience={() => setIsWorkExperienceModalOpen(true)}
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
