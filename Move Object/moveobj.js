var t=50,l=0;

function left() {
	if (l>=5) {
		l-=5;
		document.querySelector('#box').style.left=l+"px";
	}
}

function right() {
	if (l<=((screen.width-25))) {
		l+=5;
		document.querySelector('#box').style.left=l+"px";
	}
}

function up() {
	if (t>=5) {
		t-=5;
		document.querySelector('#box').style.top=t+"px";
	}
}

function down() {
	if (t<=510) {
		t+=5;
		document.querySelector('#box').style.top=t+"px";	
	}
}
