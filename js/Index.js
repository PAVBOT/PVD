const indicator = document.querySelector('.indicator');
const items = document.querySelectorAll('nav ul li');
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

function handleIndicator(el) {
    items.forEach(item => {
        item.classList.remove('is-active');
        item.removeAttribute('style');
    });
    indicator.style.width = `${el.offsetWidth}px`;
    indicator.style.left = `${el.offsetLeft}px`;
    indicator.style.backgroundColor = el.getAttribute('active-color');
    el.classList.add('is-active');
    el.style.color = el.getAttribute('active-color');
}

items.forEach((item, index) => {
    item.addEventListener('click', (e) => { handleIndicator(e.target); });
    item.classList.contains('is-active') && handleIndicator(item);
});
window.addEventListener('resize', () => {
    const active = document.querySelector('.nav ul li.is-active');
    handleIndicator(active);
});
