document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        en: {
            role: "Full Stack Developer",
            "section.about": "About me",
            "about.text": "Hello I am Jazz lens, a 17 year old Creative Software Development student based in the Netherlands. I’m learning my way into becoming a Full Stack Web Developer. I am always experimenting, breaking stuff, and fixing it again.",
            "section.experience": "Experience",
            "exp.school.title": "Creative Software Development",
            "exp.school.desc": "Grafisch Lyceum Rotterdam - Student 2nd year",
            "exp.freelance.title": "Freelance Developer",
            "exp.freelance.desc": "Building websites and applications for various clients.",
            "exp.intern.title": "Internship @ TechCorp",
            "exp.intern.desc": "Assisted in frontend development using React and Tailwind CSS.",
            "section.projects": "Projects",
            "proj.portfolio.title": "Portfolio Website",
            "proj.portfolio.desc": "A personal portfolio built with vanilla HTML, CSS, and JS.",
            "proj.dashboard.title": "E-commerce Dashboard",
            "proj.dashboard.desc": "A full-stack dashboard for managing products and orders.",
            "section.techstack": "Tech Stack",
            "contact.title": "Contact",
            "contact.desc": "I would like to work with you...",
            "contact.linkedin": "Click here to send me a message...",
            "contact.email": "Click here to send me an email...",
            "contact.availability": "Currently available for new opportunities",
            "nav.about": "About",
            "nav.about_desc": "Learn more about me!",
            "nav.experience": "Experience",
            "nav.experience_desc": "My professional journey",
            "nav.projects": "Projects",
            "nav.projects_desc": "Showcase of my projects",
            "nav.techstack": "Tech Stack",
            "nav.techstack_desc": "Tools and technologies I use",
            "nav.contact": "Contact",
            "nav.contact_desc": "Get in touch with me",
            "nav.navigate": "navigate",
            "nav.select": "select",
            "nav.close": "close"
        },
        nl: {
            role: "Full Stack Developer",
            "section.about": "Over mij",
            "about.text": "Hallo, ik ben Jazz Lens, een 17-jarige student Creative Software Development in Nederland. Ik leer om een Full Stack Web Developer te worden. Ik ben altijd aan het experimenteren, dingen stukmaken en weer repareren.",
            "section.experience": "Ervaring",
            "exp.school.title": "Creative Software Development",
            "exp.school.desc": "Grafisch Lyceum Rotterdam - Student 2e jaar",
            "exp.freelance.title": "Freelance Developer",
            "exp.freelance.desc": "Websites en applicaties bouwen voor diverse klanten.",
            "exp.intern.title": "Stage @ TechCorp",
            "exp.intern.desc": "Geholpen bij frontend development met React en Tailwind CSS.",
            "section.projects": "Projecten",
            "proj.portfolio.title": "Portfolio Website",
            "proj.portfolio.desc": "Een persoonlijk portfolio gebouwd met vanilla HTML, CSS en JS.",
            "proj.dashboard.title": "E-commerce Dashboard",
            "proj.dashboard.desc": "Een full-stack dashboard voor het beheren van producten en bestellingen.",
            "section.techstack": "Tech Stack",
            "contact.title": "Contact",
            "contact.desc": "Ik wil graag met je samenwerken...",
            "contact.linkedin": "Klik hier om mij een bericht te sturen...",
            "contact.email": "Klik hier om mij een e-mail te sturen...",
            "contact.availability": "Momenteel beschikbaar voor nieuwe kansen",
            "nav.about": "Over mij",
            "nav.about_desc": "Leer meer over mij!",
            "nav.experience": "Ervaring",
            "nav.experience_desc": "Mijn professionele reis",
            "nav.projects": "Projecten",
            "nav.projects_desc": "Showcase van mijn projecten",
            "nav.techstack": "Tech Stack",
            "nav.techstack_desc": "Tools en technologieën die ik gebruik",
            "nav.contact": "Contact",
            "nav.contact_desc": "Neem contact met mij op",
            "nav.navigate": "navigeren",
            "nav.select": "selecteren",
            "nav.close": "sluiten"
        },
        id: {
            role: "Pengembang Full Stack",
            "section.about": "Tentang Saya",
            "about.text": "Halo, saya Jazz Lens, seorang siswa Pengembangan Perangkat Lunak Kreatif berusia 17 tahun yang berbasis di Belanda. Saya sedang belajar untuk menjadi Pengembang Web Full Stack. Saya selalu bereksperimen, merusak sesuatu, dan memperbaikinya lagi.",
            "section.experience": "Pengalaman",
            "exp.school.title": "Creative Software Development",
            "exp.school.desc": "Grafisch Lyceum Rotterdam - Siswa Tahun ke-2",
            "exp.freelance.title": "Pengembang Lepas",
            "exp.freelance.desc": "Membangun situs web dan aplikasi untuk berbagai klien.",
            "exp.intern.title": "Magang @ TechCorp",
            "exp.intern.desc": "Membantu pengembangan frontend menggunakan React dan Tailwind CSS.",
            "section.projects": "Proyek",
            "proj.portfolio.title": "Situs Web Portofolio",
            "proj.portfolio.desc": "Portofolio pribadi yang dibangun dengan HTML, CSS, dan JS vanilla.",
            "proj.dashboard.title": "Dasbor E-commerce",
            "proj.dashboard.desc": "Dasbor full-stack untuk mengelola produk dan pesanan.",
            "section.techstack": "Tumpukan Teknologi",
            "contact.title": "Kontak",
            "contact.desc": "Saya ingin bekerja sama dengan Anda...",
            "contact.linkedin": "Klik di sini untuk mengirim pesan...",
            "contact.email": "Klik di sini untuk mengirim email...",
            "contact.availability": "Saat ini tersedia untuk peluang baru",
            "nav.about": "Tentang Saya",
            "nav.about_desc": "Pelajari lebih lanjut tentang saya!",
            "nav.experience": "Pengalaman",
            "nav.experience_desc": "Perjalanan profesional saya",
            "nav.projects": "Proyek",
            "nav.projects_desc": "Pameran proyek saya",
            "nav.techstack": "Tumpukan Teknologi",
            "nav.techstack_desc": "Alat dan teknologi yang saya gunakan",
            "nav.contact": "Kontak",
            "nav.contact_desc": "Hubungi saya",
            "nav.navigate": "navigasi",
            "nav.select": "pilih",
            "nav.close": "tutup"
        }
    };

    function updateLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        localStorage.setItem('lang', lang);
    }

    // Initialize Language
    const savedLang = localStorage.getItem('lang') || 'en';
    updateLanguage(savedLang);

    // Language Dropdown
    const langBtn = document.getElementById('lang-btn');
    const langMenu = document.getElementById('lang-menu');
    
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langMenu.classList.toggle('hidden');
    });

    langMenu.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            updateLanguage(lang);
            langMenu.classList.add('hidden');
        });
    });

    // --- Theme Toggle ---
    const themeBtn = document.getElementById('theme-btn');
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');
    const html = document.documentElement;

    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);
    updateThemeIcons(savedTheme);

    themeBtn.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcons(newTheme);
    });

    function updateThemeIcons(theme) {
        if (theme === 'dark') {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        } else {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        }
    }

    // --- Command Palette Navigation ---
    const navBtn = document.getElementById('nav-btn');
    const navModal = document.getElementById('nav-modal');
    const cmdItems = Array.from(navModal.querySelectorAll('.cmd-item'));
    const cmdContactTrigger = document.getElementById('cmd-contact-trigger');
    const cmdSearch = document.getElementById('cmd-search');
    let selectedIndex = 0;

    function toggleNav(show) {
        if (show) {
            navModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            if (cmdSearch) {
                cmdSearch.value = '';
                filterItems('');
                cmdSearch.focus();
            }
            selectedIndex = 0;
            updateSelection();
        } else {
            navModal.classList.add('hidden');
            document.body.style.overflow = '';
        }
    }

    function updateSelection() {
        const visibleItems = cmdItems.filter(item => !item.classList.contains('hidden'));
        
        if (selectedIndex >= visibleItems.length) selectedIndex = visibleItems.length - 1;
        if (selectedIndex < 0) selectedIndex = 0;

        cmdItems.forEach(item => item.classList.remove('selected'));
        
        if (visibleItems.length > 0) {
            visibleItems[selectedIndex].classList.add('selected');
            visibleItems[selectedIndex].scrollIntoView({ block: 'nearest' });
        }
    }

    function filterItems(query) {
        const lowerQuery = query.toLowerCase();

        cmdItems.forEach(item => {
            const title = item.querySelector('.cmd-title').textContent.toLowerCase();
            const desc = item.querySelector('.cmd-desc').textContent.toLowerCase();
            
            if (title.includes(lowerQuery) || desc.includes(lowerQuery)) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
        
        selectedIndex = 0;
        updateSelection();
    }

    navBtn.addEventListener('click', () => toggleNav(true));

    // Close on click outside
    navModal.addEventListener('click', (e) => {
        if (e.target === navModal) {
            toggleNav(false);
        }
    });

    if (cmdSearch) {
        cmdSearch.addEventListener('input', (e) => {
            filterItems(e.target.value);
        });
    }

    document.addEventListener('keydown', (e) => {
        if (navModal.classList.contains('hidden')) return;

        const visibleItems = cmdItems.filter(item => !item.classList.contains('hidden'));

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            selectedIndex++;
            if (selectedIndex >= visibleItems.length) selectedIndex = 0;
            updateSelection();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            selectedIndex--;
            if (selectedIndex < 0) selectedIndex = visibleItems.length - 1;
            updateSelection();
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (visibleItems.length > 0) {
                visibleItems[selectedIndex].click();
            }
        }
    });

    // Close on ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            toggleNav(false);
            toggleContactModal(false);
        }
    });

    // Handle Nav Items
    cmdItems.forEach(item => {
        item.addEventListener('click', () => {
            toggleNav(false);
            // If it's the contact trigger, it will be handled by its specific listener
        });
    });

    // --- Contact Modal ---
    const contactModal = document.getElementById('contact-modal');
    const closeModal = document.getElementById('close-modal');
    // Note: contactTrigger from old nav is gone, now we use cmdContactTrigger

    function toggleContactModal(show) {
        if (show) {
            contactModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        } else {
            contactModal.classList.add('hidden');
            document.body.style.overflow = '';
        }
    }

    if (cmdContactTrigger) {
        cmdContactTrigger.addEventListener('click', () => {
            toggleNav(false); // Close nav first
            setTimeout(() => toggleContactModal(true), 100); // Small delay for smooth transition
        });
    }

    if (closeModal) {
        closeModal.addEventListener('click', () => toggleContactModal(false));
    }

    contactModal.addEventListener('click', (e) => {
        if (e.target === contactModal) {
            toggleContactModal(false);
        }
    });

    // --- Global Click Handler (Close Dropdowns) ---
    document.addEventListener('click', (e) => {
        if (!langMenu.contains(e.target) && !langBtn.contains(e.target)) {
            langMenu.classList.add('hidden');
        }
    });

    // --- Fade In Animation ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(section => {
        observer.observe(section);
    });
});
