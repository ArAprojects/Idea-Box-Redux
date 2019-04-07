
// ---------------Query-selectors-------  -------------------//
var deleteButton = document.querySelector(".delete-card-button");
var bottomDisplay = document.querySelector(".bottom-display");
var cardTitleInput = document.querySelector("#card-title-input");
var cardBodyInput = document.querySelector("#text-body-input");
var saveButton = document.querySelector(".save-button");
var cardArray = [];
var cardArrayCntr = 0;

// ---------------Event-listeners---------------------------//
bottomDisplay.addEventListener('click', deleteCard);
saveButton.addEventListener('click', createIdeaCard);
saveButton.addEventListener('click', saveCardInfo);
saveButton.addEventListener('click', resetInputs);
saveButton.addEventListener('click', checkCardInputs);
cardTitleInput.addEventListener('keyup', checkCardInputs);
cardBodyInput.addEventListener('keyup', checkCardInputs);


//-----------------Functions-------------------------------//

 function saveCardInfo(e){
   var cardID = Date.now();
  //  var cardTitle = "This is the day";
  //  var cardBody = "Your life will surely change";
    var cardTitle = cardTitleInput.value;
   var cardBody = cardBodyInput.value;
   console.log('Card body value is: ' + cardBodyInput.value);

  idea = new Idea(cardID, cardTitleInput.value, cardBodyInput.value);
  cardArray[cardArrayCntr] = idea;

  idea.saveToStorage(cardArray);

}

//----------------clearing-inputs-------------//
function resetInputs(){
    cardBodyInput.value = "";
    cardTitleInput.value = "";
}



//------------------append-card---------------//
function createIdeaCard() {
  bottomDisplay.innerHTML = `
  <aside class="card">
    <div class="card-title">
      <img class="star-card-button" src="assets/star.svg" alt=""></button>
      <img class="delete-card-button" src="assets/delete.svg" alt="">
    </div>
    <div class="card-body-title">
      <h3 class="idea-title" contenteditable="true">${cardTitleInput.value}</h3>
      <p class="card-body-text" contenteditable="true">${cardBodyInput.value}</p>
    </div>
    <div class="card-footer">
      <img class="up-quality-button" src="assets/upvote.svg" alt="">
      <h4>Quality:<span class="quality-level-selection">placeholder</span></h4>
      <img class="down-quality-button" src="assets/downvote.svg" alt="">
    </div>
  </aside>

  ` + bottomDisplay.innerHTML;
}


//-----------------delete-card----------------//
  function deleteCard(e) {
  if (e.target.className === "delete-card-button") {
    e.target.closest(".card").remove();
    idea.deleteFromStorage(idea.id);
    // idea.updateQuality(idea.id);
  }
};

//-------------top-right-input-validation-------------//
function checkCardInputs () {
  var TitleInput = cardTitleInput.value;
  var BodyInput = cardBodyInput.value;

  if (TitleInput === "" || BodyInput === "") {
    saveButton.disabled = true;
    console.log('Save button disabled');
  } else {
    saveButton.disabled = false;
    console.log('Save Button sb lit!');
  }

}


var objectArrayOfIdeas = [];
