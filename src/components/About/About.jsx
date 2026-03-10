import { useLanguage } from '@/context/LanguageContext';
import './About.css';

export default function About() {
    const { translate } = useLanguage();
    
    return (
        <section id="about" className="fade-in">
            <h1>{translate('section.about')}</h1>
            <div className="about-container">
                <div className="about-content">
                    <p className="description about-text">
                        {translate('about.text')}
                    </p>
                </div>
            </div>
        </section>
    );
}
