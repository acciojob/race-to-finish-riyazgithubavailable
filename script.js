window.promises = [];
Promise.any(promises)
.then(result => {
	document.getElementById('output').innerText=result;
})
.catch(err =>{
	console.log(err);
})
// Do not change the code above this
// add your promises to the array `promises`



