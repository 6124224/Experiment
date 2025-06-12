const sidebar = document.querySelector('.sidebar');
const btn     = document.querySelector('.toggle-btn');

btn.addEventListener('click', () => {
  // for desktop collapse/expand
  sidebar.classList.toggle('collapsed');
  // for mobile slide-in/out
  sidebar.classList.toggle('open');
});
