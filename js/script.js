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
        case 600:
		 setBackground("main.jpg"); //On choisit le background du dialogue 1
            setDialogueText("username","Putain, pourquoi je stress autant. J’ai hâte de la voir mais si je foire tout. Ah ! Bon, arrête d’y penser tout va bien se passer” il souffle un coup, mais il attend 30 minutes devant"); //On choisit l'auteur et le texte du dialogue 1
            setButtons("Suivant", 601); //On choisit le nom des boutons et le dialogue auquel ils ramènent
            setCharacter("right", Vivih.normal; //On choisit quel sprite afficher
            
            break;
			case 601:
		 setBackground("main.jpg"); //On choisit le background du dialogue 1
            setDialogueText("Vivih"," arrive Salut désolé pour le retard elle passe devant lui et ils rentrent dans le resto"); //On choisit l'auteur et le texte du dialogue 1
            setButtons("Suivant", 602); //On choisit le nom des boutons et le dialogue auquel ils ramènent
            setCharacter("right", Vivih.normal; //On choisit quel sprite afficher
			  
			  break;
			case 602:
		 setBackground("main.jpg"); //On choisit le background du dialogue 1
            setDialogueText("Vivih"," Encore désolé pour le retard mais j'avais des trucs super importants avant de venir"); //On choisit l'auteur et le texte du dialogue 1
            setButtons("D'accord mais tu aurais quand même pu me prévenir ", 603, "Non mais il n'y a pas de problème ", 604, " Silence",604); //On choisit le nom des boutons et le dialogue auquel ils ramènent
            setCharacter("right", Vivih.normal; //On choisit quel sprite afficher
			
			  break;
			case 603:
		 setBackground("main.jpg"); //On choisit le background du dialogue 1
            setDialogueText("Vivih"," Ouais je sais mais j'avais vraiment pas le temps car j'ai un emploi du temps chargé, sinon tu fais quoi ?"); //On choisit l'auteur et le texte du dialogue 1
            setButtons("Ok je comprends, bah je suis encore dans le monde des études et toi ?", 605); //On choisit le nom des boutons et le dialogue auquel ils ramènent
            setCharacter("right", Vivih.normal; //On choisit quel sprite afficher
			
			break;
			case 604:
		 setBackground("main.jpg"); //On choisit le background du dialogue 1
            setDialogueText("Vivih"," Ouais je sais mais j'avais vraiment pas le temps car j'ai un emploi du temps chargé, sinon tu fais quoi ?"); //On choisit l'auteur et le texte du dialogue 1
            setButtons("Non mais pas besoin de le prendre comme ça ! elle se lève Vous êtes tous les mêmes ! elle part (the end)", 605); //On choisit le nom des boutons et le dialogue auquel ils ramènent
            setCharacter("right", Vivih.normal; //On choisit quel sprite afficher
			
			break;
			case 605:
		 setBackground("main.jpg"); //On choisit le background du dialogue 1
            setDialogueText("Vivih"," Oui bien sûr, tu sais c'est une maladie qui se soigne et même elle peut disparaître de mon corps"); //On choisit l'auteur et le texte du dialogue 1
            setButtons("Ok je comprends, bah je suis encore dans le monde des études et toi ?", 607, "Oui bien sûr, tu sais c'est une maladie qui se soigne et même elle peut disparaître de mon corps ",607, "Je peux t'expliquer quand même en quoi c'est pas dangereux si je fais attention ",607); //On choisit le nom des boutons et le dialogue auquel ils ramènent
            setCharacter("right", Vivih.normal; //On choisit quel sprite afficher
			
			 break;
			case 607:
		 setBackground("main.jpg"); //On choisit le background du dialogue 1
            setDialogueText("Vivih"," ok m'enfou c'est pas ma faute"); //On choisit l'auteur et le texte du dialogue 1
            setButtons("The end", 602); //On choisit le nom des boutons et le dialogue auquel ils ramènent
            setCharacter("right", Vivih.normal; //On choisit quel sprite afficher
			
			
			
    
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

