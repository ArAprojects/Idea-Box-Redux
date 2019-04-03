
// ---------------Query-selectors-------  -------------------//
var deleteButton = document.querySelector(".delete-card-button");
var bottomDisplay = document.querySelector(".bottom-display");
var cardTitle = document.querySelector("#card-title-input");
var cardBody = document.querySelector("#text-body-input");
var saveButton = document.querySelector(".save-button")


// ---------------Event-listeners---------------------------//
bottomDisplay.addEventListener('click', deleteCard);
saveButton.addEventListener('click', createIdeaCard);



//-----------------Functions-------------------------------//


//------------------append-card---------------//
function createIdeaCard() {
  bottomDisplay.innerHTML = `
  <aside class="card">
    <div class="card-title">
      <button class="star-card-button" type="button" name="button">X</button>
      <button class="delete-card-button" type="button" name="button">X</button>
    </div>
    <div class="card-body-title">
      <h3 class="idea-title">${cardTitle.value}</h3>
      <p class="card-body-text">${cardBody.value}</p>
    </div>
    <div class="card-footer">
      <button class="up-quality-button" type="button" name="button">X</button>
      <h4>Quality:<span class="quality-level-selection">placeholder</span></h4>
      <button class="down-quality-button" type="button" name="button">X</button>
    </div>
  </aside>

  ` + bottomDisplay.innerHTML;

}



//-----------------delete-card----------------//
  function deleteCard(e) {
  if (e.target.className === "delete-card-button") {
    e.target.closest(".card").remove();
  }
};


var objectArrayOfIdeas = [];
