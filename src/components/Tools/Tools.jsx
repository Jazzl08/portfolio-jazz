import { useLanguage } from '@/context/LanguageContext';
import './Tools.css';

export default function Tools() {
    const { translate } = useLanguage();
    
    return (
        <section id="tools" className="fade-in">
            <h1>{translate('section.tools')}</h1>
            <hr />
            <div className="tools-grid">
                <div className="tools-icon" title="GitHub">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="github-icon" />
                    <span>GitHub</span>
                </div>
                <div className="tech-icon" title="Figma">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" />
                    <span>Figma</span>
                </div>
                <div className="tools-icon" title="VS Code">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" />
                    <span>VS Code</span>
                </div>
                <div className="tools-icon" title="Postman">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" alt="Postman" />
                    <span>Postman</span>
                </div>
                <div className="tools-icon" title="NPM">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="NPM" />
                    <span>NPM</span>
                </div>
                <div className="tools-icon" title="Trello">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" alt="Trello" />
                    <span>Trello</span>
                </div>
                <div className="tools-icon" title="Rider">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jetbrains/jetbrains-original.svg" alt="Rider" />
                    <span>Rider</span>
                </div>
                <div className="tools-icon" title="PhpStorm">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/phpstorm/phpstorm-original.svg" alt="PhpStorm" />
                    <span>PhpStorm</span>
                </div>
                <div className="tools-icon" title="Vercel">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" alt="Vercel" className="vercel-icon" />
                    <span>Vercel</span>
                </div>
                <div className="tools-icon" title="Supabase">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" alt="Supabase" />
                    <span>Supabase</span>
                </div>
                <div className="tools-icon" title="Beekeeper Studio">
                    <img src="https://cdn.brandfetch.io/idSCESg8RD/theme/light/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1758503122752" alt="Beekeeper Studio" />
                    <span>Beekeeper</span>
                </div>
                <div className="tools-icon" title="Prisma">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" alt="Prisma" className="prisma-icon" />
                    <span>Prisma</span>
                </div>
                <div className="tools-icon" title="Zod">
                    <img src="https://raw.githubusercontent.com/colinhacks/zod/master/logo.svg" alt="Zod" />
                    <span>Zod</span>
                </div>
                <div className="tools-icon" title="shadcn/ui">
                    <img src="https://avatars.githubusercontent.com/u/139895814?s=200&v=4" alt="shadcn/ui" className="shadcn-icon" />
                    <span>shadcn/ui</span>
                </div>
                <div className="tools-icon" title="Radix UI">
                    <img src="https://avatars.githubusercontent.com/u/75042455?s=200&v=4" alt="Radix UI" className="radix-icon" />
                    <span>Radix UI</span>
                </div>
            </div>
        </section>
    );
}
