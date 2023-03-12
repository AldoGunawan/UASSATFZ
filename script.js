let text = document.getElementById('textt');
let gateLeft = document.getElementById('gate-left');
let gateRight = document.getElementById('gate-right');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    textt.style.marginTop = value * 2.5 + 'px';
    gateLeft.style.left = value * 0.5 + 'px';
    textt.style.marginTop = value * 2.5 + 'px';
})