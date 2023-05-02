document.querySelector('#burger').addEventListener('click', () => {
    document.querySelector('.aside').classList.toggle('active');
    document.querySelector('#burger').classList.toggle('active');
});