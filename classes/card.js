class Card{
    static  suits = ["spades", "diamonds", "clubs", "hearts"];
    static  values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    constructor( value, suite, faceDown){
        this.value= value
        this.suite = suite
        this.faceDown = faceDown
    }
    getValue(){
        return this.vlaue
    }
    setValue(value){
         this.value = value
    }
    getSuit(){
        return this.value
    }
    setSuite(suite){
        this.suite = suite
    }
    getFaceDown(){
        return this.faceDown
    }
    setFaceDown(faceDown){
        this.faceDown = faceDown
    }

}
class Deck{
    constructor(){
        this.card = []
    }
    addCard(card){
        this.card.push(card)
    }
    getCard(){
        return this.card
    }
    draCard(){
        this.card.pop()
        return this.card
    }
    shuffle(){
        const deck = new Deck
        deck.generateDeck()
        const shuffledArray = this.card.sort((a, b) => 0.5 - Math.random());
        return shuffledArray
    }
    randCard(){
        const deck = new Deck
        console.log(deck.generateDeck())
       return  this.card.sort((a, b) => 0.5 - Math.random());
    }
     generateDeck(){
        const suits =  Card.suits
        const value = Card.values
        const deck = new Deck
        for(let i = 0; i < suits.length; i++)
        {
            for(let x = 2; x < value.length; x++)
            {
                let card = {Value: value[x], Suit: suits[i]};
                deck.addCard(card);
            }
        }
        return  this.card.sort((a, b) => 0.5 - Math.random());
       // return deck
    }
}

 module.exports = Deck