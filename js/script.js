let dialogueActuel;
var chlara = {
    "normal": "chlara.png"
}
var clement = {
    "normal": "clement.png"
}
var paola = {
    "normal": "paola.png"
}
var paolo = {
    "normal": "paolo.png"
}
var sylphia = {
    "normal": "sylphia.png"
}
var sylvain = {
    "normal": "sylvain.png"
}
var vivian = {
    "normal": "vivian.png"
}
var vivh = {
    "normal": "vivih.png"
}
var username;
var color;
var genre;

//INDEX.HTML
if(window.location.href.indexOf("game.html") > -1) {
    loadGame();
} else {
    selectGenre("homme");
    
}

function selectGenre(genreSelected){
    if(genreSelected == 'homme'){

        document.getElementById("image1").classList.add("genre_selected");
        document.getElementById("image2").classList.remove("genre_selected");
        document.getElementById("image3").classList.remove("genre_selected");
        genre = "homme";
    }
    if(genreSelected == 'femme'){
        document.getElementById("image1").classList.remove("genre_selected");
        document.getElementById("image2").classList.add("genre_selected");
        document.getElementById("image3").classList.remove("genre_selected");
        genre = "femme";
        }
    if(genreSelected == 'autre'){
        document.getElementById("image1").classList.remove("genre_selected");
        document.getElementById("image2").classList.remove("genre_selected");
        document.getElementById("image3").classList.add("genre_selected");
        genre = "autre";
    }
}

function validateInputFields(){
    username = document.getElementById("input_name").value;
    if(username != "" && genre != ""){
        localStorage.setItem("username", username);
        localStorage.setItem("genre", genre);
        localStorage.setItem("dialogueActuel", 0);
        window.location.href = "game.html";
    }else{
        alert("Veuillez remplir tous les champs");
    }
}





//Liste des emotions avec les images associèes à chaque personnage



//##################################################################################################
//##################################################################################################

