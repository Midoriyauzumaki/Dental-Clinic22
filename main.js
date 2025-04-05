// main.js

document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners and dynamic content updates here

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetPage = this.getAttribute('href');
            loadPage(targetPage);
        });
    });

    function loadPage(page) {
        fetch(page)
            .then(response => response.text())
            .then(data => {
                document.querySelector('#content').innerHTML = data;
            })
            .catch(error => console.error('Error loading page:', error));
    }
});