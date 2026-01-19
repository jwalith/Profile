// Portfolio V2 Script

// Navigation & Mobile Menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 15, 28, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
    } else {
        navbar.style.background = 'rgba(10, 15, 28, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Active Link Highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Chat Widget Functionality
const chatFloatBtn = document.getElementById('chatFloatBtn');
const heroChatBtn = document.getElementById('heroChatBtn');
const chatModal = document.getElementById('chatModal');
const chatCloseBtn = document.getElementById('chatCloseBtn');
const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');
const chatMessages = document.getElementById('chatMessages');

// Toggle Chat
if (chatFloatBtn) {
    chatFloatBtn.addEventListener('click', () => {
        chatModal.classList.toggle('active');
        if (chatModal.classList.contains('active')) {
            chatInput.focus();
        }
    });
}

if (heroChatBtn) {
    heroChatBtn.addEventListener('click', () => {
        chatModal.classList.add('active');
        chatInput.focus();
    });
}

if (chatCloseBtn) {
    chatCloseBtn.addEventListener('click', () => {
        chatModal.classList.remove('active');
    });
}

// Firebase Function URL (Same as V1)
const FIREBASE_FUNCTION_URL = 'https://us-central1-portfolio-291a4.cloudfunctions.net/chatWithGemini';
let conversationHistory = [];

// Add Message to Chat
function addMessage(text, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;

    // Simple markdown parsing for bot messages
    if (!isUser) {
        // Bold
        text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        // Lists
        text = text.replace(/^\* (.*$)/gm, '<li>$1</li>');
        // Line breaks
        text = text.replace(/\n/g, '<br>');
    }

    messageDiv.innerHTML = text;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Handle Chat Submit
if (chatForm) {
    chatForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const message = chatInput.value.trim();
        if (!message) return;

        // Add User Message
        addMessage(message, true);
        chatInput.value = '';

        // Add to history
        conversationHistory.push({ role: 'user', content: message });

        // Show Typing Indicator (simulated)
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot typing';
        typingDiv.innerHTML = 'Typing...';
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        try {
            const response = await fetch(FIREBASE_FUNCTION_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: message,
                    conversationHistory: conversationHistory.slice(-5)
                })
            });

            const data = await response.json();

            // Remove typing indicator
            chatMessages.removeChild(typingDiv);

            if (data.reply) {
                addMessage(data.reply, false);
                conversationHistory.push({ role: 'assistant', content: data.reply });
            } else {
                addMessage("Sorry, I'm having trouble connecting right now.", false);
            }

        } catch (error) {
            console.error('Chat Error:', error);
            chatMessages.removeChild(typingDiv);
            addMessage("Sorry, something went wrong. Please try again later.", false);
        }
    });
}

// EmailJS Contact Form
const contactForm = document.getElementById('contactForm');
const EMAILJS_SERVICE_ID = 'service_0sif2p5';
const EMAILJS_TEMPLATE_ID = 'template_7wsg2ip';
const EMAILJS_PUBLIC_KEY = 'f6ub74GVTg_96qf8Q';

(function () {
    emailjs.init(EMAILJS_PUBLIC_KEY);
})();

if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const btn = contactForm.querySelector('button');
        const originalText = btn.textContent;
        btn.textContent = 'Sending...';
        btn.disabled = true;

        emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, this)
            .then(function () {
                btn.textContent = 'Message Sent!';
                btn.style.background = '#10b981'; // Success green
                contactForm.reset();
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.background = '';
                    btn.disabled = false;
                }, 3000);
            }, function (error) {
                console.log('FAILED...', error);
                btn.textContent = 'Failed to Send';
                btn.style.background = '#ef4444'; // Error red
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.background = '';
                    btn.disabled = false;
                }, 3000);
            });
    });
}

// Projects Tabs
const projectTabs = document.querySelectorAll('.projects-tab');
const projectTabContents = document.querySelectorAll('.projects-tab-content');

