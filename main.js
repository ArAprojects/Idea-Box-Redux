
// ---------------Query-selectors-------  -------------------//
var deleteButton = document.querySelector(".delete-card-button");
var bottomDisplay = document.querySelector(".bottom-display");
var cardTitleInput = document.querySelector("#card-title-input");
var cardBodyInput = document.querySelector("#text-body-input");
var saveButton = document.querySelector(".save-button");
var searchBox = document.querySelector("#search-input");
let idea = new Idea ();
var blankCard = document.querySelector('.blank-card');
var cardArray = [];
var cardArrayIndx = 0;

// ---------------Event-listeners---------------------------//
window.addEventListener('load', setup(), true);
// bottomDisplay.addEventListener('click', updateCard);
bottomDisplay.addEventListener('click', deleteCard);
// saveButton.addEventListener('click', createIdeaCard);
saveButton.addEventListener('click', saveCardInfo);
saveButton.addEventListener('click', resetInputs);
saveButton.addEventListener('click', checkCardInputs);
cardTitleInput.addEventListener('keyup', checkCardInputs);
cardBodyInput.addEventListener('keyup', checkCardInputs);
searchBox.addEventListener('keyup', searchRealtime);


//-----------------Functions-------------------------------//

 function saveCardInfo(e){
   var cardID = Date.now();
   var cardTitle = cardTitleInput.value; 
   var cardBody = cardBodyInput.value;
  idea = new Idea(cardID, cardTitleInput.value, cardBodyInput.value);
  cardArray[cardArrayIndx] = idea;
  createIdeaCard(idea);
  idea.saveToStorage(cardArray, cardArrayIndx);
  console.log('cardArray after save2Storge: ' + cardArray);
  cardArrayIndx++;
}

//----------------clearing-inputs-------------//
function resetInputs(){
    cardBodyInput.value = "";
    cardTitleInput.value = "";
}

function createIdeaCard(create) {
  blankCard.classList.add('displayEmpty');
  bottomDisplay.innerHTML = `
  <aside class="card" data-cardIdentifier="${create.id}">
    <div class="card-title">
      <img class="star-card-button" src="assets/star.svg" alt="">
        <img class="delete-card-button" src="assets/delete.svg" alt="">
    </div>
    <div class="card-body-title">
      <h3 class="idea-title" contenteditable="true">${create.title}</h3>
      <p class="card-body-text" contenteditable="true">${create.body}</p>
      <p class="card-body-text" contenteditable="false">${create.id}</p>
    </div>
    <div class="card-footer">
      <img class="up-quality-button" src="assets/upvote.svg" alt="">
      <h4>Quality:<span class="quality-level-selection">Swill</span></h4>
      <img class="down-quality-button" src="assets/downvote.svg" alt="">
    </div>
  </aside>
  ` + bottomDisplay.innerHTML;
}

//-----------------delete-card----------------//
  function deleteCard(e) {
  if (e.target.className === "delete-card-button") { 
    var card = e.target.closest(".card");
    var rtr = idea.deleteFromStorage(card.dataset.cardidentifier);
    console.log('retyrnedArray is: ' + rtr);
    console.log('cardArray after deleteCard function: ' + cardArray);
    e.target.closest(".card").remove();
  }
};

//-------------top-right-input-validation-------------//
function checkCardInputs () {
  var titleInput = cardTitleInput.value;
  var bodyInput = cardBodyInput.value;
  if (titleInput === "" || bodyInput === "") {
    saveButton.disabled = true;
  } else {
    saveButton.disabled = false;
  }
}
//---------------------Adding / Deleting Blank Card from Bottom Display -----------//
function displayBlankCard() {
   console.log(cardArray.length)
if (cardArray.length === 0) {
blankCard.classList.remove('displayEmpty');
  }
}

//------------------Swill, Plausible, Genius Up/Down functionality-------------//

// function updateCard() {
//   if (e.target.className === "delete-card-button") {
//     deleteCard();
//   }
//   if (e.target.className === 'up-quality-button' || 'down-quality-button') {
//     updateCardQuality();
//   }
//   if (e.target.className === 'star-card-button') {
//     star();
//   }
// }

// function updateCardQuality(e) {
    // var cardQuality = document.querySelector("card-quality");
    // cardQuality.innerText = cardArray.quality.value;
// }

function searchRealtime(subStrInput){
  // alert('Searching');
  var subString = searchBox.value;
  var searchArray = cardArray;
  console.log('Card array is: ' + cardArray);
  console.log('Search input value = ' + subString);
}
function setup() {
  if(localStorage.getItem('cardArray')){
    var getCardArray = localStorage.getItem('cardArray');
    // console.log('Get from local storage: ' + getUpdateIdea);
    var currentCardsInfo = JSON.parse(getCardArray);
    currentCardsInfo.forEach(function(idea){
      createIdeaCard(idea);  
      // cardArray.push(idea);
      idea = new Idea(idea.id, idea.title, idea.body);
      cardArray[cardArrayIndx] = idea;
      cardArrayIndx++;
    });
  }
}



