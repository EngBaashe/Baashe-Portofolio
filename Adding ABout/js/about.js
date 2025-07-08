document.addEventListener('DOMContentLoaded', () => {
  initializeSkillBars();
  initializeScrollAnimations();
});

function initializeSkillBars() {
  const skillItems = document.querySelectorAll('.skill-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const skillBar = entry.target.querySelector('.skill-progress');
        const skillLevel = entry.target.dataset.skill;
        skillBar.style.width = `${skillLevel}%`;
      }
    });
  }, { threshold: 0.5 });

  skillItems.forEach(item => observer.observe(item));
}

function initializeScrollAnimations() {
  const animatedElements = document.querySelectorAll('.timeline-content, .education-card, .interest-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.5s ease-out';
    observer.observe(element);
  });
}

