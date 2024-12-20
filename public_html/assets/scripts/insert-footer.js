const footerLoadedEvent = new Event('footerLoaded');

fetch('/assets/html-modules/footer.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response not ok: ' + response.statusText);
        }

        return response.text();
    })

    .then(data => {
        const insertAt = document.getElementById('insert-footer-here');
        insertAt.insertAdjacentHTML("afterend", data);

        insertAt.remove();
        //document.currentScript.remove();

        document.dispatchEvent(footerLoadedEvent);
    })

    .catch(error => {
        console.error('footer fetch error', error);
    });