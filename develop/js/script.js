var colorThemes = document.querySelectorAll('[name="theme"]');
// store theme
var storeTheme = function (theme) {
    localStorage.setItem('theme', theme);
};
// for setting the saved theme
var setTheme = function () {
    var activeTheme = localStorage.getItem('theme');
    if (typeof activeTheme === 'string') {
        // check matching radio button
        colorThemes.forEach(function (themeOption) {
            if (themeOption.id === activeTheme) {
                themeOption.checked = true;
                // apply theme for firefox and other browsers that don't support :has()
                document.body.className = themeOption.id;
            }
        });
    }
};
// apply theme
colorThemes.forEach(function (themeOption) {
    themeOption.addEventListener('click', function () {
        storeTheme(themeOption.id);
        // apply theme for firefox and other browsers that don't support :has()
        document.body.className = themeOption.id;
    });
});
// apply saved them
window.addEventListener('DOMContentLoaded', setTheme);
