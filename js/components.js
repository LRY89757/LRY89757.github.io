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

// Set active navigation link based on current page
function setActiveNavLink() {
  const currentPage = document.body.dataset.page;
  if (!currentPage) return;
  
  const navLinks = document.querySelectorAll('.site-nav a[data-page]');
  navLinks.forEach(link => {
    if (link.dataset.page === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Initialize components when DOM is loaded
document.addEventListener('DOMContentLoaded', async () => {
  await loadComponent('header-placeholder', 'components/header.html');
  await loadComponent('footer-placeholder', 'components/footer.html');
  setActiveNavLink();
});

