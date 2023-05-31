const btn = document.getElementById('faleConosco');

function change() {
    btn.style.backgroundColor = '#f98901';
    btn.style.color = '#FFFFFF';
    btn.style.transform = 'translateY(-8px)';
    btn.style.transitionDuration = '1s';
}

function back() {
    btn.style.backgroundColor = '#C07212';
    btn.style.color = '#FFFFFF';
    btn.style.transform = 'none';
}