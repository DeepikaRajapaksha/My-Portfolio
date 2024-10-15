export const toggleTheme = () => {
    // Toggles between dark and light theme
    const currentTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', currentTheme);
  };
  
  // To initialize the theme on page load based on localStorage
  export const initializeTheme = () => {
    if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
  