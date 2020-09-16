// JavaScript Document

// afbeeldingen personen:
// var persoonPlaatjes = ['persoon1.png', 'persoon2.png', 'persoon3.png', 'persoon4.png' ]
var persoonInformatie = 
[{
img_url: 'persoon1.png',
naam:'Kerry F.',
locatie: 'New York', 
expertise:'B2B expert',
increase: '+95%' },
 
{
img_url: 'persoon2.png',
naam:'Gemma, R.',
locatie: 'San Fransisco', 
expertise:'E-commerce expert',
increase: '+135%' },

{
img_url: 'persoon3.png',
naam:'Eldar',
locatie: 'Tel Aviv',
expertise:'Tech expert',
increase: '+146%' },

{
img_url: 'persoon4.png',
naam:'Amy L.',
locatie: 'Houston',
expertise:'Health & Beauty expert',
increase: '+150%' }]



var persoonImg = document.querySelector('#persoon');
var persoonNaam = document.querySelector('#naam-persoon')
var persoonLocatie = document.querySelector('#locatie')
var persoonExpertise = document.querySelector('#expertise')
var persoonIncrease = document.querySelector('#sales')

// toestand
var beeldfase = 0 ;
toonPersoon() ;


//function eventHandlers
function toonPersoon() {
	console.log(beeldfase);
	
	// timer:
	setTimeout( anderPersoon, 4000) 
	
	// het tonen van de plaatjes.

 	persoonInformatie[beeldfase].img_url
	persoonNaam.textContent = persoonInformatie[beeldfase].naam;
	persoonLocatie.textContent = persoonInformatie[beeldfase].locatie;
	persoonIncrease = persoonInformatie[beeldfase].increase;
	persoonImg.src = 'images/' + persoonInformatie[beeldfase].img_url;
	persoonExpertise.textContent = persoonInformatie[beeldfase].expertise;
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