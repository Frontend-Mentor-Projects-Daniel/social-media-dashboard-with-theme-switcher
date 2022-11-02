const colorThemes = document.querySelectorAll(
  '[name="theme"]'
) as NodeListOf<HTMLInputElement>;

// store theme
const storeTheme = (theme: string): void => {
  localStorage.setItem('theme', theme);
};

// for setting the saved theme
const setTheme = (): void => {
  const activeTheme: string | null = localStorage.getItem('theme');

  if (typeof activeTheme === 'string') {
    colorThemes.forEach((themeOption) => {
      if (themeOption.id === activeTheme) {
        themeOption.checked = true;
      }
    });

    // fallback for no :has() support
    document.documentElement.className = activeTheme;
  }
};

// apply theme
colorThemes.forEach((themeOption) => {
  themeOption.addEventListener('click', () => {
    storeTheme(themeOption.id);
  });
});

// apply saved them
window.addEventListener('DOMContentLoaded', () => {
  setTheme();
});
