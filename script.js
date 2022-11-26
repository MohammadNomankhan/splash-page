const {body} = document;
function changeBackground(number) {
	let lastClass;
	if (body.className) {
		lastClass = body.className;
	}
	body.className = '';
	switch(number) {
		case '1':
			return(lastClass === 'background-1' ? false : body.classList.add('background-1'));
		case '2':
			return(lastClass === 'background-2' ? false : body.classList.add('background-2'));
	
		case '3':
			return(lastClass === 'background-3' ? false : body.classList.add('background-3'));
		default:
			break;
	}
}	