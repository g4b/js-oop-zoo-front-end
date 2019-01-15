var animalPopulation = 0;
var allAnimals = [];

$(document).ready(function(){
    var tigger = new Tiger("Tigger");
    var pooh = new Bear("Pooh");
    var rarity = new Unicorn("Rarity");
    var gemma = new Giraffe("Gemma");
    var stinger = new Bee("Stinger");
    var zoebot = new Zookeeper("Zoebot");
    listAnimals();
});

function createAnimal(){
    var name = $("#name").val();
    var type = Number($("#types").val());
    var animal;
    switch(type) {
        case 1:
            animal = new Tiger(name);
            break;
        case 2:
            animal = new Bear(name);
            break;
        case 3:
            animal = new Unicorn(name);
            break;
        case 4:
            animal = new Giraffe(name);
            break;
        case 5:
            animal = new Bee(name);
            break;
        case 6:
            animal = new Sophie(name);
            break;
        default:
            alert("That didn't work. Please try again.");
    }
    listAnimals();
}

function listAnimals(){
    var list = "";
    for (var i = 0; i < allAnimals.length; i++){
        list += (allAnimals[i].firstName + ", a " + allAnimals[i].constructor.name + " whose favorite food is " + allAnimals[i].favoriteFood + "<br>");
    }
    console.log(list);
    $("#list").html(list);
}

function feedAnimals(){
    var food = Number($("#meals").val());
    switch(food) {
        case 1:
            food = "chocolate";
            break;
        case 2:
            food = "meat";
            break;
        case 3:
            food = "chow mein";
            break;
        case 4:
            food = "pasta bolognese";
            break;
        case 5:
            food = "empanadas";
            break;
        case 6:
            food = "marshmallows";
            break;
        case 7:
            food = "leaves";
            break;
    }
    for (var i = 0; i < allAnimals.length; i++){
        allAnimals[i].eat(food);
        $("#feed").append("<br>");
    }
}

function deleteAnimal(){
    var name = $("#idDelete").val();
    for (var i = 0; i < allAnimals.length; i++){
        if (name === allAnimals[i].firstName){
            allAnimals.splice(i, 1);
        }
    }
    listAnimals();
    $("#idDelete").val("");
}

class Animal {

    constructor(name, favoriteFood) {
        this.firstName = name;
        this.favoriteFood = favoriteFood;
        animalPopulation++;
        allAnimals.push(this);
    }

    sleep() {
        $("#feed").append(this.firstName + " sleeps for 8 hours");

    }

    eat(food) {
        $("#feed").append(this.firstName + " eats " + food + "<br>");
        food === this.favoriteFood ? $("#feed").append("YUM!! " + this.firstName + " wants more " + food + "<br>") : this.sleep(this.firstName);
    }

    static getPopulation() {
        return animalPopulation;
    }

}

class Tiger extends Animal {

    constructor(name) {
        super(name, "meat");
    }

}

class Bear extends Animal {

    constructor(name) {
        super(name, "fish");
    }

    sleep() {
        $("#feed").append(this.firstName + " hibernates for 4 months");
    }

}

class Unicorn extends Animal {

    constructor(name) {
        super(name, "marshmallows");
    }

    sleep() {
        $("#feed").append(this.firstName + " sleeps in a cloud");
    }
}

class Giraffe extends Animal {

    constructor(name){
        super(name, "leaves");
    }

    eat(food) {
        food === "leaves" ? (super.eat(food),  this.sleep(this.firstName)) : $("#feed").append("YUCK!! " + this.firstName + " will not eat " + food);
    }
}

class Bee extends Animal {

    constructor(name) {
        super(name, "pollen");
    }

    sleep() {
        $("#feed").append(this.firstName + " never sleeps");
    }

    eat(food) {
        food === "pollen" ? (super.eat(food), this.sleep(this.firstName)) : $("#feed").append("YUCK!! " + this.firstName + " will not eat " + food + "<br>");
    }
}

class Sophie extends Animal {
    constructor(name){
        super(name, "jelly babies");
    }
}

class Zookeeper {

    constructor(name) {
        this.firstName = name;
    }

    feedAnimals(animals, food) {
        $("#feed").append(this.firstName + " is feeding " + food + " to " + animals.length + " of " + animalPopulation + " total animals");
        for (var i = 0; i < animals.length; i++) {
            animals[i].eat(food);
        }
    }
}