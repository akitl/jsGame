
//Start function | executed after HTML & CSS load
$(function(){
	
	GenerateCircle ();
	lunchBatle ();

});

var _Circles = new Array ();
var bool = 0;


function lunchBatle () {
	
	
}


function GenerateCircle () {
	
	for(var i=0;i<150;i++){
		_Circles.push(CreateCircle (i));
		//MoveCircle(_Circles[i],i,20,i*100);
	}
	
	setInterval(update,1200);
	//update();
}


function update(){
	
	for (var i=0;i<_Circles.length;i++) {
		var oCircle = _Circles[i];
		setTimeout (MoveCircle,2000,oCircle,bool);
	}

	if ( bool == 0){
		bool = 1 ;
	}else {
		bool = 0;
	}
}


function CreateCircle () {
	var nSize = Math.floor(Math.random() * 20) + 20;

	var oCircle = $('<div class="Circle" style=" width:'+nSize+'px; height:'+nSize+'px;"> </div>');
	$("div.panelRight").append(oCircle);

	
	return oCircle;
	
}

function MoveCircle (Circle,bool) {
	var nPosX = Math.floor(Math.random() * 80)+10;
	var nPosY = Math.floor(Math.random() * 80)+10;
	var r = Math.floor(Math.random() * 250) ;
	var g = Math.floor(Math.random() * 250) ;
	var b = Math.floor(Math.random() * 250) ;
	
	//$(Circle).css("background-color","rgb("+r+", "+g+", "+b+")");


	if (bool == 0){
		$(Circle).css("background-color","rgb("+r+", "+g+", "+b+")");
	Circle.animate({
		"left": nPosX + "%",
		"top": nPosY + "%"
	},1000);
	}else{
		
		Circle.animate({
			"left": 40 + "%",
			"top": 40 + "%"
		},1000);
	}
}

class Entity { 
	constructor(name,life,mana,force,agility,lvl,exp) {
	this.name = name;
	this.life = life;
	this.mana = mana;
	this.force = force;
	this.agility = agility;
	this.lvl = lvl;
	this.exp = exp;
	}
	
	parle() {
	
	}
}

class Player extends Entity {
	constructor(name,life,mana,force,agility,lvl,exp) {
	super(name,life,mana,lvl,exp);
	this.stuf = new Array ();
	weapon;
	helmet;
	armor;
	boots;
	necklace;
	ring;
	}
	parle() {
	
	}
}

class Monster extends Entity {
	constructor(name,life,mana,force,agility,lvl,exp) {
	super(name,life,mana,lvl,exp); 
	this.loot = new Array ();
	weapon;
	armor;
	}
	parle() {
	
	}
}

class Item { 
	constructor(name,life,mana,force,agility,lvl,price) {
	this.name = name;
	this.life = life;
	this.mana = mana;
	this.force = force;
	this.agility = agility;
	this.lvl = lvl;
	this.price = price;
	this.damage = damage;
	}
 }

 class Armor extends Item {
	constructor(name,life,mana,force,agility,lvl,exp) {
	super(name,life,mana,lvl,exp); 
	this.loot = new Array ();
	armorValue;
	}
}

class Weapon extends Item {
	constructor(name,life,mana,force,agility,lvl,exp) {
	super(name,life,mana,lvl,exp); 
	this.loot = new Array ();
	damageValue;
	type;
	}
}

class Helmet extends Item {
	constructor(name,life,mana,force,agility,lvl,exp) {
	super(name,life,mana,lvl,exp); 
	this.loot = new Array ();
	armoreValue;
	}
}

class Boots extends Item {
	constructor(name,life,mana,force,agility,lvl,exp) {
	super(name,life,mana,lvl,exp); 
	this.loot = new Array ();
	armorValue;
	}
}

class Necklace extends Item {
	constructor(name,life,mana,force,agility,lvl,exp) {
	super(name,life,mana,lvl,exp); 
	this.loot = new Array ();
	special;
	}
}

class Ring extends Item {
	constructor(name,life,mana,force,agility,lvl,exp) {
	super(name,life,mana,lvl,exp); 
	this.loot = new Array ();
	special;
	}
}