// Import projects data from main.js
const projectsData = window.projects || [];

// Additional projects for the dedicated page
const additionalProjects = [
  {
    title: 'Task Management System',
    duration: 'Oct 2023 - Dec 2023',
    description: 'A comprehensive task management system with real-time updates, team collaboration features, and performance analytics.',
    image: createProjectSVG('#9C27B0'),
    technologies: [
      { name: 'Angular', icon: 'fab fa-angular' },
      { name: '.NET', icon: 'fas fa-code' },
      { name: 'SQL Server', icon: 'fas fa-database' },
      { name: 'Azure', icon: 'fab fa-microsoft' }
    ],
    achievements: [
      'Improved team productivity by 35%',
      '99.9% uptime achievement',
      'Handles 10k+ daily active users'
    ],
    paid: true,
    category: 'web',
    links: {
      live: 'https://example.com/task-manager'
    }
  },
  {
    title: 'AI-Powered Analytics Dashboard',
    duration: 'Jul 2023 - Sep 2023',
    description: 'An intelligent analytics platform that uses machine learning to provide predictive insights and data visualization.',
    image: createProjectSVG('#FF5722'),
    technologies: [
      { name: 'Python', icon: 'fab fa-python' },
      { name: 'TensorFlow', icon: 'fas fa-brain' },
      { name: 'React', icon: 'fab fa-react' },
      { name: 'AWS', icon: 'fab fa-aws' }
    ],
    achievements: [
      'Reduced analysis time by 75%',
      'Processed 1M+ data points daily',
      'Achieved 95% prediction accuracy'
    ],
    paid: true,
    category: 'backend',
    links: {
      live: 'https://example.com/ai-analytics'
    }
  },
  {
    title: 'Social Media App',
    duration: 'Apr 2023 - Jun 2023',
    description: 'A modern social networking application with real-time messaging, media sharing, and community features.',
    image: createProjectSVG('#2196F3'),
    technologies: [
      { name: 'Flutter', icon: 'fas fa-mobile-alt' },
      { name: 'Firebase', icon: 'fas fa-fire' },
      { name: 'Node.js', icon: 'fab fa-node' },
      { name: 'MongoDB', icon: 'fas fa-database' }
    ],
    achievements: [
      '500k+ app downloads',
      '4.8/5 app store rating',
      '15M+ messages sent'
    ],
    paid: false,
    category: 'mobile',
    links: {
      live: 'https://example.com/social-app'
    }
  }
];

// Combine all projects
const allProjects = [...projectsData, ...additionalProjects];

// DOM Elements
const projectGrid = document.querySelector('.project-grid');
const searchInput = document.getElementById('project-search');
const filterButtons = document.querySelectorAll('.filter-btn');
const sortSelect = document.getElementById('sort-projects');

// Current filter and search state
let currentFilter = 'all';
let searchQuery = '';

// Filter and render projects
function filterAndRenderProjects() {
  const filteredProjects = allProjects.filter(project => {
    const matchesFilter = currentFilter === 'all' || project.category === currentFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Sort projects
  const sortedProjects = sortProjects(filteredProjects);
  
  // Render projects with animation delay
  projectGrid.innerHTML = '';
  sortedProjects.forEach((project, index) => {
    const projectElement = createProjectElement(project);
    projectElement.style.animationDelay = `${index * 0.1}s`;
    projectGrid.appendChild(projectElement);
  });
}

// Create project element
function createProjectElement(project) {
  const div = document.createElement('div');
  div.className = 'project-card';
  div.style.animation = 'fadeIn 0.5s ease-out forwards';
  div.innerHTML = `
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
  `;
  return div;
}

// Sort projects based on selected option
function sortProjects(projects) {
  const sortValue = sortSelect.value;
  return [...projects].sort((a, b) => {
    switch(sortValue) {
      case 'newest':
        return new Date(b.duration.split(' - ')[0]) - new Date(a.duration.split(' - ')[0]);
      case 'oldest':
        return new Date(a.duration.split(' - ')[0]) - new Date(b.duration.split(' - ')[0]);
      case 'az':
        return a.title.localeCompare(b.title);
      case 'za':
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });
}

// Event Listeners
searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value;
  filterAndRenderProjects();
});

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    currentFilter = button.dataset.filter;
    filterAndRenderProjects();
  });
});

sortSelect.addEventListener('change', filterAndRenderProjects);

// Helper function for SVG (same as in main.js)
function createProjectSVG(color) {
  return `<svg viewBox="0 0 300 200">
    <defs>
      <linearGradient id="grad-${color.substring(1)}-${Math.random().toString(36).substr(2, 9)}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${color};stop-opacity:0.2" />
        <stop offset="100%" style="stop-color:${color};stop-opacity:0.4" />
      </linearGradient>
    </defs>
    <rect width="300" height="200" fill="url(#grad-${color.substring(1)}-${Math.random().toString(36).substr(2, 9)})" />
    <circle cx="150" cy="100" r="50" fill="${color}" opacity="0.3" />
    <path d="M130,80 L170,80 L150,120 Z" fill="${color}" />
  </svg>`;
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
  filterAndRenderProjects();
});