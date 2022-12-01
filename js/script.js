//INDEX.HTML



//GAME.HTML

let dialogueActuel = 0; //Variable  pour suivre l'avancée de l'utilisateur dans le jeu

function next(){
    story(dialogueActuel+1);
}
function previous(){
    story(dialogueActuel-1);
}


//Cette fonction actualise tout le contenu de la page
//Cette fonction est appellée par une next() ou previous() uniquement.
function story(dialogueActuel){ 
    switch (dialogueActuel) {
        case 0: //Premier dialogue du jeu
            setBackground("test.jpg");
            setDialogueText("Monika","Bonjour, je suis un test");
            setButtons("Suivant", 1, "Précédent", 0);

            
            break;

        case 1: //Deuxième dialogue du jeu
        alert("Dialogue 2");
            
            break;
        case 2:
            
            break;
        case 3:
            
            break;
    
        default:
            alert("Erreur");
            break;
    }
}

//Affiche l'image de votre choix dans le background
//Exemple : setBackground("test.jpg");
function setBackground(string){
    string = "url('ressources/backgrounds/"+string+"')";
    document.getElementById("background").style.backgroundImage = string;
}

//Affiche le texte de votre choix dans le dialogue
//Exemple : setDialogueText("Monika", "Bonjour, je suis un test");
function setDialogueText(auteur, contenu){
    document.getElementById("auteur").innerHTML = auteur;
    document.getElementById("dialogueText").innerHTML = string;
}

//Actualise le texte contenu dans les boutons
//Exemple : setButtons("Suivant", 1, "Précédent", 0); Le bouton "Suivant" ramènera vers le dialogue N°1 et le bouton "Précédent" ramènera vers le dialogue N°0 
function setButtons(NomBouton1, numeroDialogue1, NomBouton2, numeroDialogue2, NomBouton3, numeroDialogue3){
    if(NomBouton1 != null && numeroDialogue1 != null){
        document.getElementById("button1").innerHTML = NomBouton1;
        document.getElementById('button1').setAttribute('onclick','story('+numeroDialogue1+')');
    }
    if(NomBouton2 != null && numeroDialogue2 != null){
        document.getElementById("button2").innerHTML = NomBouton2;
        document.getElementById('button2').setAttribute('onclick','story('+numeroDialogue2+')');
    }
    if(NomBouton3 != null && numeroDialogue3 != null){
        document.getElementById("button3").innerHTML = NomBouton3;
        document.getElementById('button3').setAttribute('onclick','story('+numeroDialogue3+')');
    }
    if(NomBouton4 == null && numeroDialogue4 == null){
        document.getElementById("button4").innerHTML = "";
        document.getElementById('button4').setAttribute('onclick','');
    }
}

