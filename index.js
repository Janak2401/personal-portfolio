
function modalShow() {
	var modal = document.getElementById("modal");
	modal.style.display = "block";
}

function modalHide() {
	var modal = document.getElementById("modal");
	modal.style.display = "none";
}

window.onclick = function(event) {
	if(event.target == modal) {
		modal.style.display = "none";
	}
}