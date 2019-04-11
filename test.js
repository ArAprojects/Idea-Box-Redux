var saveBtn = document.querySelector('.save-button');
var createInputs = document.querySelector('.create-card-inputs');
var card = document.querySelector('.bottom-display');
var blankCard = document.querySelector('.blank-card');
var ideas = JSON.parse(localStorage.getItem('ideas')) || [];

saveBtn.addEventListener('click', addIdea);
card.addEventListener('submit', createCard);

function addIdea(e) {
  e.preventDefault();
  const id = Date.now();
  const title = (this.querySelector('.card-body-title'));
  const body = (this.querySelector('.card-body-text'));
  const star = (this.querySelector('.star-card-button'));
  const quality = (this.querySelector('.quality-level-selection'));
  const idea = new Idea(id, title, body, star, quality)
  ideas.push(idea);
  createCard(ideas, card);
  localStorage.setItem('ideas', JSON.stringify(ideas));
  createInputs.reset();
}

function createCard(ideas, card) {
  card.innerHTML = ideas.map((idea, i) => {
    return `
    <aside class="card">
    <div class="card-title">
      <img class="star-card-button" src="assets/star.svg" alt="">
      <img class="delete-card-button" src="assets/delete.svg" alt="">
    </div>
    <div class="card-body-title">
      <h3 class="idea-title" contenteditable="true">${idea.title}</h3>
      <p class="card-body-text" contenteditable="true">${idea.body}</p>
    </div>
    <div class="card-footer">
      <img class="up-quality-button" src="assets/upvote.svg" alt="">
      <h4>Quality:<span class="quality-level-selection">Swill</span></h4>
      <img class="down-quality-button" src="assets/downvote.svg" alt="">
    </div>
  </aside>
    `;
  }).join('');
}

card.addEventListener('submit', addIdea);
createCard(ideas, card);

function displayBlankCard() {
   console.log(cardArray.length)
if (cardArray.length === 0) {
blankCard.classList.remove('displayEmpty');
  }
}





























// console.log("hello");


// var list = document.querySelector(".grab");

// var button = document.querySelector('button');
// var input = document.querySelector('input');

// button.addEventListener('click', function() {
//   var listItem = document.createElement("li");
//   listItem.innerHTML = input.value;
//   list.appendChild(listItem);
//   localStorage.setItem("item1", input.value);
// });
