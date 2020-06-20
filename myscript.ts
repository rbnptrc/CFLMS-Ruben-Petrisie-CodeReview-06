class locations{
	 name :"";
	 visitedDate :"";
	 image :"";
	 address :"";

	constructor(name, image, visitedDate, address){
		this.name = name;
		this.visitedDate = visitedDate;
		this.image = image;
		this.address = address;
    }

	//too many examples tried here - process to ...html
	builtit(){
		return `
			<div class="card col-lg-3 col-md-6 col-sm-12"> 
				<div class="cardName">
					<h3>${this.name}</h3>
                </div>
                <div class="cardDescription">
				<div class="visit">
					<p><i class="fas fa-calendar"></i>${this.visitedDate}</p>	
				</div>
				<div class="cardImage">
					<img src="${this.image}">
				</div>				
					<p><i class="fas fa-map-marker-alt"></i>${this.address}</p>	
		`
	}
};
// on... needed
class place extends locations{
	private price : string;

	constructor(name, image, visitedDate, address, price){
		super(name, image, visitedDate, address);
		this.price = price;
	}
	displayplace(){
		return `
					${super.builtit()}
					<p><i class="fas fa-euro-sign"></i>${this.price}</p>
				</div>
			</div>
		`
    }	
};
//set details
let theplaces = new Array();
	theplaces[0] = new place("Cathedral Barcelona", "images/cathedral.jpg","12.11.2019", "Pla de la Seu, s/n, 08002 Barcelona Spain", "N/A");
	theplaces[1] = new place("Casa Mila", "images/casamila.jpg", "14.11.2019", "Passeig de Gràcia, 92, 08008 Barcelona Spain", "N/A");
	theplaces[2] = new place("La Boqueria", "images/foodmarket.jpg", "15.11.2019", "La Rambla, 91, 08001 Barcelona Spain", "Free");
	theplaces[3] = new place("Barceloneta Beach", "images/barcelonetabeach.jpg", "12.11.2019", "Barceloneta beach, 08001 Barcelona Spain", "Free");
  //buildup1
let block1 = document.createElement("div");
block1.setAttribute("class", "row");
block1.setAttribute("id", "places");

let subblock1 = document.createElement("div");
subblock1.setAttribute("class", "col-lg-12");
subblock1.setAttribute("id", "placetitle");

document.getElementById("mainContent").append(subblock1);
document.getElementById("mainContent").append(block1);


//set title to id
document.getElementById("placetitle").innerHTML += `<div class="title"><h1>The Places</h1></div><br>`
// loop to display ...>
for(var value in theplaces){
	document.getElementById("places").innerHTML += theplaces[value].displayplace();
};

//4 visitedDate Restaurants

class restaurant extends locations{
	 food :"";
	 openinghours :"";
	 phone :"";
	 web :"";

	constructor(name, image, visitedDate, address, food, openinghours, phone, web){
		super(name, image, visitedDate, address);
		this.food = food;
		this.openinghours = openinghours;
		this.phone = phone;
		this.web = web;
	}
	displayrestaurant(){
		return `
					${super.builtit()}
					<p><i class="fas fa-utensils"></i>${this.food}</p>
					<p><i class="fas fa-clock"></i>${this.openinghours}</p>
					<p><i class="fas fa-phone"></i>${this.phone}</p>
					<p><i class="fas fa-globe-europe"></i><a target="_blank" href="${this.web}">${this.web}</a></p>
				</div>
			</div>
		`
	}
};
//copy replace new details for block2
let therestaurants = new Array();
	therestaurants[0] = new restaurant("Vianna Barcelona", "images/viana.jpg", "12.11.2019", "C/ Vidre, 7 08002, Barcelona Spain", "Spanish delacatese", "11:00 - 15:00 & 17:30 - 23:00", "+34 934 63 82 95", "https://www.vianabcn.com/");
	therestaurants[1] = new restaurant("Bodega Biarritz", "images/Bodega-Biarritz.jpg", "13.11.2019", "Nou de San Francesc 7, 08002 Barcelona Spain", "Pure Tapas", "17:00 - 24:00", "+34 618 67 79 27", "https://bodega-biarritz.webnode.fr/");
	therestaurants[2] = new restaurant("El Chiringuito", "images/beachbar.jpg", "15.11.2019", "Platja del Bogatell, S/N, 08038 Barcelona Spain", "Funky Snack's & Bites", "10:00 - 15:00 & 17:00 - 23:00", "+34 638 39 77 78", "http://www.goodfordrinksonly.com");
	therestaurants[3] = new restaurant("Chök", "images/chock.jpeg", "16.11.2019", "Carrer del Carme 3 08002, Barcelona Spain", "Chocolate Kitchen", "08:30 - 23:00", "+34 933042360", "http://www.chokbarcelona.com/en/contacto");


//Buildup2
let block2 = document.createElement("div");
block2.setAttribute("class", "row");
block2.setAttribute("id", "restaurant");

document.getElementById("mainContent").append(block2);

let subblock2 = document.createElement("div");
subblock2.setAttribute("class", "col-lg-12");
subblock2.setAttribute("id", "restauranttitle");

document.getElementById("mainContent").append(subblock2);
document.getElementById("mainContent").append(block2);

document.getElementById("restauranttitle").innerHTML += `<div class="title"><h1>Restaurants</h1></div><br>`
// copy loop and test
for(var value in therestaurants){
	document.getElementById("restaurant").innerHTML += therestaurants[value].displayrestaurant();
};

