document.getElementById('click').addEventListener('click', loadData);

function loadData() {
    // Create an XHR object
    const xhr = new XMLHttpRequest();

    // Open http
    xhr.open('GET', 'data.txt', true);

    // Onload
    xhr.onload = function () {
        if (this.status === 200) {
            document.getElementById('output').innerHTML = `<p>${this.responseText}</p>`
            // console.log(this.responseText);
        }
    }

    // Error
    xhr.error = function () {
        console.log('Something with wrong');
    }

    // Send
    xhr.send();
}