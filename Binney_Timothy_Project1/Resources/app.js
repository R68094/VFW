Ti.UI.setBackgroundColor("#000");


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
	right: 20,
	width: 100
});

var previousButton = Ti.UI.createView({
	backgroundColor: "23ba00",
	top: mySecondView.top + mySecondView.length + 20,
	height: 50,
	left: 20,
	width: 100
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

var previousButtonText = Ti.UI.createLabel({
	text: "Previous Button",
	color:"#fff",
	font: {fontSize: 12, fontFamily: "Arial", fontWeight: "bold"},
	textAlign: "center"
});

var loadJs = require("weapon");

mainWindow.add(myMainView,mySecondView,nextButton,previousButton);
myMainView.add(myMainText);
mySecondView.add(secondViewText);
previousButton.add(previousButtonText);
nextButton.add(nextButtonText);
mainWindow.open();