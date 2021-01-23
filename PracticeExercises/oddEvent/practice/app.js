let listOdd = document.querySelectorAll('li:nth-child(odd)');

listOdd.forEach((list) => {
  list.style.background = 'red';
});

const listEven = document.querySelectorAll('li:nth-child(even)');

listEven.forEach(function (even) {
  even.style.background = 'green';
});
