fetch('/assets/html-modules/header.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response not ok: ' + response.statusText);
        }

        return response.text();
    })

    .then(data => {
        document.body.insertAdjacentHTML("afterbegin", data);
    })

    .catch(error => {
        console.error('header fetch error', error);
    });

const footerLoadedEvent = new Event('footerLoaded');
fetch('/assets/html-modules/footer.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response not ok: ' + response.statusText);
        }

        return response.text();
    })

    .then(data => {
        document.querySelector("body script").insertAdjacentHTML("beforebegin", data);
        document.dispatchEvent(footerLoadedEvent);
    })

    .catch(error => {
        console.error('footer fetch error', error);
    });