//some  4 events
class events extends locations{
	 time :"";
	 ticketprice :"";
	 web :"";

	constructor(name, image, visitedDate, address, time, ticketprice, web){
		super(name, image, visitedDate, address);
		this.time = time;
		this.ticketprice = ticketprice;
		this.web = web;
	}
	displayevents(){
		return `
					${super.builtit()}
					<p><i class="fas fa-clock"></i>${this.time}</p>
					<p><i class="fas fa-ticket-alt"></i>${this.ticketprice}</p>
					<p><i class="fas fa-globe-europe"></i><a target="_blank" href="${this.web}">${this.web}</a></p>
				</div>
			</div>
		`
	}
};
//copy replace new details for block3
let theevents = new Array();
	theevents[0] = new events("BCN Beach Fest", "images/BBF2017.jpg", "18.07.2019", "Moll de la Vela, 1, 08930 Barcelona Spain", "20:00", "84,00€", "https://www.bcnbeachfestival.com/");
	theevents[1] = new events("BCN Film Fest", "images/bcnff.jpg", "25.06.2019", "Carrer del Verdi, 32 08012 Barcelona Spain", "19:30", "10,00€", "http://www.bcnfilmfest.com/");
	theevents[2] = new events("Fira de Santa Llúcia", "images/fira.jpg", "06.12.2019", "Carrer dels Lledó nº 11, 2º 08002 Barcelona Spain", "11:00", "0€", "http://en.firadesantallucia.cat/");
	theevents[3] = new events("Brunch in The Park", "images/BrunchInThePark.jpg", "07.03.2019", "Jardins de Joan Brossa Barcelona Spain", "11:30", "25.00€", "https://barcelona.brunch-in.com/");
//Buildup3
let block3 = document.createElement("div");
block3.setAttribute("class", "row");
block3.setAttribute("id", "events");

document.getElementById("mainContent").append(block3);

let subblock3 = document.createElement("div");
subblock3.setAttribute("class", "col-lg-12");
subblock3.setAttribute("id", "eventheading");

document.getElementById("mainContent").append(subblock3);
document.getElementById("mainContent").append(block3);

document.getElementById("eventheading").innerHTML += `<div class="title"><h1>& Events</h1></div><>`

for(var value in theevents){
	document.getElementById("events").innerHTML += theevents[value].displayevents();
};


//set dates into arr

var theplacesarr = new Array();
var therestaurantsarr = new Array();
var theeventsarr = new Array();

for(let value in theplaces){
 theplacesarr.push([theplaces[value].visitedDate, theplaces[value]]);
};

for(let value in therestaurants){
	therestaurantsarr.push([therestaurants[value].visitedDate, therestaurants[value]]);
};

for(let value in theevents){
	theeventsarr.push([theevents[value].visitedDate, theevents[value]]);
};


document.getElementById("ascending").addEventListener("click", ascending, false);

function ascending(){	
	//sort ascending
 theplacesarr.sort(function(a, b) {
	    return a<b ? -1 : a>b ? 1 : 0;
	});

	var replacep = document.getElementById("places");

	while(replacep.hasChildNodes()){
			replacep.removeChild(replacep.firstChild);
		}

	for(var value in theplacesarr){
		document.getElementById("places").innerHTML += theplacesarr[value][1].displayplace();
	}

	therestaurantsarr.sort(function(a, b) {
	    return a<b ? -1 : a>b ? 1 : 0;
	});

	var replacer = document.getElementById("restaurant");

	while(replacer.hasChildNodes()){
			replacer.removeChild(replacer.firstChild);
		}

	for(var value in therestaurantsarr){
		document.getElementById("restaurant").innerHTML += therestaurantsarr[value][1].displayrestaurant();
	}

	theeventsarr.sort(function(a, b) {
	    return a<b ? -1 : a>b ? 1 : 0;
	});

	var replacee = document.getElementById("events");

	while(replacee.hasChildNodes()){
			replacee.removeChild(replacee.firstChild);
		}

	for(var value in theeventsarr){
		document.getElementById("events").innerHTML += theeventsarr[value][1].displayevents();
	}

};

document.getElementById("descending").addEventListener("click", descending, false);

function descending(){	
	//sort descending
 theplacesarr.sort(function(a, b) {
	    return a>b ? -1 : a<b ? 1 : 0;
	});

	var replacep = document.getElementById("places");

	while(replacep.hasChildNodes()){
			replacep.removeChild(replacep.firstChild);
		}

	for(var value in theplacesarr){
		document.getElementById("places").innerHTML += theplacesarr[value][1].displayplace();
	}

	therestaurantsarr.sort(function(a, b) {
	    return a>b ? -1 : a<b ? 1 : 0;
	});

	var replacer = document.getElementById("restaurant");

	while(replacer.hasChildNodes()){
			replacer.removeChild(replacer.firstChild);
		}

	for(var value in therestaurantsarr){
		document.getElementById("restaurant").innerHTML += therestaurantsarr[value][1].displayrestaurant();
	}

	theeventsarr.sort(function(a, b) {
	    return a>b ? -1 : a<b ? 1 : 0;
	});

	var replacee = document.getElementById("events");

	while(replacee.hasChildNodes()){
			replacee.removeChild(replacee.firstChild);
		}

	for(var value in theeventsarr){
		document.getElementById("events").innerHTML += theeventsarr[value][1].displayevents();
	}

};