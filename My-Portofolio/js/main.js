// Theme toggle functionality
const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

themeSwitch.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
  localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Load saved theme preference
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  themeSwitch.checked = true;
}

// Project data
const projects = [
  {
    title: 'E-Commerce Platform',
    duration: 'Jan 2023 - Apr 2023',
    description: 'A full-featured e-commerce platform with advanced product management, cart functionality, and secure payment processing.',
    image: createProjectSVG('#4CAF50'),
    technologies: [
      { name: 'React', icon: 'fab fa-react' },
      { name: 'Node.js', icon: 'fab fa-node-js' },
      { name: 'MongoDB', icon: 'fas fa-database' },
      { name: 'AWS', icon: 'fab fa-aws' }
    ],
    achievements: [
      '50% increase in conversion rate',
      '10,000+ active users',
      'Reduced load time by 40%'
    ],
    paid: true,
    links: {
      live: 'https://example.com/ecommerce'
    }
  },
  {
    title: 'Social Media Dashboard',
    duration: 'May 2023 - Aug 2023',
    description: 'Comprehensive analytics dashboard for social media management with real-time data visualization and automated reporting.',
    image: createProjectSVG('#2196F3'),
    technologies: [
      { name: 'Vue.js', icon: 'fab fa-vuejs' },
      { name: 'Python', icon: 'fab fa-python' },
      { name: 'PostgreSQL', icon: 'fas fa-database' },
      { name: 'Docker', icon: 'fab fa-docker' }
    ],
    achievements: [
      'Automated 80% of reporting tasks',
      'Integrated 5 major social platforms',
      'Reduced analysis time by 60%'
    ],
    paid: false,
    links: {
      live: 'https://example.com/dashboard'
    }
  },
  {
    title: 'Mobile Fitness App',
    duration: 'Sep 2023 - Dec 2023',
    description: 'Cross-platform fitness tracking application with personalized workout plans, progress tracking, and social features.',
    image: createProjectSVG('#F44336'),
    technologies: [
      { name: 'React Native', icon: 'fab fa-react' },
      { name: 'Firebase', icon: 'fas fa-fire' },
      { name: 'TypeScript', icon: 'fas fa-code' },
      { name: 'Redux', icon: 'fas fa-layer-group' }
    ],
    achievements: [
      '100,000+ app downloads',
      '4.8/5 average rating',
      '90% user retention rate'
    ],
    paid: true,
    links: {
      live: 'https://example.com/fitness'
    }
  }
];

// Timeline data
const timelineData = [
  {
    year: '2023',
    title: 'Senior Developer',
    description: 'Led development team at Tech Corp'
  },
  {
    year: '2021',
    title: 'Full Stack Developer',
    description: 'Developed solutions at StartUp Inc'
  },
  {
    year: '2019',
    title: 'Computer Science Degree',
    description: 'Graduated from Tech University'
  }
];

// Updated tech stack data with skill levels
const techStack = [
  { name: 'JavaScript', icon: 'fab fa-js', level: 90 },
  { name: 'React', icon: 'fab fa-react', level: 85 },
  { name: 'Node.js', icon: 'fab fa-node-js', level: 80 },
  { name: 'Python', icon: 'fab fa-python', level: 75 },
  { name: 'HTML5', icon: 'fab fa-html5', level: 95 },
  { name: 'CSS3', icon: 'fab fa-css3-alt', level: 90 },
  { name: 'Vue.js', icon: 'fab fa-vuejs', level: 70 },
  { name: 'Angular', icon: 'fab fa-angular', level: 65 },
  { name: 'PHP', icon: 'fab fa-php', level: 60 },
  { name: 'WordPress', icon: 'fab fa-wordpress', level: 75 },
  { name: 'Docker', icon: 'fab fa-docker', level: 70 },
  { name: 'Git', icon: 'fab fa-git-alt', level: 85 }
];

// Updated testimonial data
const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Product Manager',
    text: 'Exceptional work quality and precise attention to detail. A true professional!',
    avatar: createAvatarSVG('#E91E63')
  },
  {
    name: 'Mike Chen',
    role: 'CEO',
    text: 'Fantastic problem-solving skills and excellent communication throughout.',
    avatar: createAvatarSVG('#9C27B0')
  },
  {
    name: 'Emma Davis',
    role: 'Marketing Director',
    text: 'Innovative solutions that helped us achieve our goals effectively.',
    avatar: createAvatarSVG('#FF9800')
  }
];

