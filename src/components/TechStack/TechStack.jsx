import { useLanguage } from '@/context/LanguageContext';
import './TechStack.css';

export default function TechStack() {
    const { translate } = useLanguage();
    
    return (
        <section id="tech-stack" className="fade-in">
            <h1>{translate('section.techstack')}</h1>
            <hr />
            <div className="tech-grid">
                <div className="tech-icon" title="CSS3">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
                    <span>CSS3</span>
                </div>
                <div className="tech-icon" title="JavaScript">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                    <span>JavaScript</span>
                </div>
                <div className="tech-icon" title="React">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                    <span>React</span>
                </div>
                <div className="tech-icon" title="Next.js">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="nextjs-icon" />
                    <span>Next.js</span>
                </div>
                <div className="tech-icon" title="Node.js">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                    <span>Node.js</span>
                </div>
                <div className="tech-icon" title="PHP">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" />
                    <span>PHP</span>
                </div>
                <div className="tech-icon" title="Tailwind CSS">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" />
                    <span>Tailwind</span>
                </div>
                <div className="tech-icon" title="PostgreSQL">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
                    <span>PostgreSQL</span>
                </div>
                <div className="tech-icon" title="MySQL">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
                    <span>MySQL</span>
                </div>
                <div className="tech-icon" title="Express.js">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" className="express-icon" />
                    <span>Express.js</span>
                </div>
                <div className="tech-icon" title="Sass">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="Sass" />
                    <span>Sass</span>
                </div>
                <div className="tech-icon" title="Git">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
                    <span>Git</span>
                </div>
                <div className="tech-icon" title="SQLite">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" alt="SQLite" />
                    <span>SQLite</span>
                </div>
            </div>
        </section>
        
    );
}
