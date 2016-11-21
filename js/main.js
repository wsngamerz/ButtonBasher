//set variables
var bashes = 0;
var bashNum = 1;

function bashClick(bashNum) {
	bashes = bashes + bashNum;
	document.getElementById("bashes").innerHTML = bashes;
}
