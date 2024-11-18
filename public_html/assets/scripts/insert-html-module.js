const scriptElement = document.currentScript;

function insertHTMLModule(location) {
    fetch(location)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response not ok: ' + response.statusText);
        }

        return response.text();
    })

    .then(data => {
        var header =
        scriptElement.insertAdjacentElement()
        document.getElementsByTagName('footer')[0].innerHTML = data;

        document.getElementById('footer-insert').remove();
    })

    .catch(error => {
        console.error('footer fetch error', error);
    });
}

