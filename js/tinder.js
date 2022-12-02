let listeProfiles = [];

if(localStorage.getItem("genre") == 'homme'){
    listeProfiles = [1,2,3,4];
}
if(localStorage.getItem("genre") == 'femme'){
    listeProfiles = [5,6,7,8];
}
if(localStorage.getItem("genre") == 'autre'){
    listeProfiles = [1,2,3,4,5,6,7,8];
}


//Get id for each element of cards
for (let i = 1; i < 9; i++) {
    console.log(i);
    if(listeProfiles.includes(i)){
        document.getElementById(i.toString()).style.display = "flex";
    }else{
        document.getElementById(i.toString()).style.display = "none";
    }
}


function launch(number){
    localStorage.setItem("dialogueActuel", number);
    window.location.href = "game.html";
}