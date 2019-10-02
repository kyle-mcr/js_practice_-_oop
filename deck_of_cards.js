class Deck {
  constructor() {
    this.deck = [];
    this.create();
    // this.reset();
    this.shuffle();
    // this.deal();
  }
  create() {
    const suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
    const values = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];

    for (let suit of suits) {
      for (let i = 0; i < values.length; i++) {
        this.deck.push(new Card(suit, values[i], i+1) );
      }
    }
  }
  reset() {
    this.deck = [];
    this.create()
  }
  shuffle() {
    const { deck } = this;
    let m = deck.length,
      i;

    while (m) {
      i = Math.floor(Math.random() * m--);

      [deck[m], deck[i]] = [deck[i], deck[m]];
    }
    // this.deck.sort(() => Math.random * -0.5)
    return this;
  }
  deal() {
    return this.deck.pop();
  }
}

class Card{
  constructor(suit, string_value, numerical_value) {
    this.suit = suit;
    this.string_value = string_value;
    this.numerical_value = numerical_value;
  }
  showInfo() {
    console.log(`This card is ${this.suit} of ${this.string}`);
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
    // this.draw();
  }
  draw(card) {
    this.hand.push(card);
    return this;
  }
  remove() {
      this.hand.pop();
      return this;
  }
}
const deck1 = new Deck();
const deck2 = new Deck();
const player1 = new Player("Kyle");
player1.draw(deck1.deal()).draw(deck2.deal());
console.log(player1.hand);
player1.remove();
console.log(player1.hand);
