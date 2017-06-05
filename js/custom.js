const date = new Date();

//get date forcopywrite
const copyDate = document.querySelector('.copydate');
var year = date.getFullYear();
copyDate.innerHTML = year;
