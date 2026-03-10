import { useLanguage } from '@/context/LanguageContext';
import './Projects.css';

export default function Projects() {
    const { translate } = useLanguage();

    const projects = [
        {
            id: 'yumeramen',
            year: 'Februari 2026',
            titleKey: 'proj.yumeramen.title',
            descKey: 'proj.yumeramen.desc',
            img: '/yume-ramen.png',
            listIcon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="project-list-icon"><path d="M3 2v9c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2V2"/><path d="M9 2v9c0 .6.4 1 1 1h4a1 1 0 0 0 1-1V2"/><path d="M19 2v9c0 1.1-.9 2-2 2h-2a2 2 0 0 0-2-2V2"/><line x1="12" y1="17" x2="12" y2="22"/><line x1="8" y1="22" x2="16" y2="22"/></svg>
            ),
            tech: [
                { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: 'rgba(247, 223, 30, 0.1)', borderColor: 'rgba(247, 223, 30, 0.3)' },
                { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: 'rgba(97, 218, 251, 0.1)', borderColor: 'rgba(97, 218, 251, 0.3)' },
                { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: 'rgba(104, 160, 99, 0.1)', borderColor: 'rgba(104, 160, 99, 0.3)' },
                { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', color: 'rgba(0, 0, 0, 0.1)', borderColor: 'rgba(0, 0, 0, 0.3)', className: 'express-icon' },
                { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: 'rgba(51, 103, 145, 0.1)', borderColor: 'rgba(51, 103, 145, 0.3)' },
                { name: 'Zod', icon: '/zod_logo.png', color: 'rgba(48, 104, 183, 0.1)', borderColor: 'rgba(48, 104, 183, 0.3)' },
                { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', color: 'rgba(38, 77, 228, 0.1)', borderColor: 'rgba(38, 77, 228, 0.3)' }
            ],
            links: {
                github: '#',
                demo: '#'
            },
            features: [
                'Coming soon'
            ]
        },
        {
            id: 'stopdeontkoking',
            year: 'Januari 2025',
            titleKey: 'proj.recipe.title',
            descKey: 'proj.recipe.desc',
            img: '/stopdeontkoking.png',
            listIcon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="project-list-icon"><path d="M2 12h20"/><path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"/><path d="m4 8 16-4"/><path d="m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.55a2 2 0 0 1 2.43 1.45l.45 1.81"/></svg>
            ),
            tech: [
                { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: 'rgba(51, 103, 145, 0.1)', borderColor: 'rgba(51, 103, 145, 0.3)' },
                { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: 'rgba(97, 218, 251, 0.1)', borderColor: 'rgba(97, 218, 251, 0.3)' },
                { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', className: 'nextjs-icon', color: 'rgba(128, 128, 128, 0.1)', borderColor: 'rgba(128, 128, 128, 0.3)' },
                { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: 'rgba(49, 120, 198, 0.1)', borderColor: 'rgba(49, 120, 198, 0.3)' },
                { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', color: 'rgba(6, 182, 212, 0.1)', borderColor: 'rgba(6, 182, 212, 0.3)' }
            ],
            links: {
                github: 'https://github.com/Jazzl08/Stop-de-Ontkoking',
                demo: 'https://stopdeontkoking.vercel.app'
            },
            features: [
                'proj.recipe.feat1',
                'proj.recipe.feat2',
                'proj.recipe.feat3',
                'proj.recipe.feat4'
            ]
        },
        {
            id: 'mars',
            year: 'Februari 2024',
            titleKey: 'proj.mars.title',
            descKey: 'proj.mars.desc',
            img: '/mtm.png',
            tech: [
                { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: 'rgba(247, 223, 30, 0.1)', borderColor: 'rgba(247, 223, 30, 0.3)' },
                { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: 'rgba(97, 218, 251, 0.1)', borderColor: 'rgba(97, 218, 251, 0.3)' },
                { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', color: 'rgba(6, 182, 212, 0.1)', borderColor: 'rgba(6, 182, 212, 0.3)' },
                { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg', color: 'rgba(100, 108, 255, 0.1)', borderColor: 'rgba(100, 108, 255, 0.3)' },
                { name: 'Three.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg', className: 'threejs-icon', color: 'rgba(128, 128, 128, 0.1)', borderColor: 'rgba(128, 128, 128, 0.3)' }
            ],
            links: {
                github: 'https://github.com/Jazzl08/Mission-To-Mars/tree/main',
                demo: 'https://mission-to-mars-khaki.vercel.app/home'
            },
            features: [
                'proj.mars.feat1',
                'proj.mars.feat2',
                'proj.mars.feat3',
                'proj.mars.feat4'
            ]
        }
    ];

    return (
        <section id="projects" className="fade-in">
            <h1>{translate('section.projects')}</h1>
            <div className="projects-grid">
                {projects.map((project) => (
                    <article key={project.id} className="project-card">
                        <span className="project-year">{project.year}</span>
                        <div className="project-content">
                            <div className="project-header">
                                <h3 className="project-title">
                                    {project.links.github !== '#' ? (
                                        <a
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="project-title-link"
                                        >
                                            <span className="project-title-text">{translate(project.titleKey)}</span>
                                            <span className="project-title-arrow">↗</span>
                                        </a>
                                    ) : (
                                        <span>{translate(project.titleKey)}</span>
                                    )}
                                </h3>
                            </div>
                            <p className="project-desc">{translate(project.descKey)}</p>
                            <div className="project-tech">
                                {project.tech.map((t, i) => (
                                    <div 
                                        key={i} 
                                        className="tech-badge"
                                        style={{ 
                                            backgroundColor: 'rgba(255, 255, 255, 0.03)', 
                                            borderColor: t.borderColor 
                                        }}
                                        title={t.name}
                                    >
                                        <img src={t.icon} alt={t.name} className={t.className || ''} />
                                        <span>{t.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
