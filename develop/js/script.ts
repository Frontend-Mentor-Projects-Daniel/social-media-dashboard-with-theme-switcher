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
    // check matching radio button
    colorThemes.forEach((themeOption) => {
      if (themeOption.id === activeTheme) {
        themeOption.checked = true;

        // apply theme for firefox and other browsers that don't support :has()
        document.body.className = themeOption.id;
      }
    });
  }
};

// apply theme
colorThemes.forEach((themeOption) => {
  themeOption.addEventListener('click', () => {
    storeTheme(themeOption.id);

    // apply theme for firefox and other browsers that don't support :has()
    document.body.className = themeOption.id;
  });
});

// apply saved them
window.addEventListener('DOMContentLoaded', setTheme);
