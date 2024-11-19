fetch('/assets/html-modules/footer.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response not ok: ' + response.statusText);
        }

        return response.text();
    })

    .then(data => {
        document.getElementsByTagName('footer')[0].innerHTML = data;
    })

    .catch(error => {
        console.error('footer fetch error', error);
    });