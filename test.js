console.log("hello");


var list = document.querySelector(".grab");

var button = document.querySelector('button');
var input = document.querySelector('input');

button.addEventListener('click', function() {
  var listItem = document.createElement("li");
  listItem.innerHTML = input.value;
  list.appendChild(listItem);
  localStorage.setItem("item1", input.value);
});
