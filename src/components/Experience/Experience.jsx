import { useLanguage } from '@/context/LanguageContext';
import './Experience.css';

export default function Experience() {
    const { translate } = useLanguage();
    
    return (
        <section id="experience" className="fade-in">
            <h1>{translate('section.experience')}</h1>
            <hr />
            <div className="timeline">
                {/* Tijdlijn item: Jumbo */}
                <div className="timeline-item">
                    <a href="https://www.jumbo.com" target="_blank" className="timeline-logo" title="Jumbo Supermarkten">
                        <img src="/jumbo.svg" alt="Jumbo Logo" />
                    </a>
                    <div className="timeline-year">2024 - Present</div>
                    <div className="timeline-content">
                        <h3>{translate('exp.jumbo.title')}</h3>
                        <p className="description">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '5px', verticalAlign: 'text-bottom'}}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            <span>{translate('exp.jumbo.desc')}</span>
                        </p>
                        <p className="description" style={{marginTop: '5px'}}>
                            {translate('exp.jumbo.skills')}
                        </p>
                    </div>
                </div>

                {/* Tijdlijn item: Grafisch Lyceum */}
                <div className="timeline-item">
                    <a href="https://www.glr.nl" target="_blank" className="timeline-logo" title="Grafisch Lyceum Rotterdam">
                        <img src="/glr.png" alt="GLR Logo" />
                    </a>
                    <div className="timeline-year">2024 - 2027</div>
                    <div className="timeline-content">
                        <h3>{translate('exp.school.title')}</h3>
                        <p className="description">
                            {/* Locatie icoon SVG */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '5px', verticalAlign: 'text-bottom'}}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            <span>{translate('exp.school.desc')}</span>
                        </p>
                        <p className="description" style={{marginTop: '5px'}}>
                            {translate('exp.school.status')}
                        </p>
                    </div>
                </div>
            </div>
            <hr />
        </section>
    );
}
