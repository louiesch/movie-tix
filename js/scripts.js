function Ticket(movie, time, age, price) { //creates an object called "ticket" with the following keys:
  this.movie = movie;
  this.time = time;
  this.age = age;
  this.price = price;
}

Ticket.prototype.modifyCost = function() { //this prototype is to adjust the price of the ticket
  if (this.movie === "Lord of the Rings" || this.movie === "Mad Max") {
    this.price -= 1;
  } else {
    this.price += 10;
  }

  if (this.time === "Noon") {
    this.price -= 1
  } else if (this.time === "Night") {
    this.price += 5
  }

  if (this.age < 10) {
    this.price -= 4
  } else if (this.age > 55) {
    this.price -= 3
  }
}

let n = new Ticket("Lord of the Rings", "Night", 15, 10)
n.modifyCost()
n


// function Ticket() {
//   this.prices = {};
// }

// function Price(films, times, ages) {
//   this.films = films;
//   this.times = times;
//   this.ages = ages;
// }

// function Film(name, cost) {
//   this.name = name,
//     this.cost = cost
// }

// function Time(time, timeModifier) {
//   this.time = time,
//     this.timeModifier = timeModifier
// }

// function Age(age, ageModifier) {
//   this.age = age,
//     this.ageModifier = ageModifier
// }

// const lotr = new Film("Lord of the Rings", 6);
// const madmax = new Film("Mad Max", 5);
// const breakin = new Film("Breakin' 2: Electric Boogaloo", 10);

// const noon = new Time("High Noon", -2);
// const afternoon = new Time("Around 4", 0);
// const night = new Time("After 7, Forsure", 3);

// const child = new Age("Children", -3);
// const adult = new Age("Adult", 0);
// const senior = new Age("Senior", -2);

// const overall = new Price([lotr, madmax, breakin], [noon, afternoon, night], [child, adult, senior]);
// console.log(overall);