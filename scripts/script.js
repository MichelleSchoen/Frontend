// JavaScript Document

// afbeeldingen personen:
var persoonPlaatjes = ['persoon1.png', 'persoon2.png', 'persoon3.png', 'persoon4.png' ]

var persoonImg = document.querySelector('#persoon');

// toestand
var beeldfase = 0 ;
toonPersoon() ;


//function eventHandlers
function toonPersoon() {
	console.log(beeldfase);
	
	// timer:
	setTimeout( anderPersoon, 4000) 
	
	// het tonen van de plaatjes.
	persoonImg.src = 'images/' + persoonPlaatjes[ beeldfase ];
}

function anderPersoon() {
	if (beeldfase < 4 ) {
		beeldfase = beeldfase + 1 ;
	} 

	if (beeldfase > 3 ) {
		beeldfase = 0 ;
	} 

	
	toonPersoon() ;
}