document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("a.menu");
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            const targetUrl = this.getAttribute("href");
            if (targetUrl && targetUrl !== "#") {
                event.preventDefault();
                document.body.classList.add("fade-out");
                setTimeout(function() {
                    window.location.href = targetUrl;
                }, 500);
            }
        });
    });
});