class Idea {
  constructor(id, title, body, star, quality) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.star = true || false;
    this.quality = 1 //an integer on the instance? [i]? default to 0

  }

  saveToStorage() {
    var cardInfo = {
      id: this.id,
      title: this.title,
      body: this.body,
      star: this.star,
      quality: this.quality
    }
    var stringifiedContact = JSON.stringify(cardInfo);
    console.log('Save to Storage ' + cardInfo); 
    // localStorage.setItem('cardInfo', stringifiedContact);
    localStorage.setItem(this.id, stringifiedContact);

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

