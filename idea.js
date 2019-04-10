class Idea {
  constructor(id, title, body, star, quality) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.star = true || false;
    this.quality = 'Swill';
 


  }
  saveToStorage(inputArray, arrayIndex) {
      var stringifiedContact = JSON.stringify(inputArray);
      // localStorage.setItem(inputArray[0].id, stringifiedContact);
      localStorage.setItem('cardArray', stringifiedContact);
  }

  deleteFromStorage(deleteCard) {
    // console.log('deleteFromStorage: ' + deleteCard);
    var getCardArray = localStorage.getItem('cardArray');
    var deleteArray = JSON.parse(getCardArray);
    // console.log(cardArray.length);
    var filteredArray = deleteArray.filter(cardArray => cardArray.id !== parseInt(deleteCard));
    // console.log(filteredArray.length);
    cardArray = filteredArray;
    var stringifiedCardArray = JSON.stringify(filteredArray);
    // console.log(stringifiedCardArray);
    localStorage.setItem('cardArray', stringifiedCardArray);
    console.log('cardarray length' + cardArray.length);
    return cardArray;

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
