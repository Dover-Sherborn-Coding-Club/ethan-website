fetch('/assets/html-modules/header.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response not ok: ' + response.statusText);
        }

        return response.text();
    })

    .then(data => {
        const insertAt = document.getElementById('insert-header-here');
        insertAt.insertAdjacentHTML("afterend", data);

        insertAt.remove();
        currentScript.remove();
    })

    .catch(error => {
        console.error('header fetch error', error);
    });