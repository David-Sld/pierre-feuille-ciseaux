
let scoreJoueur=0;
let scoreOrdi=0;
let imageJoueur = document.createElement("img"); 
imageJoueur.width=100;
imageJoueur.heigth=100;
let imageOrdi	= document.createElement("img"); 
imageOrdi.width=100;
imageOrdi.heigth=100;
/*We get the reference to the different element of the html file*/
const scoreJoueur_span = document.getElementById("scoreJoueur"); /*it is refering to the value in the span*/
const scoreOrdi_span = document.getElementById("scoreOrdi"); /*it is refering to the value in the span*/
const scoreBord_div = document.querySelector(".tableauScore"); /*it is refering to the value in the div zith class tableauScore*/
const result_div = document.querySelector(".result > p "); /* We get the p element inside the element with class result */ 
const pierre_div =  document.getElementById("pierre");
const feuille_div =  document.getElementById("feuille");
const ciseaux_div =  document.getElementById("ciseaux");
const vueActionJoueur_div = document.getElementById("vueActionJoueur");
const vueActionOrdi_div = document.getElementById("vueActionOrdi");

function getComputerChoice(){
	const choices = ["pierre", "feuille", "ciseaux"];
	return choices[Math.floor(Math.random() * 3)];
}
function victoire(choixUser, choixOrdi) {
	/* Mettre a jour les scores*/
	scoreJoueur++;
	scoreJoueur_span.innerHTML=scoreJoueur;
	scoreOrdi_span.innerHTML=scoreOrdi;
	imageOrdi.src="images/"+choixOrdi+".png";
	imageJoueur.src="images/"+choixUser+".png";
	vueActionJoueur_div.appendChild(imageJoueur);
	vueActionOrdi_div.appendChild(imageOrdi);
	document.getElementById(choixUser).classList.add('contour-vert');
	setTimeout(function() {document.getElementById(choixUser).classList.remove('contour-vert')}, 300)

}
function defaite(choixUser, choixOrdi) {
	/* Mettre a jour les scores*/
	scoreOrdi++;
	scoreOrdi_span.innerHTML=scoreOrdi;
	scoreJoueur_span.innerHTML=scoreJoueur;
	imageOrdi.src="images/"+choixOrdi+".png";
	imageJoueur.src="images/"+choixUser+".png";
	vueActionJoueur_div.appendChild(imageJoueur);
	vueActionOrdi_div.appendChild(imageOrdi);
	document.getElementById(choixUser).classList.add('contour-rouge');
	setTimeout(function() {document.getElementById(choixUser).classList.remove('contour-rouge')}, 300)
}
function egalite(choixUser, choixOrdi) {
	result_div.innerHTML="Match nul ! &#128533 ";
	imageOrdi.src="images/"+choixOrdi+".png";
	imageJoueur.src="images/"+choixUser+".png";
	vueActionJoueur_div.appendChild(imageJoueur);
	vueActionOrdi_div.appendChild(imageOrdi);
	document.getElementById(choixUser).classList.add('contour-gris');
	setTimeout(function() {document.getElementById(choixUser).classList.remove('contour-gris')}, 300)
}
function game(choixUser) {
	const choixOrdi = getComputerChoice();
	switch(choixUser + choixOrdi) {
		case "feuillepierre":
			result_div.innerHTML="La feuille recouvre la pierre, victoire ! &#x1F525 ";
			victoire(choixUser, choixOrdi)
			break;
		case "pierreciseaux":
			result_div.innerHTML="La pierre casse les ciseaux, victoire ! &#x1F525 ";
			victoire(choixUser, choixOrdi);
			break;
		case "ciseauxfeuille":
			result_div.innerHTML="Les ciseaux coupent la feuille, victoire ! &#x1F525 ";
			victoire(choixUser, choixOrdi);
			break;
		case "feuilleciseaux":
			result_div.innerHTML="La feuille recouvre la pierre, défaite... &#x1F4A9 ";
			defaite(choixUser, choixOrdi);
			break;
		case "ciseauxpierre":
			result_div.innerHTML="La pierre casse les ciseaux, défaite... &#x1F4A9 ";
			defaite(choixUser, choixOrdi);
			break;
		case "pierrefeuille":
			result_div.innerHTML="La feuille recouvre la pierre, défaite... &#x1F4A9 ";
			defaite(choixUser, choixOrdi);
			break;
		case "feuillefeuille":
		case "pierrepierre":
		case "ciseauxciseaux":
			egalite(choixUser, choixOrdi);
			break;
	}
}
function main() {
	pierre_div.addEventListener('click', function() {
		game("pierre");
	})
	feuille_div.addEventListener('click', function() {
		game("feuille");
	})
	ciseaux_div.addEventListener('click', function() {
		game("ciseaux");
	})
}

main();