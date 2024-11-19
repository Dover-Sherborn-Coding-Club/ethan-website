fetch('/assets/html-modules/header.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response not ok: ' + response.statusText);
        }

        return response.text();
    })

    .then(data => {
        document.getElementsByTagName('header')[0].innerHTML = data;
    })

    .catch(error => {
        console.error('header fetch error', error);
    });