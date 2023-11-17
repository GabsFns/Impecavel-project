document.getElementById('btnToggle').addEventListener('click', function() {
    toggleMenu();
});

function toggleMenu() {
    var menu = document.getElementById('menu');
    if (menu.style.width === '250px') {
        menu.style.width = '0';
    } else {
        menu.style.width = '250px';
    }
}