if (projectTabs.length && projectTabContents.length) {
    projectTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tab');

            projectTabs.forEach(t => t.classList.remove('active'));
            projectTabContents.forEach(content => content.classList.remove('active'));

            tab.classList.add('active');
            const targetContent = document.getElementById(`projects-${target}`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

// Experience Rendering (Data-Driven)
const experienceTimeline = document.getElementById('experience-timeline');

async function loadExperienceData() {
    if (!window.EXPERIENCE_SHEET_URL) {
        return window.experienceData || [];
    }

    try {
        const response = await fetch(window.EXPERIENCE_SHEET_URL);
        if (!response.ok) {
            throw new Error(`Sheet fetch failed: ${response.status}`);
        }
        const rows = await response.json();
        return parseSheetRows(rows);
    } catch (error) {
        console.warn('Falling back to local experience data.', error);
        return window.experienceData || [];
    }
}

function parseSheetRows(rows) {
    const roleMap = new Map();

    rows.forEach(row => {
        const roleId = (row.role_id || '').trim();
        if (!roleId) return;

        if (!roleMap.has(roleId)) {
            roleMap.set(roleId, {
                date: row.date || '',
                title: row.title || '',
                company: row.company || '',
                projects: new Map()
            });
        }

        const role = roleMap.get(roleId);
        const projectName = (row.project_name || '').trim();
        if (!projectName) return;

        if (!role.projects.has(projectName)) {
            role.projects.set(projectName, {
                name: projectName,
                tags: splitTags(row.project_tags),
                mission: row.mission || '',
                challenge: row.challenge || '',
                solution: row.solution || '',
                sections: parseSections(row.sections)
            });
        }
    });

    return Array.from(roleMap.values()).map(role => ({
        ...role,
        projects: Array.from(role.projects.values())
    }));
}

function splitTags(tagsValue) {
    if (!tagsValue) return [];
    return tagsValue
        .split('|')
        .map(tag => tag.trim())
        .filter(Boolean);
}

function parseSections(sectionsValue) {
    if (!sectionsValue) return [];

    return sectionsValue
        .split('||')
        .map(section => section.trim())
        .filter(Boolean)
        .map(section => {
            const [title, ...textParts] = section.split(':');
            return {
                title: (title || '').trim(),
                text: textParts.join(':').trim()
            };
        })
        .filter(section => section.title && section.text);
}

async function renderExperience() {
    if (!experienceTimeline) return;

    const data = await loadExperienceData();
    if (!data.length) return;

    experienceTimeline.innerHTML = data.map(renderExperienceItem).join('');
}

function renderExperienceItem(item) {
    const projectsHtml = (item.projects || []).map(renderProjectCard).join('');

    return `
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <span class="timeline-date">${item.date}</span>
            <h3 class="timeline-title">${item.title}</h3>
            <p class="timeline-company">${item.company}</p>
            ${projectsHtml}
        </div>
    `;
}

function renderProjectCard(project) {
    const tagsHtml = (project.tags || [])
        .map(tag => `<span class="tech-tag">${tag}</span>`)
        .join('');

    const sectionsHtml = (project.sections || [])
        .map(section => `
            <div class="project-content-item">
                <h5>${section.title}</h5>
                <p>${section.text}</p>
            </div>
        `)
        .join('');

    const detailsParts = [];
    if (project.mission) {
        detailsParts.push(`<p class="project-mission"><strong>The Mission:</strong> ${project.mission}</p>`);
    }
    if (project.challenge) {
        detailsParts.push(`<p class="project-challenge"><strong>The Challenge:</strong> ${project.challenge}</p>`);
    }
    if (project.solution) {
        detailsParts.push(`<p class="project-solution"><strong>The Solution:</strong> ${project.solution}</p>`);
    }
    if (sectionsHtml) {
        detailsParts.push(`<div class="project-content-grid">${sectionsHtml}</div>`);
    }

    return `
        <div class="project-card-expandable">
            <div class="project-header-expandable" onclick="toggleProject(this)">
                <div class="project-header-left">
                    <h4 class="project-name">${project.name}</h4>
                    <div class="tech-tags-inline">
                        ${tagsHtml}
                    </div>
                </div>
                <i class="fas fa-chevron-down expand-icon"></i>
            </div>
            <div class="project-details">
                ${detailsParts.join('')}
            </div>
        </div>
    `;
}

// Expandable Project Cards
function toggleProject(element) {
    element.classList.toggle('expanded');
}

renderExperience();