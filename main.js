
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
// deleteButton.addEventListener('mouseover', activate);


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
function createIdeaCard(create) {
  console.log(create);
  bottomDisplay.innerHTML = `
  <aside class="card">
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
      <h4>Quality:<span class="quality-level-selection">placeholder</span></h4>
      <img class="down-quality-button" src="assets/downvote.svg" alt="">
    </div>
  </aside>

  ` + bottomDisplay.innerHTML;
}

//-----------------delete-card----------------//
  function deleteCard(e) {
  if (e.target.classList.contains("delete-card-button")) {
    e.target.closest(".card").remove();
    idea.deleteFromStorage(idea.id);
    // idea.updateQuality(idea.id);
  }
};

//-----------activate-status-icons-------------//
bottomDisplay.addEventListener('mouseover', e => {
  if(e.target.classList.contains('delete-card-button')) {
  e.target.closest(".delete-card-button").setAttribute('src', 'assets/delete-active.svg');
  }
})

bottomDisplay.addEventListener('mouseout', e => {
  if(e.target.classList.contains('delete-card-button')) {
  e.target.closest(".delete-card-button").setAttribute('src', 'assets/delete.svg');
  }
})

bottomDisplay.addEventListener('mouseover', e => {
  if(e.target.classList.contains('up-quality-button')) {
  e.target.closest(".up-quality-button").setAttribute('src', 'assets/upvote-active.svg');
  }
})

bottomDisplay.addEventListener('mouseout', e => {
  if(e.target.classList.contains('up-quality-button')) {
  e.target.closest(".up-quality-button").setAttribute('src', 'assets/upvote.svg');
  }
})

bottomDisplay.addEventListener('mouseover', e => {
  if(e.target.classList.contains('down-quality-button')) {
  e.target.closest(".down-quality-button").setAttribute('src', 'assets/downvote-active.svg');
  }
})

bottomDisplay.addEventListener('mouseout', e => {
  if(e.target.classList.contains('down-quality-button')) {
  e.target.closest(".down-quality-button").setAttribute('src', 'assets/downvote.svg');
  }
})


bottomDisplay.addEventListener('click', e => {
  e.target.closest(".star-card-button").getAttribute('src') === 'assets/star.svg' ?
  e.target.closest(".star-card-button").setAttribute('src', 'assets/star-active.svg') :
  e.target.closest(".star-card-button").setAttribute('src', 'assets/star.svg')
})









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

// document.getElementById('job').innerHTML = localStorage['job'] || 'Job Title';
 // document.getElementById('email').innerHTML = localStorage['email'] || 'Email/Other';

 // setInterval(function() {
 //      localStorage['job'] = document.getElementById('job').innerHTML;
 //      localStorage['email'] = document.getElementById('email').innerHTML;
 // }, 20 * 1000);
