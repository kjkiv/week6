const SUITS = ["S", "C", "H", "D"]
const VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]


 export default class Deck{

    constructor(cards = freshDeck()) {
        this.cards = cards
    }

    get numberOfCards() {
        return this.cards.length
    }

    shuffle() {
       for (let i = this.numberOfCards -1; i > 0; i--) {
        const newIndex = Math.Floor(Math.random() * (i + 1))
        const oldValue = this.cards[newIndex]
        this.cards[newIndex] = this.cards[i]
        this.cards[i] = oldValue
       }
    }
}

class Card {
   constructor(suit, value) {
    this.suit = suit
    this.value = value
   } 
}





function freshDeck() {
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit, value)
        })
    })
}

var Player1 = new Player("Player 1");
var Player2 = new Player("Player 2");

startGame(
    function startGame() {
        const deck = new Deck()
        deck. shuffle()

        const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
        Player1Deck = new Deck (deck.cards.slice(0, deckMidpoint))
        Player2Deck = new Deck (deck.cards.slice(deckMidpoint, deck.numberOfCards))

        


    }
)