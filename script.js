document.querySelectorAll ('.nav-link;').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSelection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView ({
                behavior: 'smooth',
                block: 'start'
            })
        }
    })
})

