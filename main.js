Glob = {
	countX: 9,
	countY: 5
}

window.onload = function(){
	Glob.rectangleW = Math.round(window.innerWidth/Glob.countX);
	Glob.rectangleH = Math.round(window.innerHeight/Glob.countY);
	console.log(Glob.rectangleW, Glob.rectangleH);

	Onload.showGrid();
}

Onload = {
	showGrid: function(){
		var
		html = "",
		xPos = 0,
		yPos = 0;
		for(var i = 0; i<Glob.countY; i++){
			for(var j = 0; j<Glob.countX; j++){
				html += "<div class='rectangle' style='width: "+Glob.rectangleW+"; height:"+Glob.rectangleH+"; left:"+xPos+"; top:"+yPos+";'>ola</div>";
				xPos += Glob.rectangleW;
			}
			xPos = 0;
			yPos += Glob.rectangleH;
		}
		document.getElementById("wrapper").innerHTML = html;
	}
}
