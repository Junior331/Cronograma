var list = document.querySelector('tr');
var botao = document.querySelector('#adicionar')
var campo = document.querySelector('.campo')

// campo.addEventListener('keyup', function (event) {
//     if (event.keyCode == 13) {
//         addlist()
//     }
// });

// function addlist() {
//     var item = '<td>' + '<img onclick="remover(event)" id="lixeira" src="./img/delete.png">' + '</td>'  ;
//     list.innerHTML += item;
// };
botao.addEventListener('click', function(){
  var item = campo.value;
})
console.log(item)