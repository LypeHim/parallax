
// Pega o elemento modal
var modal = document.getElementById('modalSimples');
//Pega o botão do elemento
var modalBtn = document.getElementById('modalBtn');
//Pega o botão de fechar
var btnFechar = document.getElementsByClassName('fechaBtn')[0];


//Espera por um evento click para abrir o modal:
modalBtn.addEventListener('click', openModal);

function openModal(){
	modal.style.display = 'block';
}

//Espera por um evento click para fechar o modal:
btnFechar.addEventListener('click', closeModal);

function closeModal(){
	modal.style.display = 'none';
}

//Espera por um clique fora da caixa
window.addEventListener('click', clickOutside);

function clickOutside(e){
	if(e.target == modal){
		modal.style.display = 'none';
	}
}