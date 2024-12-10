document.addEventListener("footerLoaded", () => {
    const elements = document.querySelectorAll('body *:not(.no-fade-in *)');

    document.getElementsByTagName('header')[0].style.animationPlayState = "running";

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = "running";

                entry.target.addEventListener("animationend", () => {
                    entry.target.style.animation = "none";
                }, { once: true });

                observer.unobserve(entry.target);
            }
        });
        //10% of element seen
    }, { threshold: 0.1 });

    elements.forEach((el) => {
        observer.observe(el);
    });
});