// Load header and footer components
async function loadComponent(elementId, componentPath) {
  try {
    const response = await fetch(componentPath);
    if (!response.ok) throw new Error(`Failed to load ${componentPath}`);
    const html = await response.text();
    const element = document.getElementById(elementId);
    if (element) {
      element.innerHTML = html;
    }
  } catch (error) {
    console.error('Error loading component:', error);
  }
}

function initializeNavigation() {
  const toggle = document.getElementById('nav-toggle');
  const links = document.querySelectorAll('.site-nav a');

  links.forEach((link) => {
    link.addEventListener('click', () => {
      if (toggle) toggle.checked = false;
    });
  });
}

function updateCopyrightYear() {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
}

// Initialize components when DOM is loaded
document.addEventListener('DOMContentLoaded', async () => {
  await loadComponent('header-placeholder', 'components/header.html');
  await loadComponent('footer-placeholder', 'components/footer.html');
  initializeNavigation();
  updateCopyrightYear();
});
