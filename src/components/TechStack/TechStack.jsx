import { useLanguage } from '@/context/LanguageContext';
import './TechStack.css';

export default function TechStack() {
    const { translate } = useLanguage();
    
    return (
        <section id="tech-stack" className="fade-in">
            <h1>{translate('section.techstack')}</h1>
            <div className="tech-grid">
                <div className="tech-icon" title="CSS">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
                    <span>CSS</span>
                </div>
                <div className="tech-icon" title="JavaScript">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                    <span>JavaScript</span>
                </div>
                <div className="tech-icon" title="React">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                    <span>React</span>
                </div>
                <div className="tech-icon" title="Node.js">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                    <span>Node.js</span>
                </div>
                <div className="tech-icon" title="PostgreSQL">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
                    <span>PostgreSQL</span>
                </div>
                <div className="tech-icon" title="Express.js">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" className="express-icon" />
                    <span>Express.js</span>
                </div>
                <div className="tech-icon" title="GSAP">
                    <img src="https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg" alt="GSAP" />
                    <span>GSAP</span>
                </div>
            </div>
        </section>
        
    );
}
