const form = document.getElementById('form');

const handleSubmit = e => {
	e.preventDefault();
	let autocraticBelief = Number(form['q2'].value) + Number(form['q4'].value) + Number(form['q8'].value) + Number(form['q12'].value) + Number(form['q13'].value);
	let autocraticAction = Number(form['q17'].value) + Number(form['q19'].value) + Number(form['q22'].value) + Number(form['q24'].value) + Number(form['q28'].value);
	let permissiveBelief = Number(form['q1'].value) + Number(form['q5'].value) + Number(form['q7'].value) + Number(form['q11'].value) + Number(form['q15'].value);
	let permissiveAction = Number(form['q16'].value) + Number(form['q20'].value) + Number(form['q23'].value) + Number(form['q25'].value) + Number(form['q29'].value);
	let activeBelief = Number(form['q3'].value) + Number(form['q6'].value) + Number(form['q9'].value) + Number(form['q10'].value) + Number(form['q14'].value);
	let activeAction = Number(form['q18'].value) + Number(form['q21'].value) + Number(form['q26'].value) + Number(form['q27'].value) + Number(form['q30'].value);
	let autocratic = autocraticBelief + autocraticAction;
	let permissive = permissiveBelief + permissiveAction;
	let active = activeBelief + activeAction;
	console.log(autocratic, permissive, active);
	alert('Autocratic :' + autocratic + '\nPermissive :' + permissive + '\nActive :' active );
}

form.addEventListener('submit', handleSubmit);