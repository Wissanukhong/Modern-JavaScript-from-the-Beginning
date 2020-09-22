// odd เลขคี่
// Even เลขคู่
const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li) {
    li.style.background = '#ccc';
});

liEven.forEach(function(li) {
    li.style.background = '#f4f4f4';
});