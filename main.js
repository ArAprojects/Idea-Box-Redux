
// ---------------Query-selectors-------  -------------------//
var deleteButton = document.querySelector(".delete-card-button");
var bottomDisplay = document.querySelector(".bottom-display");
var cardTitleInput = document.querySelector("#card-title-input");
var cardBodyInput = document.querySelector("#text-body-input");
var saveButton = document.querySelector(".save-button");
let idea = new Idea ();
var blankCard = document.querySelector('.blank-card');
var cardArray = [];
var cardArrayIndx = 0;

// ---------------Event-listeners---------------------------//


window.addEventListener('load', setup(), true);
bottomDisplay.addEventListener('click', deleteCard);
bottomDisplay.addEventListener('click', updateCard);
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
  idea = new Idea(cardID, cardTitleInput.value, cardBodyInput.value, false, quality[0]);
  cardArray[cardArrayIndx] = idea;
  createIdeaCard(idea);
  idea.saveToStorage(cardArray, cardArrayIndx);
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
      <h4>Quality: <span class="quality-level-selection">Swill</span></h4>
      <img class="down-quality-button" src="assets/downvote.svg" alt="">
    </div>
  </aside>
  ` + bottomDisplay.innerHTML;
}

//-----------------delete-card----------------//
  function deleteCard(e) {
  if (e.target.className === "delete-card-button") {
  console.log(cardArray.length) 
    var card = e.target.closest(".card");
    idea.deleteFromStorage(card.dataset.cardidentifier);
    e.target.closest(".card").remove();
    
  }
};

//-------------top-right-input-validation-------------//
function checkCardInputs() {
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
    if (cardArray.length > 1) {
    blankCard.classList.remove('.displayEmpty');
    console.log(cardArray.length + "hi")
  }
}

//------------------Swill, Plausible, Genius Up/Down functionality-------------//
 function findId(e) {
   var currentCard = e.target.closest(".card");
   var currentId = parseInt(currentCard.getAttribute('data-cardIdentifier'))
   var ideaLocation = cardArray.findIndex(i => i.id === currentId)
   console.log(ideaLocation);
   return ideaLocation
 }

function updateCard(e) {
  if (e.target.className === 'up-quality-button') {
   var targetedCard = e.target.closest(".card");
   ideaLocation = findId(e);
   cardArray[ideaLocation].upVote()
   var qualityText = e.target.parentNode.childNodes[3].childNodes[1];
   qualityText.innerText = cardArray[ideaLocation].quality;
  } 
  if(e.target.className === 'down-quality-button') {
   var targetedCard = e.target.closest(".card");
   ideaLocation = findId(e);
   cardArray[ideaLocation].downVote()
   var qualityText = e.target.parentNode.childNodes[3].childNodes[1];
   qualityText.innerText = cardArray[ideaLocation].quality;
    ;
  }
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






