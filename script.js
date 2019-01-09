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
        default:
            alert("That didn't work. Please try again.");
    }
    listAnimals();
}

function listAnimals(){
    var list = "";
    for (var i = 0; i < animalPopulation; i++){
        list += (allAnimals[i].name + ", a " + allAnimals[i].constructor.name + "<br>");
    }
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
        case
    }
}

class Animal {

    constructor(name, favoriteFood) {
        this.name = name;
        this.favoriteFood = favoriteFood;
        animalPopulation++;
        allAnimals.push(this);
    }

    sleep() {
        console.log(this.name + " sleeps for 8 hours");

    }

    eat(food) {
        console.log(this.name + " eats " + food);
        food === this.favoriteFood ? console.log("YUM!! " + this.name + " wants more " + food) : this.sleep(this.name);
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
        console.log(this.name + " hibernates for 4 months");
    }

}

class Unicorn extends Animal {

    constructor(name) {
        super(name, "marshmallows");
    }

    sleep() {
        console.log(this.name + " sleeps in a cloud");
    }
}

class Giraffe extends Animal {

    constructor(name){
        super(name, "leaves");
    }

    eat(food) {
        food === "leaves" ? (super.eat(food),  this.sleep(this.name)) : console.log("YUCK!! " + this.name + " will not eat " + food);
    }
}

class Bee extends Animal {

    constructor(name) {
        super(name, "pollen");
    }

    sleep() {
        console.log(this.name + " never sleeps");
    }

    eat(food) {
        food === "pollen" ? (super.eat(food), this.sleep(this.name)) : console.log("YUCK!! " + this.name + " will not eat " + food);
    }
}

class Zookeeper {

    constructor(name) {
        this.name = name;
    }

    feedAnimals(animals, food) {
        console.log(animalPopulation);
        console.log(this.name + " is feeding " + food + " to " + animals.length + " of " + animalPopulation + " total animals");
        for (var i = 0; i < animals.length; i++) {
            animals[i].eat(food);
        }
    }
}