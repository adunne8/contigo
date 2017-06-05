const copyDate = document.querySelector('.copydate');
const date = new Date();
var year = date.getFullYear();

copyDate.innerHTML = year;
