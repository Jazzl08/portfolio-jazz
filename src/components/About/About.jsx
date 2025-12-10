import { useLanguage } from '@/context/LanguageContext';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '../ui/hover-card';
import './About.css';

export default function About() {
    const { translate } = useLanguage();
    
    return (
        <section id="about" className="fade-in">
            <h1>{translate('section.about')}</h1>
            <div className="about-container">
                <div className="about-content">
                    <p className="description about-text">
                        {translate('about.text_1')}
                        <HoverCard>
                            <HoverCardTrigger className="hover-trigger-white">
                                <b><u>{translate('about.country')}</u></b>
                            </HoverCardTrigger>
                            <HoverCardContent className="p-0">
                                <iframe
                                    title="Google Maps Rotterdam"
                                    width="100%"
                                    height="200"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2461.725904401797!2d4.4777322!3d51.924420499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c43477eccd9e17%3A0xe82d49f683e4bd94!2sRotterdam!5e0!3m2!1snl!2snl!4v1700000000000"
                                    style={{ border: 0, display: 'block' }}
                                ></iframe>
                            </HoverCardContent>
                        </HoverCard>
                        {translate('about.text_2')}
                    </p>
                </div>
            </div>
        </section>
    );
}
