const container = document.getElementById('container')

container.addEventListener('click',(e)=>{
	if(e.target.classList.contains('item')){
		e.target.parentElement.classList.toggle('scale')
		e.target.children[1].classList.toggle('rotate')
	}
})