var buttonTag = document.getElementsByClassName('button');
console.log(buttonTag[0].innerText);
console.log(buttonTag[1].innerText);
console.log(buttonTag[2].innerText);
for (var x=0; x<buttonTag.length; x++) {
	alert(buttonTag[x].innerText);
}