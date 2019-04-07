
// ---------------Query-selectors-------  -------------------//
var deleteButton = document.querySelector(".delete-card-button");
var bottomDisplay = document.querySelector(".bottom-display");
var cardTitleInput = document.querySelector("#card-title-input");
var cardBodyInput = document.querySelector("#text-body-input");
var saveButton = document.querySelector(".save-button");
var cardArray = [];
var cardArrayIndx = 0;

// ---------------Event-listeners---------------------------//
bottomDisplay.addEventListener('click', deleteCard);
// saveButton.addEventListener('click', createIdeaCard);
saveButton.addEventListener('click', saveCardInfo);
saveButton.addEventListener('click', resetInputs);
saveButton.addEventListener('click', checkCardInputs);
cardTitleInput.addEventListener('keyup', checkCardInputs);
cardBodyInput.addEventListener('keyup', checkCardInputs);


//-----------------Functions-------------------------------//

 function saveCardInfo(e){
   var cardID = Date.now();
    var cardTitle = cardTitleInput.value; 
   var cardBody = cardBodyInput.value;
   console.log('Card body value is: ' + cardBodyInput.value);

  idea = new Idea(cardID, cardTitleInput.value, cardBodyInput.value);
  cardArray[cardArrayIndx] = idea;
  createIdeaCard(idea);
  // console.log('card array index is: ' + cardArrayIndx);
  idea.saveToStorage(cardArray, cardArrayIndx);
  cardArrayIndx++;

}

//----------------clearing-inputs-------------//
function resetInputs(){
    cardBodyInput.value = "";
    cardTitleInput.value = "";
}



//------------------append-card---------------//
// function createIdeaCard() {
//   bottomDisplay.innerHTML = `
//   <aside class="card">
//     <div class="card-title">
//       <button class="star-card-button" type="button" name="button">X</button>
//       <button class="delete-card-button" type="button" name="button">X</button>
//     </div>
//     <div class="card-body-title">
//       <h3 class="idea-title" contenteditable="true">${cardTitleInput.value}</h3>
//       <p class="card-body-text" contenteditable="true">${cardBodyInput.value}</p>
//     </div>
//     <div class="card-footer">
//       <button class="up-quality-button" type="button" name="button">X</button>
//       <h4>Quality:<span class="quality-level-selection">placeholder</span></h4>
//       <button class="down-quality-button" type="button" name="button">X</button>
//     </div>
//   </aside>

//   ` + bottomDisplay.innerHTML;
// }

function createIdeaCard(create) {
  console.log(create);
  bottomDisplay.innerHTML = `
  <aside class="card">
    <div class="card-title">
      <img class="star-card-button" src="assets/star.svg" alt=""></button>
      <img class="delete-card-button" src="assets/delete.svg" alt="">
    </div>
    <div class="card-body-title">
      <h3 class="idea-title" contenteditable="true">${create.title}</h3>
      <p class="card-body-text" contenteditable="true">${create.body}</p>
      <p class="card-body-text" contenteditable="false">${create.id}</p>
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
  var titleInput = cardTitleInput.value;
  var bodyInput = cardBodyInput.value;

  if (titleInput === "" || bodyInput === "") {
    saveButton.disabled = true;
    // console.log('Save button disabled');
  } else {
    saveButton.disabled = false;
    // console.log('Save Button sb lit!');
  }

}


var objectArrayOfIdeas = [];
