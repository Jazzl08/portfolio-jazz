import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Experience from '@/components/Experience/Experience';
import './WorkExperienceModal.css';

export default function WorkExperienceModal({ isOpen, onClose }) {
    const { translate } = useLanguage();
    const [activeTab, setActiveTab] = useState('work');

    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target.id === 'work-experience-modal') {
            onClose();
        }
    };

    return (
        <div id="work-experience-modal" className="workexp-modal" onClick={handleOverlayClick}>
            <div className="workexp-content">
                <div className="workexp-header">
                    <h2>{translate('nav.experience')}</h2>
                    <button className="icon-btn" onClick={onClose} aria-label="Close">X</button>
                </div>

                <div className="workexp-toggle">
                    <button
                        className={`workexp-toggle-btn ${activeTab === 'work' ? 'active' : ''}`}
                        onClick={() => setActiveTab('work')}
                    >
                        {translate('section.work')}
                    </button>
                    <button
                        className={`workexp-toggle-btn ${activeTab === 'experience' ? 'active' : ''}`}
                        onClick={() => setActiveTab('experience')}
                    >
                        {translate('section.experience')}
                    </button>
                </div>

                <div className="workexp-body">
                    <Experience type={activeTab} />
                </div>
            </div>
        </div>
    );
}
