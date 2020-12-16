document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    // Create an XHR Object
    const xhr = new XMLHttpRequest();

    // Open
    xhr.open('GET', 'data.txt', true);

    // Onload
    xhr.onload = function () {
        if (this.status === 200) {
            // console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }

    // xhr.onreadystatechange = function () {
    //     console.log('READYSTATE', xhr.readyState); 
    // เราสามารถใช้คำสั่งนี้ในการตรวจเช็คค่า  readyStaet value ได้
    //     if (this.status === 200 && this.readyState === 4) {
    //         console.log(this.responseText);
    //     }
    // }

    // Error
    xhr.error = function () {
        console.log('Request error...');
    }

    // send
    xhr.send();
}