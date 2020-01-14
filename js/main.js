const altura = document.body.scrollHeight - window.innerHeight;
const fondo = document.getElementById('fondo_hojas');

window.onscroll = () => {
	const anchoFondo = (window.pageYOffset / altura) * 600;
	if(anchoFondo <= 100){
		fondo.style.width = anchoFondo + '%';
	}
}