// Initialize page content
function initializePage() {
  initializeTechBackground();
  renderProjects();
  renderTimeline();
  renderTechStack();
  renderTestimonials();
  initializeCarousel();
  initializeTimelineAnimation();
  initializeMobileMenu();
}

// Render projects
function renderProjects() {
  const projectGrid = document.querySelector('.project-grid');
  projectGrid.innerHTML = projects.map(project => `
    <div class="project-card">
      <div class="project-image">
        ${project.image}
      </div>
      <div class="project-content">
        <div class="project-header">
          <h3 class="project-title">${project.title}</h3>
          <div class="project-duration">
            <i class="far fa-calendar-alt"></i>
            <span>${project.duration}</span>
          </div>
        </div>
        
        <p class="project-description">${project.description}</p>
        
        <div class="project-tech">
          ${project.technologies.map(tech => `
            <span class="tech-tag">
              <i class="${tech.icon}"></i>
              ${tech.name}
            </span>
          `).join('')}
        </div>
        
        <div class="project-achievements">
          ${project.achievements.map(achievement => `
            <div class="achievement-item">
              <i class="fas fa-check-circle"></i>
              <span>${achievement}</span>
            </div>
          `).join('')}
        </div>
        
        <div class="project-links">
          <a href="${project.links.live}" class="project-link read-more" target="_blank">
            <i class="fas fa-book-reader"></i>
            Read More
          </a>
          <div class="project-status ${project.paid ? 'paid' : 'free'}">
            <i class="${project.paid ? 'fas fa-lock' : 'fas fa-unlock'}"></i>
            ${project.paid ? 'Paid Project' : 'Free Project'}
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// Render timeline
function renderTimeline() {
  const timeline = document.querySelector('.timeline');
  timeline.innerHTML = timelineData.map(item => `
    <div class="timeline-item">
      <div class="timeline-marker">${item.year}</div>
      <div class="timeline-content">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    </div>
  `).join('');
}

// Updated render tech stack function
function renderTechStack() {
  const techGrid = document.querySelector('.tech-grid');
  techGrid.innerHTML = techStack.map((tech, index) => `
    <div class="tech-item" style="--delay: ${index}">
      <i class="${tech.icon}"></i>
      <p>${tech.name}</p>
      <div class="skill-level">
        <div class="skill-progress" style="--progress: ${tech.level}%"></div>
      </div>
    </div>
  `).join('');
}

// Updated testimonials rendering
function renderTestimonials() {
  const carousel = document.querySelector('.testimonial-carousel');
  const indicators = document.querySelector('.carousel-indicators');
  
  carousel.innerHTML = testimonials.map((testimonial, index) => `
    <div class="testimonial-slide ${index === 0 ? 'active' : ''}">
      ${testimonial.avatar}
      <h3>${testimonial.name}</h3>
      <p class="role">${testimonial.role}</p>
      <p class="text">${testimonial.text}</p>
    </div>
  `).join('');
  
  indicators.innerHTML = testimonials.map((_, index) => `
    <div class="indicator ${index === 0 ? 'active' : ''}" data-index="${index}"></div>
  `).join('');
}

// Updated carousel initialization
function initializeCarousel() {
  const carousel = document.querySelector('.testimonial-carousel');
  const slides = carousel.querySelectorAll('.testimonial-slide');
  const indicators = document.querySelectorAll('.indicator');
  const prevBtn = document.querySelector('.carousel-controls .prev');
  const nextBtn = document.querySelector('.carousel-controls .next');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
  }

  prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      currentSlide = index;
      showSlide(currentSlide);
    });
  });

  // Auto-advance carousel
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 5000);
}

// Add intersection observer for timeline animation
function initializeTimelineAnimation() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.setProperty('--delay', index);
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateX(0)';
      }
    });
  }, { threshold: 0.2 });

  timelineItems.forEach(item => observer.observe(item));
}

// Technology background animation
function initializeTechBackground() {
  const techIcons = [
    { icon: 'fab fa-html5', name: 'HTML5' },
    { icon: 'fab fa-css3-alt', name: 'CSS3' },
    { icon: 'fab fa-js', name: 'JavaScript' },
    { icon: 'fab fa-php', name: 'PHP' },
    { icon: 'fas fa-database', name: 'MySQL' },
    { icon: 'fab fa-react', name: 'React' },
    { icon: 'fab fa-vuejs', name: 'Vue.js' },
    { icon: 'fab fa-angular', name: 'Angular' },
    { icon: 'fab fa-node-js', name: 'Node.js' },
    { icon: 'fab fa-python', name: 'Python' },
    { icon: 'fab fa-aws', name: 'AWS' },
    { icon: 'fab fa-docker', name: 'Docker' },
    { icon: 'fab fa-git-alt', name: 'Git' },
    { icon: 'fab fa-laravel', name: 'Laravel' },
    { icon: 'fab fa-sass', name: 'Sass' },
    { icon: 'fab fa-bootstrap', name: 'Bootstrap' }
  ];

  const background = document.createElement('div');
  background.className = 'tech-background';
  document.body.appendChild(background);

  // Create multiple instances of each icon
  for (let i = 0; i < 3; i++) {
    techIcons.forEach((tech, index) => {
      const icon = document.createElement('i');
      icon.className = `${tech.icon} tech-icon`;
      icon.style.left = `${Math.random() * 100}vw`;
      icon.style.top = `${Math.random() * 100}vh`;
      icon.style.animationDelay = `${(index + i * techIcons.length) * -2}s`;
      icon.title = tech.name;
      background.appendChild(icon);
    });
  }

  // Add parallax effect on mouse move
  document.addEventListener('mousemove', (e) => {
    const icons = document.querySelectorAll('.tech-icon');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    icons.forEach((icon, index) => {
      const speed = index % 3 === 0 ? 20 : index % 2 === 0 ? 15 : 10;
      const x = (mouseX - 0.5) * speed;
      const y = (mouseY - 0.5) * speed;
      icon.style.transform = `translate(${x}px, ${y}px)`;
    });
  });
}

// Helper function to create project SVG placeholder
function createProjectSVG(color) {
  return `<svg viewBox="0 0 300 200">
    <defs>
      <linearGradient id="grad-${color.substring(1)}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${color};stop-opacity:0.2" />
        <stop offset="100%" style="stop-color:${color};stop-opacity:0.4" />
      </linearGradient>
    </defs>
    <rect width="300" height="200" fill="url(#grad-${color.substring(1)})" />
    <circle cx="150" cy="100" r="50" fill="${color}" opacity="0.3" />
    <path d="M130,80 L170,80 L150,120 Z" fill="${color}" />
  </svg>`;
}

// Helper function to create avatar SVG placeholder
function createAvatarSVG(color) {
  return `<svg viewBox="0 0 100 100" class="avatar">
    <circle cx="50" cy="50" r="45" fill="${color}" opacity="0.2"/>
    <circle cx="50" cy="40" r="20" fill="${color}"/>
    <path d="M50 65 Q50 95 80 95 L20 95 Q50 95 50 65" fill="${color}"/>
  </svg>`;
}

// Mobile menu functionality
function initializeMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.nav-links');
  const overlay = document.querySelector('.mobile-overlay');
  let isOpen = false;

  menuBtn.addEventListener('click', () => {
    isOpen = !isOpen;
    menuBtn.classList.toggle('active', isOpen);
    mobileMenu.classList.toggle('active', isOpen);
    overlay.classList.toggle('active', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close menu when clicking overlay
  overlay.addEventListener('click', () => {
    isOpen = false;
    menuBtn.classList.remove('active');
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  });

  // Close menu when clicking nav links
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      isOpen = false;
      menuBtn.classList.remove('active');
      mobileMenu.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePage);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Active nav link highlighting
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    const scroll = window.scrollY;

    if (scroll >= sectionTop && scroll < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + section.id) {
          link.classList.add('active');
        }
      });
    }
  });
});

// Form submission handling
document.querySelector('.contact-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  
  // Example: Add form submission animation
  const submitButton = document.querySelector('.form-submit');
  submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  submitButton.disabled = true;
  
  // Simulate form submission (replace with actual API call)
  setTimeout(() => {
    submitButton.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
    submitButton.style.background = '#4CAF50';
    
    // Reset form
    setTimeout(() => {
      e.target.reset();
      submitButton.innerHTML = 'Send Message';
      submitButton.style.background = '';
      submitButton.disabled = false;
    }, 3000);
  }, 2000);
});

// Add animation to contact methods
const contactMethods = document.querySelectorAll('.contact-method');
contactMethods.forEach((method, index) => {
  method.style.opacity = '0';
  method.style.transform = 'translateX(-20px)';
  
  setTimeout(() => {
    method.style.transition = 'all 0.5s ease';
    method.style.opacity = '1';
    method.style.transform = 'translateX(0)';
  }, 300 * (index + 1));
});