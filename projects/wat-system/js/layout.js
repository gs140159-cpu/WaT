document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('sidebar-nav');
  if (!nav) return;

  const activeKey = document.body.dataset.activeKey || '';

  nav.innerHTML = NAV_ITEMS.map((item) => {
    const href = item.href || `/pages/placeholder.html?key=${item.key}&title=${encodeURIComponent(item.label)}`;
    const activeClass = item.key === activeKey ? ' active' : '';
    return `<li><a class="nav-link${activeClass}" href="${href}">${item.label}</a></li>`;
  }).join('');

  const orderBtn = document.getElementById('order-create-btn');
  if (orderBtn && activeKey === 'order-create') {
    orderBtn.classList.add('active');
  }

  // Mobile: sidebar becomes an off-canvas drawer opened via a hamburger button.
  const header = document.querySelector('.header');
  if (header) {
    const menuBtn = document.createElement('button');
    menuBtn.type = 'button';
    menuBtn.className = 'menu-toggle';
    menuBtn.setAttribute('aria-label', 'メニューを開く');
    menuBtn.textContent = '☰';
    header.prepend(menuBtn);

    const overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    document.body.appendChild(overlay);

    menuBtn.addEventListener('click', () => document.body.classList.add('sidebar-open'));
    overlay.addEventListener('click', () => document.body.classList.remove('sidebar-open'));
  }
});
