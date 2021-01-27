// Business Logic

function Ticket(movie, time, age) { //creates an object called "ticket" with the following keys:
  this.movie = movie;
  this.time = time;
  this.age = age;
}

Ticket.prototype.modifyCost = function() { //this prototype is to adjust the price of the ticket
  let price = 10;
  if (this.movie === "Lord of the Rings" || this.movie === "Mad Max") {
    price -= 1;
  } else {
    price += 10;
  }

  if (this.time === "12:00 pm") {
    price -= 1
  } else if (this.time === "9:00 pm") {
    price += 5
  } else {}

  if (this.age === "0 - 12") {
    price -= 4;
  } else if (this.age === "55 - 100") {
    price -= 3;
  } else {}

  return price
    //console.log(price)
}


// let n = new Ticket("Lord of the Rings", "Night", 15, 10)
// n.modifyCost()
// n


// User Interface Logic

$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    let inputMovie = $("select#films").val();
    let inputTime = $("select#times").val();
    let inputAge = $("select#age").val();
    let newTicket = new Ticket(inputMovie, inputTime, inputAge);
    let finalPrice = newTicket.modifyCost();
    $(".ticket-price").text(finalPrice);
    $(".movie-name").text(newTicket.movie);
    $("#output").show();

    // let ticketModified = ticket.modifyCost();
    // console.log(ticketModified)
  })
})