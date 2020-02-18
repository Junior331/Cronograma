 var pacientes = document.querySelectorAll('.paciente');

 var removeDiciplina = document.querySelector('#tabela-pacientes');

 removeDiciplina.addEventListener("dblclick", function(event){
    
     event.target.parentNode.classList.add('fade-Out');
     setTimeout(function(){
         event.target.parentNode.remove();

     },500)
 });
