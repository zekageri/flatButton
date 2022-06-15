var flatBtns = document.querySelectorAll('.flatBtn');

for (const flatBtn of flatBtns) {
    flatBtn.addEventListener('click', function () {
        this.classList.toggle('active');
    });
}