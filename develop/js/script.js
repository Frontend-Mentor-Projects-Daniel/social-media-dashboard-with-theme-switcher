var colorThemes = document.querySelectorAll('[name="theme"]');
// store theme
var storeTheme = function (theme) {
    localStorage.setItem('theme', theme);
};
// for setting the saved theme
var setTheme = function () {
    var activeTheme = localStorage.getItem('theme');
    if (typeof activeTheme === 'string') {
        colorThemes.forEach(function (themeOption) {
            if (themeOption.id === activeTheme) {
                themeOption.checked = true;
            }
        });
        // fallback for no :has() support
        document.documentElement.className = activeTheme;
    }
};
// apply theme
colorThemes.forEach(function (themeOption) {
    themeOption.addEventListener('click', function () {
        storeTheme(themeOption.id);
    });
});
// apply saved them
window.addEventListener('DOMContentLoaded', function () {
    setTheme();
});