//REDACTION DE L'HISTOIRE ICI
//Cette fonction actualise tout le contenu de la page
//Cette fonction est appellée par les boutons uniquement.
function story(dialogueActuel){ 
    console.log("Dialogue N°"+dialogueActuel);
    saveGame();
    switch (dialogueActuel) {
        case 0: //Premier dialogue du jeu
            setBackground("test.jpg"); //On choisit le background du dialogue 1
            setDialogueText(username,"Bonjour, je suis un test"); //On choisit l'auteur et le texte du dialogue 1
            setButtons("Suivant", 1, "Précédent", 0); //On choisit le nom des boutons et le dialogue auquel ils ramènent
            setCharacter("left", Monika.triste); //On choisit quel sprite afficher

            break;

        case 1: //Deuxième dialogue du jeu
            setBackground("test2.jpg"); //On choisit le background du dialogue 1
            setDialogueText("Natsuki","Bonjour, je suis un test 2 !"); //On choisit l'auteur et le texte du dialogue 1
            setButtons("Suivant", 1, "Précédent", 0); //On choisit le nom des boutons et le dialogue auquel ils ramènent
            setCharacter("right", Monika.triste); //On choisit quel sprite afficher
            
            break;
        case 2:
            
            break;
       
	   case 300:
            setBackground("main.png"); //On choisit le background du dialogue 1
            setDialogueText("username","Putain, pourquoi je stress autant. J’ai hâte de la voir mais si je foire tout. Ah ! Bon, arrête d’y penser tout va bien se passer” *il souffle un coup*"); //On choisit l'auteur et le texte du dialogue 1
            setButtons("Suivant", 301); //On choisit le nom des boutons et le dialogue auquel ils ramènent
            setCharacter("right", paola.normal); //On choisit quel sprite afficher
            break;
			
		case 301:
            setBackground("main.png"); //On choisit le background du dialogue 1
            setDialogueText("paola","*arrive* Salut je suis content de te voir"); //On choisit l'auteur et le texte du dialogue 1
            setButtons("Suivant", 302,"Précédent", 300); //On choisit le nom des boutons et le dialogue auquel ils ramènent
            setCharacter("right", paola.normal); //On choisit quel sprite afficher
            break;
			
		case 302:
            setBackground("main.png"); //On choisit le background du dialogue 1
            setDialogueText("paola","Alors qu'est-ce qu'un beau gosse comme toi fait sur ce genre d'application ?"); //On choisit l'auteur et le texte du dialogue 1
            setButtons("Suivant", 303,"Précédent", 301); //On choisit le nom des boutons et le dialogue auquel ils ramènent
            setCharacter("right", paola.normal); //On choisit quel sprite afficher
            break;
			
		case 303:
            setBackground("main.png"); //On choisit le background du dialogue 1
            setDialogueText("username","En m'inscrivant, je cherchais plus une relation sérieuse et toi ?"); //On choisit l'auteur et le texte du dialogue 1
            setButtons("Suivant", 304,"Précédent", 302); //On choisit le nom des boutons et le dialogue auquel ils ramènent
            setCharacter("right", paola.normal); //On choisit quel sprite afficher
            break;
			
		case 304:
            setBackground("main.png"); //On choisit le background du dialogue 1
            setDialogueText("paola","Personnellement, je cherche une relation sans prise de tête j’espère que ça ne te dérange pas ?"); //On choisit l'auteur et le texte du dialogue 1
            setButtons("Suivant", 305,"Précédent", 303); //On choisit le nom des boutons et le dialogue auquel ils ramènent
            setCharacter("right", paola.normal); //On choisit quel sprite afficher
            break;
			
		case 305:
            setBackground("main.png"); //On choisit le background du dialogue 1
            setDialogueText("username","Non ça ne me dérange pas plus que ça. J'aurais préféré une relation plus sérieuse mais je comprends et c'est bon pour moi"); //On choisit l'auteur et le texte du dialogue 1
            setButtons("Suivant", 306,"Précédent", 304); //On choisit le nom des boutons et le dialogue auquel ils ramènent
            setCharacter("right", paola.normal); //On choisit quel sprite afficher
            break;
		
		case 306:
            setBackground("main.png"); //On choisit le background du dialogue 1
            setDialogueText("paola","Oh bah super alors, bon je te le dis toute suite j'ai quelques problèmes et mon médecin m'a dis que je devais tout le temps me protéger lors de rapport donc j'espère tu as de quoi te protéger ?"); //On choisit l'auteur et le texte du dialogue 1
            setButtons("Suivant", 307,"Précédent", 305); //On choisit le nom des boutons et le dialogue auquel ils ramènent
            setCharacter("right", paola.normal); //On choisit quel sprite afficher
            break;
			
		case 307:
            setBackground("main.png"); //On choisit le background du dialogue 1
            setDialogueText("username","Oui, ne t'inquiète pas j'ai toujours de quoi me protéger mais pourquoi ton médecin t'a dit ça ?"); //On choisit l'auteur et le texte du dialogue 1
            setButtons("Suivant", 308,"Précédent", 306); //On choisit le nom des boutons et le dialogue auquel ils ramènent
            setCharacter("right", paola.normal); //On choisit quel sprite afficher
            break;
		
		case 308:
            setBackground("main.png"); //On choisit le background du dialogue 1
            setDialogueText("paola","J'ai fais des test et j'ai le papillomavirus à ce qu'il paraît"); //On choisit l'auteur et le texte du dialogue 1
            setButtons("Mais c'est quoi le papillomavirus ?", 309,"Mais c'est pas trop grave ?", 310,"Précédent", 307); //On choisit le nom des boutons et le dialogue auquel ils ramènent
            setCharacter("right", paola.normal); //On choisit quel sprite afficher
            break;
		
		case 309:
            setBackground("main.png"); //On choisit le background du dialogue 1
            setDialogueText("paola","C'est une maladie qui peut me causer des problèmes de santé mais c'est tout ce que je sais"); //On choisit l'auteur et le texte du dialogue 1
            setButtons("Suivant", 311,"Précédent", 308); //On choisit le nom des boutons et le dialogue auquel ils ramènent
            setCharacter("right", paola.normal); //On choisit quel sprite afficher
            break;
			
		case 310:
            setBackground("main.png"); //On choisit le background du dialogue 1
            setDialogueText("paola","Non ça va t'inquiète pas "); //On choisit l'auteur et le texte du dialogue 1
            setButtons("Suivant", 311,"Précédent", 308); //On choisit le nom des boutons et le dialogue auquel ils ramènent
            setCharacter("right", paola.normal); //On choisit quel sprite afficher
            break;
			
		case 311:
            setBackground("main.png"); //On choisit le background du dialogue 1
            setDialogueText("username","T'es sûre que c'est pas trop grave?"); //On choisit l'auteur et le texte du dialogue 1
            setButtons("Suivant", 312); //On choisit le nom des boutons et le dialogue auquel ils ramènent
            setCharacter("right", paola.normal); //On choisit quel sprite afficher
            break;
			
		case 312:
            setBackground("main.png"); //On choisit le background du dialogue 1
            setDialogueText("paola","Je préfère pas trop en parler parce ça me met un peu mal à l'aise"); //On choisit l'auteur et le texte du dialogue 1
            setButtons("Suivant", 313); //On choisit le nom des boutons et le dialogue auquel ils ramènent
            setCharacter("right", paola.normal); //On choisit quel sprite afficher
            break;
			
		case 313:
            setBackground("main.png"); //On choisit le background du dialogue 1
            setDialogueText("username","Je comprends totalement mais sache que si tu veux en parler je suis là "); //On choisit l'auteur et le texte du dialogue 1
            setButtons("Suivant", 314); //On choisit le nom des boutons et le dialogue auquel ils ramènent
            setCharacter("right", paola.normal); //On choisit quel sprite afficher
            break;
			
		case 314:
            setBackground("main.png"); //On choisit le background du dialogue 1
            setDialogueText("paola","Merci, si on fais plus ample connaissance je vais peut-être plus pouvoir t'en parler *elle lui touche la main*"); //On choisit l'auteur et le texte du dialogue 1
            setButtons("Avec plaisir *il lui sourit*", 315,"Je préfère prendre mon temps et faire plus connaissance avant d'aller plus loin",315); //On choisit le nom des boutons et le dialogue auquel ils ramènent
            setCharacter("right", paola.normal); //On choisit quel sprite afficher
            break;
			
			
		case 315:
            setBackground("main.png"); //On choisit le background du dialogue 1
            setDialogueText("","The end"); //On choisit l'auteur et le texte du dialogue 1
            setButtons("retour au début",300); //On choisit le nom des boutons et le dialogue auquel ils ramènent
            setCharacter("right",""); //On choisit quel sprite afficher
            break;
			
        default:
            console.error(dialogueActuel);
            alert("Erreur / Histoire inexistante");
            break;
    }
}

