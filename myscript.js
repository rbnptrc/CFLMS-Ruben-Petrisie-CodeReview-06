var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var locations = /** @class */ (function () {
    function locations(name, image, visitedDate, address) {
        this.name = name;
        this.visitedDate = visitedDate;
        this.image = image;
        this.address = address;
    }
    //too many examples tried here - process to ...html
    locations.prototype.builtit = function () {
        return "\n\t\t\t<div class=\"card col-lg-3 col-md-6 col-sm-12\"> \n\t\t\t\t<div class=\"cardName\">\n\t\t\t\t\t<h3>" + this.name + "</h3>\n                </div>\n                <div class=\"cardDescription\">\n\t\t\t\t<div class=\"date\">\n\t\t\t\t\t<p><i class=\"fas fa-calendar\"></i>" + this.visitedDate + "</p>\t\n\t\t\t\t</div>\n\t\t\t\t<div class=\"cardImage\">\n\t\t\t\t\t<img src=\"" + this.image + "\">\n\t\t\t\t</div>\t\t\t\t\n\t\t\t\t\t<p><i class=\"fas fa-map-marker-alt\"></i>" + this.address + "</p>\t\n\t\t";
    };
    return locations;
}());
;
// on... needed
var place = /** @class */ (function (_super) {
    __extends(place, _super);
    function place(name, image, visitedDate, address, price) {
        var _this = _super.call(this, name, image, visitedDate, address) || this;
        _this.price = price;
        return _this;
    }
    place.prototype.displayplace = function () {
        return "\n\t\t\t\t\t" + _super.prototype.builtit.call(this) + "\n\t\t\t\t\t<p><i class=\"fas fa-euro-sign\"></i>" + this.price + "</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t";
    };
    return place;
}(locations));
;
//set details
var theplaces = new Array();
theplaces[0] = new place("Cathedral Barcelona", "images/cathedral.jpg", "12.11.2019", "Pla de la Seu, s/n, 08002 Barcelona Spain", "N/A");
theplaces[1] = new place("Casa Mila", "images/casamila.jpg", "14.11.2019", "Passeig de Gràcia, 92, 08008 Barcelona Spain", "N/A");
theplaces[2] = new place("La Boqueria", "images/foodmarket.jpg", "15.11.2019", "La Rambla, 91, 08001 Barcelona Spain", "Free");
theplaces[3] = new place("Barceloneta Beach", "images/barcelonetabeach.jpg", "12.11.2019", "Barceloneta beach, 08001 Barcelona Spain", "Free");
//buildup1
var block1 = document.createElement("div");
block1.setAttribute("class", "row");
block1.setAttribute("id", "places");
var subblock1 = document.createElement("div");
subblock1.setAttribute("class", "col-lg-12");
subblock1.setAttribute("id", "placetitle");
document.getElementById("mainContent").append(subblock1);
document.getElementById("mainContent").append(block1);
//set title to id
document.getElementById("placetitle").innerHTML += "<div class=\"title\"><h1>The Places</h1></div><br>";
// loop to display ...>
for (var value in theplaces) {
    document.getElementById("places").innerHTML += theplaces[value].displayplace();
}
;
//4 visitedDate Restaurants
var restaurant = /** @class */ (function (_super) {
    __extends(restaurant, _super);
    function restaurant(name, image, visitedDate, address, food, openinghours, phone, web) {
        var _this = _super.call(this, name, image, visitedDate, address) || this;
        _this.food = food;
        _this.openinghours = openinghours;
        _this.phone = phone;
        _this.web = web;
        return _this;
    }
    restaurant.prototype.displayrestaurant = function () {
        return "\n\t\t\t\t\t" + _super.prototype.builtit.call(this) + "\n\t\t\t\t\t<p><i class=\"fas fa-utensils\"></i>" + this.food + "</p>\n\t\t\t\t\t<p><i class=\"fas fa-clock\"></i>" + this.openinghours + "</p>\n\t\t\t\t\t<p><i class=\"fas fa-phone\"></i>" + this.phone + "</p>\n\t\t\t\t\t<p><i class=\"fas fa-globe-europe\"></i><a target=\"_blank\" href=\"" + this.web + "\">" + this.web + "</a></p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t";
    };
    return restaurant;
}(locations));
;
//copy replace new details for block2
var therestaurants = new Array();
therestaurants[0] = new restaurant("Vianna Barcelona", "images/viana.jpg", "12.11.2019", "C/ Vidre, 7 08002, Barcelona Spain", "Spanish delacatese", "11:00 - 15:00 & 17:30 - 23:00", "+34 934 63 82 95", "https://www.vianabcn.com/");
therestaurants[1] = new restaurant("Bodega Biarritz", "images/Bodega-Biarritz.jpg", "13.11.2019", "Nou de San Francesc 7, 08002 Barcelona Spain", "Pure Tapas", "17:00 - 24:00", "+34 618 67 79 27", "https://bodega-biarritz.webnode.fr/");
therestaurants[2] = new restaurant("El Chiringuito", "images/beachbar.jpg", "15.11.2019", "Platja del Bogatell, S/N, 08038 Barcelona Spain", "Funky Snack's & Bites", "10:00 - 15:00 & 17:00 - 23:00", "+34 638 39 77 78", "http://www.goodfordrinksonly.com");
therestaurants[3] = new restaurant("Chök", "images/chock.jpeg", "16.11.2019", "Carrer del Carme 3 08002, Barcelona Spain", "Chocolate Kitchen", "08:30 - 23:00", "+34 933042360", "http://www.chokbarcelona.com/en/contacto");
//Buildup2
var block2 = document.createElement("div");
block2.setAttribute("class", "row");
block2.setAttribute("id", "restaurant");
var subblock2 = document.createElement("div");
subblock2.setAttribute("class", "col-lg-12");
subblock2.setAttribute("id", "restauranttitle");
document.getElementById("mainContent").append(subblock2);
document.getElementById("mainContent").append(block2);
document.getElementById("restauranttitle").innerHTML += "<div class=\"title\"><h1>Restaurants</h1></div><br>";
// copy loop and test
for (var value in therestaurants) {
    document.getElementById("restaurant").innerHTML += therestaurants[value].displayrestaurant();
}
;
//some  4 events
var events = /** @class */ (function (_super) {
    __extends(events, _super);
    function events(name, image, visitedDate, address, time, ticketprice, web) {
        var _this = _super.call(this, name, image, visitedDate, address) || this;
        _this.time = time;
        _this.ticketprice = ticketprice;
        _this.web = web;
        return _this;
    }
    events.prototype.displayevents = function () {
        return "\n\t\t\t\t\t" + _super.prototype.builtit.call(this) + "\n\t\t\t\t\t<p><i class=\"fas fa-clock\"></i>" + this.time + "</p>\n\t\t\t\t\t<p><i class=\"fas fa-ticket-alt\"></i>" + this.ticketprice + "</p>\n\t\t\t\t\t<p><i class=\"fas fa-globe-europe\"></i><a target=\"_blank\" href=\"" + this.web + "\">" + this.web + "</a></p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t";
    };
    return events;
}(locations));
;
//copy replace new details for block3
var theevents = new Array();
theevents[0] = new events("BCN Beach Fest", "images/BBF2017.jpg", "18.07.2019", "Moll de la Vela, 1, 08930 Barcelona Spain", "20:00", "84,00€", "https://www.bcnbeachfestival.com/");
theevents[1] = new events("BCN Film Fest", "images/bcnff.jpg", "25.06.2019", "Carrer del Verdi, 32 08012 Barcelona Spain", "19:30", "10,00€", "http://www.bcnfilmfest.com/");
theevents[2] = new events("Fira de Santa Llúcia", "images/fira.jpg", "06.12.2019", "Carrer dels Lledó nº 11, 2º 08002 Barcelona Spain", "11:00", "0€", "http://en.firadesantallucia.cat/");
theevents[3] = new events("Brunch in The Park", "images/BrunchInThePark.jpg", "07.03.2019", "Jardins de Joan Brossa Barcelona Spain", "11:30", "25.00€", "https://barcelona.brunch-in.com/");
//Buildup3
var block3 = document.createElement("div");
block3.setAttribute("class", "row");
block3.setAttribute("id", "events");
var subblock3 = document.createElement("div");
subblock3.setAttribute("class", "col-lg-12");
subblock3.setAttribute("id", "eventtitle");
document.getElementById("mainContent").append(subblock3);
document.getElementById("mainContent").append(block3);
document.getElementById("eventtitle").innerHTML += "<div class=\"title\"><h1>& Events</h1></div><>";
for (var value in theevents) {
    document.getElementById("events").innerHTML += theevents[value].displayevents();
}
;
//set dates into arr
var theplacesarr = new Array();
var therestaurantsarr = new Array();
var theeventsarr = new Array();
for (var value_1 in theplaces) {
    theplacesarr.push([theplaces[value_1].visitedDate, theplaces[value_1]]);
}
;
for (var value_2 in therestaurants) {
    therestaurantsarr.push([therestaurants[value_2].visitedDate, therestaurants[value_2]]);
}
;
for (var value_3 in theevents) {
    theeventsarr.push([theevents[value_3].visitedDate, theevents[value_3]]);
}
;
document.getElementById("ascending").addEventListener("click", ascending, false);
function ascending() {
    //sort ascending
    theplacesarr.sort(function (a, b) {
        return a < b ? -1 : a > b ? 1 : 0;
    });
    var replacep = document.getElementById("places");
    while (replacep.hasChildNodes()) {
        replacep.removeChild(replacep.firstChild);
    }
    for (var value in theplacesarr) {
        document.getElementById("places").innerHTML += theplacesarr[value][1].displayplace();
    }
    therestaurantsarr.sort(function (a, b) {
        return a < b ? -1 : a > b ? 1 : 0;
    });
    var replacer = document.getElementById("restaurant");
    while (replacer.hasChildNodes()) {
        replacer.removeChild(replacer.firstChild);
    }
    for (var value in therestaurantsarr) {
        document.getElementById("restaurant").innerHTML += therestaurantsarr[value][1].displayrestaurant();
    }
    theeventsarr.sort(function (a, b) {
        return a < b ? -1 : a > b ? 1 : 0;
    });
    var replacee = document.getElementById("events");
    while (replacee.hasChildNodes()) {
        replacee.removeChild(replacee.firstChild);
    }
    for (var value in theeventsarr) {
        document.getElementById("events").innerHTML += theeventsarr[value][1].displayevents();
    }
}
;
document.getElementById("descending").addEventListener("click", descending, false);
function descending() {
    //sort descending
    theplacesarr.sort(function (a, b) {
        return a > b ? -1 : a < b ? 1 : 0;
    });
    var replacep = document.getElementById("places");
    while (replacep.hasChildNodes()) {
        replacep.removeChild(replacep.firstChild);
    }
    for (var value in theplacesarr) {
        document.getElementById("places").innerHTML += theplacesarr[value][1].displayplace();
    }
    therestaurantsarr.sort(function (a, b) {
        return a > b ? -1 : a < b ? 1 : 0;
    });
    var replacer = document.getElementById("restaurant");
    while (replacer.hasChildNodes()) {
        replacer.removeChild(replacer.firstChild);
    }
    for (var value in therestaurantsarr) {
        document.getElementById("restaurant").innerHTML += therestaurantsarr[value][1].displayrestaurant();
    }
    theeventsarr.sort(function (a, b) {
        return a > b ? -1 : a < b ? 1 : 0;
    });
    var replacee = document.getElementById("events");
    while (replacee.hasChildNodes()) {
        replacee.removeChild(replacee.firstChild);
    }
    for (var value in theeventsarr) {
        document.getElementById("events").innerHTML += theeventsarr[value][1].displayevents();
    }
}
;
