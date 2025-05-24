var elems = Array.from(document.querySelectorAll('main *, .fade-in'));
var elemsToSkip = [];

for(let i = 0; i < elems.length; i++) {
    if(elems[i].classList.contains("no-fade-in")) {
        elemsToSkip.push(elems[i]);
        continue;
    }

    elems[i].classList.add("fade-in-anim");
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const element = entry.target;

            element.classList.add('fade-in-running');

            element.addEventListener("animationend", () => {
                element.classList.remove('fade-in-running');
                element.classList.remove('fade-in-anim');

                element.classList.add('fade-in-end');
            }, { once: true });

            observer.unobserve(element);
        }
    });
}, 
//10% of element seen
{ threshold: 0.1 });

elems.forEach((element) => {
    if(elemsToSkip.includes(element)) {
        return;
    }
    
    observer.observe(element);
});