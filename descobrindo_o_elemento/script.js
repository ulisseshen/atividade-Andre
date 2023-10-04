var area = document.querySelector("#conteudoPrincipal");  

  

area.addEventListener('click', alerta);  

  

function alerta(e) {  

alert("tag: "+e.target.tagName+" e seu id: "+e.target.id);  

} 