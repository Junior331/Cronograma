var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){

    var pacientes = document.querySelectorAll('.Disciplina');

    if(this.value.length > 0){
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector('.info-disciplinas');
            var expressao = new RegExp(this.value, "i");
            var nome = tdNome.textContent;
    
    
            if(!expressao.test(nome)) {
                paciente.classList.add('invisivel');				
            } else {
                paciente.classList.remove('invisivel');				
            }
        }
        } else {
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove('invisivel');
        }
    }
});