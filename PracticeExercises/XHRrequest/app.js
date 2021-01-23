document.getElementById('click').addEventListener('click', loadData);

function loadData() {
    // Create XHR object
    const xhr = new XMLHttpRequest();

    // XHR open
    xhr.open('GET', 'data.txt', true);
    console.log(1);

    // XHR onload
    xhr.onload = function () {
        if (this.status === 200) {
            document.getElementById('output').innerHTML = `<p>${this.responseText}</p>`
        }
    }

    // XHR Error
    xhr.error = function () {
        console.log('Something with wrong');
    }

    // XHR send
    xhr.send();
}