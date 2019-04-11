var titleInput = document.querySelector('.idea-title');
var bodyInput = document.querySelector('.card-body-text');
var quality = ["Swill", "Plausible", "Genius"];

class Idea {
  constructor(id, title, body, star, quality) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.star = false || true;
    this.quality = quality';
  }

  upVote() {
   var currentQualityIndex = quality.indexOf(this.quality)
   if (currentQualityIndex < quality.length -1) {
   var newQualityIndex = currentQualityIndex + 1
   this.quality = quality[newQualityIndex]
  }
 }
 
 downVote() {
   var currentQualityIndex = quality.indexOf(this.quality)
   if (currentQualityIndex > 0) {
   var newQualityIndex = currentQualityIndex - 1;
   this.quality = quality[newQualityIndex]
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
    //localStorage.clear();
    filteredArray.forEach(function(el) {
      idea = new Idea(el.id, el.title, el.body);
      cardArray[arrayIndx] = idea;
      arrayIndx++
    })
    
    cardArrayIndx--;
    var stringifiedCardArray = JSON.stringify(cardArray);
    localStorage.setItem('cardArray', stringifiedCardArray);
  }

  updateIdea(cardID) {
    var getUpdateIdea = localStorage.getItem(cardID);
    console.log('Get from local storage: ' + getUpdateIdea);
    var parsedCardInfo = JSON.parse(getUpdateIdea);
    console.log(parsedCardInfo);
  }

  updateQuality(cardID) { 
    var getUpdateQuality = localStorage.getItem(cardID);
    console.log('Get from you know where storage: ' + getUpdateQuality);
    var parsedCardInfo = JSON.parse(getUpdateQuality);
    console.log(parsedCardInfo);
  }
}
