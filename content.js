// content.js


content = document.getElementsByClassName("reddit-link-title may-blank");

for (i = 0; i < content.length; i++) {
	var t = document.createTextNode("The jews did this");
	content[i].appendChild(t);
	console.log(content[i]);
}

