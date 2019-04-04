
// ---------------Query-selectors--------------------//
// var card = document.querySelector(".card")
var deleteButton = document.querySelector(".delete-card-button");
var bottomDisplay = document.querySelector(".bottom-display");

var cardTitleInput = document.querySelector("#card-title-input");
var cardBodyInput = document.querySelector("#text-body-input");
var saveIdeaButton = document.querySelector(".save-button");

// ---------------Event-listeners---------------------//
bottomDisplay.addEventListener('click', deleteCard);
cardTitleInput.addEventListener('keyup', checkCardInputs);
cardBodyInput.addEventListener('keyup', checkCardInputs);
// window.addEventListener('load', setup(), true);


//-----------------Functions-------------------//
  function deleteCard(e) {
  if (e.target.className === "delete-card-button") {
    e.target.closest(".card").remove();
  }
};
 
// //Function to set button status on page load
// function setup() {
//   saveIdeaButton.disabled = true;
// }

function checkCardInputs () {
  var TitleInput = cardTitleInput.value;
  var BodyInput = cardBodyInput.value;

  if (TitleInput === "" || BodyInput === "") {
    saveIdeaButton.disabled = true;
    console.log('Save button disabled');
  } else {
    saveIdeaButton.disabled = false;
    console.log('Save Button sb lit!');
  }


}


var objectArrayOfIdeas = [];

