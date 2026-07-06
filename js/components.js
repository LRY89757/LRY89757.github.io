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

function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  }

  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();

  const copied = document.execCommand('copy');
  textarea.remove();

  return copied ? Promise.resolve() : Promise.reject(new Error('Copy failed'));
}

function initializePublicationDetails() {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('.paper-row').forEach((paper) => {
    const details = paper.querySelector('.paper-details');
    const toggles = paper.querySelectorAll('.paper-detail-toggle');

    if (!details || toggles.length === 0) return;

    const closeDetails = () => {
      toggles.forEach((toggle) => toggle.setAttribute('aria-expanded', 'false'));
      details.querySelectorAll('.paper-detail-panel').forEach((panel) => {
        panel.hidden = true;
      });
      details.hidden = true;
    };

    toggles.forEach((toggle) => {
      toggle.addEventListener('click', () => {
        const panel = document.getElementById(toggle.getAttribute('aria-controls'));
        const shouldOpen = toggle.getAttribute('aria-expanded') !== 'true';

        closeDetails();
        if (!shouldOpen || !panel) return;

        details.hidden = false;
        panel.hidden = false;
        toggle.setAttribute('aria-expanded', 'true');

        panel.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'nearest' });
      });
    });

    paper.querySelectorAll('.copy-citation').forEach((button) => {
      button.addEventListener('click', async () => {
        const citation = button.closest('.paper-citation')?.querySelector('code')?.textContent;
        const status = button.parentElement.querySelector('.copy-status');

        if (!citation) return;

        try {
          await copyText(citation);
          button.textContent = 'Copied';
          if (status) status.textContent = 'BibTeX copied to clipboard.';
        } catch (error) {
          button.textContent = 'Copy failed';
          if (status) status.textContent = 'Could not copy BibTeX.';
        }

        window.setTimeout(() => {
          button.textContent = 'Copy BibTeX';
          if (status) status.textContent = '';
        }, 1800);
      });
    });

    paper.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape' || details.hidden) return;
      const activeToggle = paper.querySelector('.paper-detail-toggle[aria-expanded="true"]');
      closeDetails();
      activeToggle?.focus();
    });
  });
}

// Initialize components when DOM is loaded
document.addEventListener('DOMContentLoaded', async () => {
  initializePublicationDetails();
  await loadComponent('header-placeholder', 'components/header.html');
  await loadComponent('footer-placeholder', 'components/footer.html');
  initializeNavigation();
  updateCopyrightYear();
});
