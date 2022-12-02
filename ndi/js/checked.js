function reponse_V(element, e){
    if (e.srcElement.checked === true) {
        e.srcElement.parentNode.style.backgroundColor="green";
        setTimeout(()=>{
            //Stocke la case cochée en local Storage
            window.localStorage.setItem(element.id, false);
            document.location.href ="win.html";
        },2000)
    }
}

function reponse_F(e){
    if (e.srcElement.checked === true) {
        e.srcElement.parentNode.style.backgroundColor="red";
        setTimeout(()=>{
            document.location.href="error.html";
        },2000);
    }
}