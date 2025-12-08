import { useLanguage } from '@/context/LanguageContext';
import './About.css';

export default function About() {
    const { translate } = useLanguage();
    
    return (
        <section id="about" className="fade-in">
            <h1>{translate('section.about')}</h1>
            <hr />
            <p className="description">
                {translate('about.text')}
            </p>
        </section>
    );
}
