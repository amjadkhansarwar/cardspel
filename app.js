const express = require('express')
const app = express()
const Deck = require('./classes/card.js')
const card = new Deck
app.get('/', (req, res)=>{
     let allcards = card.generateDeck()
    let randomcard = card.randCard()
    console.log(allcards)
    //res.send(randomcard)
})
app.listen(8000)