//##################################################################################################
//##################################################################################################

//NE PAS TOUCHER
function saveGame(){
    localStorage.setItem("dialogueActuel", dialogueActuel);
}
//Convert string to int

//NE PAS TOUCHER

function loadGame(){
    if(localStorage.getItem("dialogueActuel") !== null){
        dialogueActuel = localStorage.getItem("dialogueActuel");
        username = localStorage.getItem("username");
        genre = localStorage.getItem("genre");

        story(parseInt(dialogueActuel));
        if(genre == "homme"){
            document.getElementById("previsualisation").style.backgroundImage = "url('ressources/characters/boy.png')";
        }
        if(genre == "femme"){
            document.getElementById("previsualisation").style.backgroundImage = "url('ressources/characters/girl.png')";
        }
        if(genre == "autre"){
            document.getElementById("previsualisation").style.backgroundImage = "url('ressources/characters/androgyne.png')";
        }
    }else{
        alert("Aucune sauvegarde trouvée - Redirection au Index.html");
        window.location.href = "index.html";
    }
}

//NE PAS TOUCHER
function next(){
    dialogueActuel++;
    story(dialogueActuel);
}
function previous(){
    dialogueActuel--;
    story(dialogueActuel);
}

//NE PAS TOUCHER
//Affiche l'image de votre choix dans le background
//Exemple : setBackground("test.jpg");
function setBackground(string){
    string = "url('ressources/backgrounds/"+string+"')";
    document.getElementById("background").style.backgroundImage = string;
}


//NE PAS TOUCHER
//Affiche le texte de votre choix dans le dialogue
//Exemple : setDialogueText("Monika", "Bonjour, je suis un test");
function setDialogueText(auteur, contenu){
    if(auteur == username){
        document.getElementById("auteur").style.color = color;
        document.getElementById("auteur").innerHTML = username;
    }else{
        document.getElementById("auteur").innerHTML = auteur;
        document.getElementById("auteur").style.color = "#000000";

    }
    document.getElementById("dialogueText").innerHTML = contenu;

}

//NE PAS TOUCHER
//Actualise le sprite des personnages
//Exemple : setCharacter(Monika.joyeux);
function setCharacter(position, personnage){
    if(position == "left"){
        document.getElementById("author").className = "author_right";
        document.getElementById("personnage_right").style.backgroundImage = null;
        document.getElementById("personnage_left").style.backgroundImage = "url('ressources/characters/"+personnage+"')";
    }else{
        document.getElementById("author").className = "author_left";
        document.getElementById("personnage_left").style.backgroundImage = null;
        document.getElementById("personnage_right").style.backgroundImage = "url('ressources/characters/"+personnage+"')";
    }

}

//NE PAS TOUCHER
//Actualise le texte contenu dans les boutons
//Exemple : setButtons("Suivant", 1, "Précédent", 0); Le bouton "Suivant" ramènera vers le dialogue N°1 et le bouton "Précédent" ramènera vers le dialogue N°0 
function setButtons(NomBouton1, numeroDialogue1, NomBouton2, numeroDialogue2, NomBouton3, numeroDialogue3){
    if(NomBouton1 != null && numeroDialogue1 != null){
        document.getElementById("button1").innerHTML = NomBouton1;
        document.getElementById('button1').setAttribute('onclick','story('+numeroDialogue1+')');
    }else{
        document.getElementById("button1").style.display = "none";
    }
    if(NomBouton2 != null && numeroDialogue2 != null){
        document.getElementById("button2").innerHTML = NomBouton2;
        document.getElementById('button2').setAttribute('onclick','story('+numeroDialogue2+')');
    }else{
        document.getElementById("button2").style.display = "none";
    }
    if(NomBouton3 != null && numeroDialogue3 != null){
        document.getElementById("button3").innerHTML = NomBouton3;
        document.getElementById('button3').setAttribute('onclick','story('+numeroDialogue3+')');
    }else{
        document.getElementById("button3").style.display = "none";
    }
}

