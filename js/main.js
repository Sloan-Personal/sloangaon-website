// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  }

  // Mark current nav link active
  const path = window.location.pathname.replace(/index\.html$/, '').replace(/\/$/, '') || '/';
  document.querySelectorAll('.main-nav a[href]').forEach(a => {
    const href = a.getAttribute('href').replace(/index\.html$/, '').replace(/\/$/, '') || '/';
    if (href === path) a.classList.add('active');
  });

  // Essay category filters (writing.html)
  const filterBtns = document.querySelectorAll('.essay-filters button');
  const essays = document.querySelectorAll('.essay-list article');
  if (filterBtns.length && essays.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.filter;
        essays.forEach(article => {
          const show = cat === 'all' || article.dataset.category === cat;
          article.style.display = show ? '' : 'none';
        });
      });
    });
  }

  // AJAX-submit any form with data-ajax="true" (FormSubmit-backed forms) so the
  // visitor gets an inline confirmation instead of leaving the site.
  document.querySelectorAll('form[data-ajax="true"]').forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn ? btn.textContent : '';
      if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' }
        });
        if (res.ok) {
          showToast(form.dataset.successMessage || 'Thanks — message sent.');
          form.reset();
        } else {
          showToast('Something went wrong. Please email sloangaon@gmail.com directly.');
        }
      } catch (err) {
        showToast('Something went wrong. Please email sloangaon@gmail.com directly.');
      } finally {
        if (btn) { btn.disabled = false; btn.textContent = original; }
      }
    });
  });
});

function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => toast.classList.remove('show'), 4000);
}
