window.onload = function(){
    let checkbox = document.querySelector('#switchTheme');
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.querySelector('html').classList.add('dark');
    checkbox.checked = true;
    } else {
    document.querySelector('html').classList.remove('dark');
    checkbox.checked = false;
    }
}
