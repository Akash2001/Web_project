var a="";
var b="";
var c,d,e,f,g,h,i;
	function input1() {	
	a+="1";	
    document.getElementById('screen').textContent= a;
}

	function input2() {
	a+="2";	
    document.getElementById('screen').textContent= a;
}

	function input3() {
	a+="3";
    document.getElementById('screen').textContent=a;
}

	function input4() {
	a+="4";
    document.getElementById('screen').textContent=a;
}

	function input5() {
	a+="5";
    document.getElementById('screen').textContent=a;
}

	function input6() {
	a+="6";
    document.getElementById('screen').textContent=a;
}

	function input7() {
	a+="7";
    document.getElementById('screen').textContent=a;
}

	function input8() {
	a+="8";
    document.getElementById('screen').textContent=a;
}

	function input9() {
	a+="9";
    document.getElementById('screen').textContent=a;
}

	function input10() {
	b=a;
	a+="*";
	g=a.length;	
    document.getElementById('screen').textContent=a;
}

	function input11() {
	a+="0";
    document.getElementById('screen').textContent=a;
}

	function input12(){	
	i=a.slice(g);
	d=parseInt(b,10);
	e=parseInt(i,10);

	var j=a.charAt(g-1);

	if(j=="+"){

		h=(d+e);

    }

    else if(j=="-"){

		h=(d-e);

	}

	else if(j=="*"){

		h=(d*e);

	}

	else {

		h=(d/e);

	}

    document.getElementById('screen').textContent=(h);
    a="";
}

    function input13() {
    b=a;
	a+="+";
	g=a.length;
    document.getElementById('screen').textContent=a;
}

   function input14() {
	b=a;
	a+="-";
	g=a.length;
    document.getElementById('screen').textContent=a;
}

   function input15() {
	b=a;
	a+="/";
	g=a.length;
    document.getElementById('screen').textContent=a;
}

 function input16() {
	a="";
    document.getElementById('screen').textContent=a;
}





