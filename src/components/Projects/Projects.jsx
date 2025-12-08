import { useLanguage } from '@/context/LanguageContext';
import './Projects.css';

export default function Projects() {
    const { translate } = useLanguage();
    
    return (
        <section id="projects" className="fade-in">
            <h1>{translate('section.projects')}</h1>
            <hr />
            <div className="timeline">
                {/* Project Item: Portfolio Website */}
                <div className="timeline-item">
                    <div className="timeline-year">2025</div>
                    <div className="timeline-content">
                        <img src="/portfolio.png" alt="Portfolio Website" className="project-img" />
                        <h3>{translate('proj.portfolio.title')}</h3>
                        <div className="project-tech">
                            <div className="tech-badge">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                                <span>React</span>
                            </div>
                            <div className="tech-badge">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" alt="Vite" />
                                <span>Vite</span>
                            </div>
                            <div className="tech-badge">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
                                <span>CSS</span>
                            </div>
                        </div>
                        <p className="description">{translate('proj.portfolio.desc')}</p>
                        <div className="project-links">
                            <a href="https://github.com/jazzlens/portfolio" target="_blank" className="btn-small">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                GitHub
                            </a>
                            <a href="#" target="_blank" className="btn-small">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>

                {/* Project Item: Stop de ontkoking */}
                <div className="timeline-item">
                    <div className="timeline-year">2025</div>
                    <div className="timeline-content">
                        <img src="/stopdeontkoking.png" alt="Stop de ontkoking" className="project-img" />
                        <h3>{translate('proj.recipe.title')}</h3>
                        <div className="project-tech">
                            <div className="tech-badge">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
                                <span>PostgreSQL</span>
                            </div>
                            <div className="tech-badge">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                                <span>React</span>
                            </div>
                            <div className="tech-badge">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" />
                                <span>TypeScript</span>
                            </div>
                            <div className="tech-badge">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" />
                                <span>Tailwind</span>
                            </div>
                        </div>
                        <p className="description">{translate('proj.recipe.desc')}</p>
                        <div className="project-links">
                            <a href="https://github.com/Jazzl08/Stop-de-Ontkoking" target="_blank" className="btn-small">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                GitHub
                            </a>
                            <a href="https://stopdeontkoking.vercel.app" target="_blank" className="btn-small">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>

                {/* Project Item: Mission To Mars */}
                <div className="timeline-item">
                    <div className="timeline-year">2024</div>
                    <div className="timeline-content">
                        <img src="/mtm.png" alt="Mission To Mars" className="project-img" />
                        <h3>{translate('proj.mars.title')}</h3>
                        <div className="project-tech">
                            <div className="tech-badge">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                                <span>React</span>
                            </div>
                            <div className="tech-badge">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" />
                                <span>Tailwind</span>
                            </div>
                            <div className="tech-badge">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" alt="Vite" />
                                <span>Vite</span>
                            </div>
                            <div className="tech-badge">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" alt="Three.js" className="threejs-icon" />
                                <span>Three.js</span>
                            </div>
                        </div>
                        <p className="description">{translate('proj.mars.desc')}</p>
                        <div className="project-links">
                            <a href="https://github.com/Jazzl08/Mission-To-Mars/tree/main" target="_blank" className="btn-small">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                GitHub
                            </a>
                            <a href="https://mission-to-mars-khaki.vercel.app/home" target="_blank" className="btn-small">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
