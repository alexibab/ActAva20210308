function mostraAlertaAIA(){
  alert("Alerta!");
  
}
function passaSeguentAIA(objRebut){
    let idObjPregAct = objRebut.parentElement.parentElement.id; 
    let colArticles = document.getElementsByTagName("article");
    let idObjPregSeg;
      for (let i = 0; i < colArticles.length; i++) {
      if(colArticles[i].id == idObjPregAct){
        idObjPregSeg = colArticles[i+1].id;
        break;
      };
    }
  
    amagaElementAIA(idObjPregAct);
    mostraElementAIA(idObjPregSeg);
  }
  function passaSeguentAIA(objRebut){
    let idObjPregAct = objRebut.parentElement.parentElement.id; 
    let colArticles = document.getElementsByTagName("article");
    let idObjPregSeg;
      for (let i = 0; i < colArticles.length; i++) {
      if(colArticles[i].id == idObjPregAct){
        idObjPregSeg = colArticles[i-1].id;
        break;
      };
    }
  
  
  function mostraElementAIA(idRebut){
    document.getElementById(idRebut).classList.add("elementVisibleAIA");
    document.getElementById(idRebut).classList.remove("elementOcultAIA");
  }
  
  function amagaElementAIA(idRebut){
    document.getElementById(idRebut).classList.remove("elementVisibleAIA");
    document.getElementById(idRebut).classList.add("elementOcultAIA");
  }
}