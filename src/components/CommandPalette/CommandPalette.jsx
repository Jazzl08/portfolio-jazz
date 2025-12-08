import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import './CommandPalette.css';

export default function CommandPalette({ isOpen, onClose, onOpenContact }) {
    const { translate } = useLanguage();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef(null);
    const itemsRef = useRef([]);

    // Lijst van navigatie-items die beschikbaar zijn in de command palette
    const navigationItems = [
        { 
            id: 'about', 
            title: translate('nav.about'), 
            desc: translate('nav.about_desc'), 
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>, 
            action: () => { window.location.href = '#about'; onClose(); } 
        },
        { 
            id: 'experience', 
            title: translate('nav.experience'), 
            desc: translate('nav.experience_desc'), 
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>, 
            action: () => { window.location.href = '#experience'; onClose(); } 
        },
        { 
            id: 'projects', 
            title: translate('nav.projects'), 
            desc: translate('nav.projects_desc'), 
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>, 
            action: () => { window.location.href = '#projects'; onClose(); } 
        },
        { 
            id: 'techstack', 
            title: translate('nav.techstack'), 
            desc: translate('nav.techstack_desc'), 
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>, 
            action: () => { window.location.href = '#tech-stack'; onClose(); } 
        },
        { 
            id: 'contact', 
            title: translate('nav.contact'), 
            desc: translate('nav.contact_desc'), 
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>, 
            action: () => { onClose(); setTimeout(onOpenContact, 100); } 
        }
    ];

    // Filter items op basis van de zoekopdracht
    const filteredNavigationItems = navigationItems.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.desc.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Reset zoekopdracht en focus input wanneer de palette opent
    useEffect(() => {
        if (isOpen) {
            setSearchQuery('');
            setSelectedIndex(0);
            setTimeout(() => inputRef.current?.focus(), 50);
        }
    }, [isOpen]);

    // Reset selectie wanneer de zoekopdracht verandert
    useEffect(() => {
        setSelectedIndex(0);
    }, [searchQuery]);

    // Scroll het geselecteerde item in beeld
    useEffect(() => {
        if (itemsRef.current[selectedIndex]) {
            itemsRef.current[selectedIndex].scrollIntoView({ block: 'nearest' });
        }
    }, [selectedIndex]);

    // Handel toetsenbordnavigatie af (pijltjestoetsen, enter, escape)
    const handleKeyDown = (e) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setSelectedIndex(prev => (prev + 1) % filteredNavigationItems.length);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setSelectedIndex(prev => (prev - 1 + filteredNavigationItems.length) % filteredNavigationItems.length);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (filteredNavigationItems[selectedIndex]) {
                filteredNavigationItems[selectedIndex].action();
            }
        } else if (e.key === 'Escape') {
            onClose();
        }
    };

    // Sluit de palette als er op de overlay wordt geklikt
    const handleOverlayClick = (e) => {
        if (e.target.className === 'cmd-overlay') {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="cmd-overlay" onClick={handleOverlayClick}>
            <div className="cmd-palette">
                <div className="cmd-header">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    <input 
                        ref={inputRef}
                        type="text" 
                        placeholder="Search" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <span className="cmd-esc">ESC</span>
                </div>
                <div className="cmd-list">
                    <div className="cmd-category">Navigation</div>
                    {filteredNavigationItems.map((item, index) => (
                        <div 
                            key={item.id}
                            ref={el => itemsRef.current[index] = el}
                            className={`cmd-item ${index === selectedIndex ? 'selected' : ''}`}
                            onClick={item.action}
                            onMouseEnter={() => setSelectedIndex(index)}
                        >
                            <div className="cmd-icon">{item.icon}</div>
                            <div className="cmd-content">
                                <span className="cmd-title">{item.title}</span>
                                <span className="cmd-desc">{item.desc}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cmd-footer">
                    <div className="cmd-footer-item">
                        <span className="cmd-key">↑</span> <span className="cmd-key">↓</span> <span>{translate('nav.navigate')}</span>
                    </div>
                    <div className="cmd-footer-item">
                        <span className="cmd-key">↵</span> <span>{translate('nav.select')}</span>
                    </div>
                    <div className="cmd-footer-item">
                        <span className="cmd-key">esc</span> <span>{translate('nav.close')}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
