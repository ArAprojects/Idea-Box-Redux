class Idea {
  constructor(id, title, body, star, quality) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.star = true || false;
    this.quality = 1 //an integer on the instance? [i]? default to 0

  }

  saveToStorage(inputArray) {
    console.log('save storage array: ' + inputArray);
    var stringifiedContact = JSON.stringify(inputArray);
    // localStorage.setItem('cardInfo', stringifiedContact);
    localStorage.setItem(inputArray[0].id, stringifiedContact);

 }

  deleteFromStorage(cardID) {
    console.log('deleteFromStorage: ' + cardID);
    localStorage.removeItem(cardID);
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

