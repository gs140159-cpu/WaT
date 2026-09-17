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
});
