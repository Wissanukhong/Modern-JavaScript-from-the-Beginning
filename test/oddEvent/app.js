const liOdd = document.querySelectorAll('li:nth-child(odd)');

liOdd.forEach(function (listsOdd) {
  listsOdd.style.background = '#333';
  listsOdd.style.padding = '10px';
  listsOdd.style.color = '#fff';
});

const liEvent = document.querySelectorAll('li:nth-child(even)');

liEvent.forEach(function (listsLiEvent) {
  listsLiEvent.style.background = 'red';
  listsLiEvent.style.padding = '10px';
  listsLiEvent.style.color = '#fff';
});
