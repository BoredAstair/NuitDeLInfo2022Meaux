
  //question item= porte
  function apparition_robe(){
    var robe_questions = document.getElementById("robe_questions");
    var check = window.localStorage.getItem("vrai");
    if (check != "false") {
      robe_questions.classList.toggle("display");
    }

  }
  
  function apparition_test(){
    var test_questions = document.getElementById("test_questions");
    var check_2 = window.localStorage.getItem("vrai_3");
    if (check_2 !== "false") {
      test_questions.classList.toggle("display");
    }

  }
  
  function apparition_pillule(){
    var pillule_questions = document.getElementById("pillule_questions");
    var check_3 = window.localStorage.getItem("vrai_2");
    if (check_3 != "false") {
    pillule_questions.classList.toggle("display");
    }
  }
  
  function apparition_condom(){
    var condom_questions = document.getElementById("condom_questions");
    var check_4 = window.localStorage.getItem("vrai_4");
    if (check_4 != "false") {
    condom_questions.classList.toggle("display");
    }
  }

  
  //question item= porte
  function apparition_serringue(){
    var serringue_questions = document.getElementById("serringue_questions");
    var check_5 = window.localStorage.getItem("vrai_5");
    if (check_5 != "false") {
      serringue_questions.classList.toggle("display");
    }

  }
  
  function apparition_docteur(){
    var docteur_questions = document.getElementById("docteur_questions");
    var check_6 = window.localStorage.getItem("vrai_6");
    if (check_6 !== "false") {
      docteur_questions.classList.toggle("display");
    }

  }
  
  function apparition_livre(){
    var livre_questions = document.getElementById("livre_questions");
    livre_questions.classList.toggle("display");
  }
  
  function apparition_papier(){
    var papier_questions = document.getElementById("papier_questions");
    papier_questions.classList.toggle("display");
  }

  function fermeinfo(e){
    e.srcElement.parentNode.classList.add("display");
  }
  