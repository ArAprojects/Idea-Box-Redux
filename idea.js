class Idea {
  constructor(id, title, body, star, quality) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.star = true || false;
    this.quality = 0;

  }

  saveToStorage(inputArray, arrayIndex) {
    // console.log('save storage array: ' + inputArray);
    if (arrayIndex == 0) {
      var stringifiedContact = JSON.stringify(inputArray);
      console.log('Array index is: ' + arrayIndex);
       localStorage.setItem(inputArray[0].id, stringifiedContact);
    } else {
      var getUpdateIdea = localStorage.getItem(inputArray[0].id);
      // console.log('Get from local storage: ' + getUpdateIdea);
      var currentCardInfo = JSON.parse(getUpdateIdea);
      // console.log(currentCardInfo);
      currentCardInfo.push(inputArray);
      // console.log('Updated array: ' + currentCardInfo);
      var stringifiedContact = JSON.stringify(inputArray);
      console.log('Array index is: ' + arrayIndex);
       localStorage.setItem(inputArray[0].id, stringifiedContact);
 
    }

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

