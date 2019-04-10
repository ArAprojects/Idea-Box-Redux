var titleInput = document.querySelector('.idea-title');
var bodyInput = document.querySelector('.card-body-text');
var quality = ["Swill", "Plausible", "Genius"];

class Idea {
  constructor(id, title, body, star, quality) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.star = true || false;
    this.quality = quality;
 


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
      // localStorage.setItem(inputArray[0].id, stringifiedContact);
      localStorage.setItem('cardArray', stringifiedContact);
  }

  deleteFromStorage(deleteCard) {
    // console.log('deleteFromStorage: ' + deleteCard);
    var getCardArray = localStorage.getItem('cardArray');
    var cardArray = JSON.parse(getCardArray);
    // console.log(cardArray.length);
    var filteredArray = cardArray.filter(cardArray => cardArray.id !== parseInt(deleteCard));
    // console.log(filteredArray.length);
    var stringifiedCardArray = JSON.stringify(filteredArray);
    // console.log(stringifiedCardArray);
    localStorage.setItem('cardArray', stringifiedCardArray);
    console.log(cardArray.length)
    displayBlankCard();
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
