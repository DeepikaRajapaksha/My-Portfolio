export const toggleTheme = () => {
  const currentTheme = document.documentElement.classList.toggle('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);
  document.body.classList.toggle('dark');
};

// Initialize theme on load
export const initializeTheme = () => {
  if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    document.body.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
    document.body.classList.remove('dark');
  }
};
