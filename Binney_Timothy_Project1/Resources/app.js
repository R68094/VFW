Ti.UI.setBackgroundColor("#000");

var weapons = ["I choose a sword","I choose a bow","I choose a lance","I choose a dagger","I choose a staff","I choose a wand"];

var mainWindow = Ti.UI.createWindow({
	title: "My Main Window",
	backgroundColor: "#333",
});

var myMainView = Ti.UI.createView({
	backgroundColor: "#fff",
	height: 40,
	top: 30,
	left: 20,
	right: 20
});

var mySecondView = Ti.UI.createView({
	backgroundColor: "fff",
	top: myMainView.top + myMainView.height + 20,
	height: 150,
	left: 20,
	right: 20
});

var nextButton = Ti.UI.createView({
	backgroundColor: "23ba00",
	top: mySecondView.top + mySecondView.length + 20,
	height: 50,
	left: 20,
	right: 20
});

var myMainText = Ti.UI.createLabel({
	text: "Welcome to the Thunderdome!",
	color: "#000",
	font: {fontSize: 16, fontFamily: "Helvetica", fontWeight: "bold", fontStyle: "underline"},
	textAlign: "center",
	top: 10,
	left: 10,
});

var secondViewText = Ti.UI.createLabel({
	text: "Choose Your Weapon!",
	color: "#000",
	font: {fontSize: 14, fontFamily: "Arial", fontWeight: "bold"},
	textAlign: "center"
});


var nextButtonText = Ti.UI.createLabel({
	text: "Next Weapon",
	color:"#fff",
	font: {fontSize: 12, fontFamily: "Arial", fontWeight: "bold"},
	textAlign: "center"
});

var nextWeapon = function(){
	secondViewText.hide;
	
	for(var i=0, j=weapons.length; i<j; i++){
		var weaponText = Ti.UI.createLabel({
			text: weapons[i],
			backgroundColor: "#fff",
			color: "#000",
			font: {fontSize: 14, fontFamily: "Arial", fontWeight: "bold"},
			textAlign: "center"
		});	
		mainWindow.add(weaponText);
	}
};

nextButton.addEventListener("click", nextWeapon);


mainWindow.add(myMainView,mySecondView,previousButton,nextButton);
myMainView.add(myMainText);
mySecondView.add(secondViewText);
nextButton.add(nextButtonText);
mainWindow.open();