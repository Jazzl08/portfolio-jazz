import { useLanguage } from '@/context/LanguageContext';
import './Contact.css';

export default function Contact({ isOpen, onClose }) {
    const { translate } = useLanguage();

    // Als de modal niet open is, renderen we niets
    if (!isOpen) return null;

    // Sluit de modal als er buiten de content wordt geklikt (op de overlay)
    const handleOverlayClick = (e) => {
        if (e.target.id === 'contact-modal') {
            onClose();
        }
    };

    return (
        <div id="contact-modal" className="modal" onClick={handleOverlayClick}>
            <div className="modal-content">
                <div className="modal-header">
                    <h2>{translate('contact.title')}</h2>
                    <button id="close-modal" className="icon-btn" onClick={onClose}>X</button>
                </div>
                <p className="description">{translate('contact.desc')}</p>
                
                <div className="contact-options">
                    <a href="https://linkedin.com/in/jazzlens" target="_blank" className="contact-card linkedin">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/512px-LinkedIn_icon.svg.png" alt="LinkedIn" className="card-icon linkedin" />
                        <div className="card-text">
                            <h3>Linkedin</h3>
                            <p>{translate('contact.linkedin')}</p>
                        </div>
                        <span className="arrow">↗</span>
                    </a>
                    <a href="mailto:jazzlens@gmail.com" className="contact-card email">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/512px-Gmail_icon_%282020%29.svg.png" alt="Gmail" className="card-icon email" />
                        <div className="card-text">
                            <h3>Email</h3>
                            <p>{translate('contact.email')}</p>
                        </div>
                        <span className="arrow">↗</span>
                    </a>
                </div>
                
                <div className="availability">
                    <span className="dot"></span> <span>{translate('contact.availability')}</span>
                </div>
            </div>
        </div>
    );
}
