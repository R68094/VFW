var weapons = ["I choose a sword","I choose a bow","I choose a lance","I choose a dagger","I choose a staff","I choose a wand"];

var length = weapons.length;

var i = -1;


var nextWeapon = function(){
	if(i === length -1){
		i = -1;	
	};
	i++;
	secondViewText.text = weapons[i];	
};



var previousWeapon = function(){
	if(i === 0){
		i = length;
	};
	i++;
	secondViewText.text = weapons[i];
};

nextButton.addEventListener("click", nextWeapon);
previousButton.addEventListener("click", previousWeapon);




















