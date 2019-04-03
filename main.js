
// ---------------Query-selectors--------------------//
// var card = document.querySelector(".card")
var deleteButton = document.querySelector(".delete-card-button");
var bottomDisplay = document.querySelector(".bottom-display");

// ---------------Event-listeners---------------------//
bottomDisplay.addEventListener('click', deleteCard);


//-----------------Functions-------------------//
  function deleteCard(e) {
  if (e.target.className === "delete-card-button") {
    e.target.closest(".card").remove();
  }
};


var objectArrayOfIdeas = [];

