const btn = document.getElementById('faleConosco');

function btnChange() {
    btn.style.backgroundColor = '#f98901';
    btn.style.color = '#FFFFFF';
    btn.style.transform = 'translateY(-8px)';
    btn.style.transitionDuration = '1s';
}

function btnBack() {
    btn.style.backgroundColor = '#C07212';
    btn.style.color = '#FFFFFF';
    btn.style.transform = 'none';
}