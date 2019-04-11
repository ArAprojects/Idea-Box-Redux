var titleInput = document.querySelector('.idea-title');
var bodyInput = document.querySelector('.card-body-text');
var quality = ["Swill", "Plausible", "Genius"];

class Idea {
  constructor(id, title, body, star, quality) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.star = false || true;
    this.quality = quality;
  }

  qualityUp() {
    var currentQuality = quality.indexOf(this.quality);
    if (currentQuality < quality.length -1) {
      var newQuality = currentQuality + 1;
      this.quality = quality[newQuality];
    }
  }

  qualityDown() {
    var currentQuality = quality.indexOf(this.quality);
    if (currentQuality > 0) {
      var newQuality = currentQuality - 1;
      this.quality = quality[newQuality];
    }
  }

  saveToStorage(inputArray, arrayIndex) {
    var stringifiedContact = JSON.stringify(inputArray);
    localStorage.setItem('cardArray', stringifiedContact);
  }

  deleteFromStorage(deleteCard) {
    var arrayIndx = 0;
    var getCardArray = localStorage.getItem('cardArray');
    var deleteArray = JSON.parse(getCardArray);
    var filteredArray = deleteArray.filter(cArray => cArray.id !== parseInt(deleteCard));
    cardArray= [];
    filteredArray.forEach(function(el) {
      idea = new Idea(el.id, el.title, el.body);
      cardArray[arrayIndx] = idea;
      arrayIndx++;
  });

    cardArrayIndx--;
    var stringifiedCardArray = JSON.stringify(cardArray);
    localStorage.setItem('cardArray', stringifiedCardArray);
  }

  updateIdea(cardID) {
    var getUpdateIdea = localStorage.getItem(cardID);
    var parsedCardInfo = JSON.parse(getUpdateIdea);
  }

  updateQuality(cardID) {
    var getUpdateQuality = localStorage.getItem(cardID);
    var parsedCardInfo = JSON.parse(getUpdateQuality);
  }
}
