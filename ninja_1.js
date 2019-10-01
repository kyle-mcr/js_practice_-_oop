function Ninja(name){
    var health = 100;
    var speed = 3;
    var strength = 3;
    this.name = name;

    this.sayName = function(){
        console.log("Hello my name is " + this.name)
    }
    this.showStats = function(){
        console.log("My name is " + this.name )
        console.log("My health is " + health, "And I have this speed level " + speed, "And this strength level " + strength)
    }
    this.drinkSake = function(){
        health += 10;
    }

    this.readHealth = function(){
        return health;
    }
    this.readSpeed = function(){
        return speed;
    }
    this.readStrength = function(){
        return strength;
    }
}
var kyle = new Ninja('Kyle');
kyle.sayName();
kyle.showStats();
kyle.drinkSake();
kyle.showStats();


