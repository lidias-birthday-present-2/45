// Lidia play fair!

Cards = [
	{"nam":0,"img":"img/0.png"},
	{"nam":1,"img":"img/1.png"},
	{"nam":2,"img":"img/2.png"},
	{"nam":3,"img":"img/3.png"},
	{"nam":4,"img":"img/4.png"},
	{"nam":5,"img":"img/5.png"},
	{"nam":6,"img":"img/6.png"},
	{"nam":7,"img":"img/7.png"},
	{"nam":8,"img":"img/8.png"},
	{"nam":9,"img":"img/9.png"},
	{"nam":10,"img":"img/10.png"},
	{"nam":11,"img":"img/11.png"},
	{"nam":12,"img":"img/12.png"},
	{"nam":13,"img":"img/13.png"},
	{"nam":14,"img":"img/14.png"},
	{"nam":15,"img":"img/15.png"},
	{"nam":16,"img":"img/16.png"},
	{"nam":17,"img":"img/17.png"},
	{"nam":18,"img":"img/18.png"},
	{"nam":19,"img":"img/19.png"},
	{"nam":20,"img":"img/20.png"},
	{"nam":21,"img":"img/21.png"},
	{"nam":22,"img":"img/22.png"},
	{"nam":23,"img":"img/23.png"},
	{"nam":24,"img":"img/24.png"},
	{"nam":25,"img":"img/25.png"},
	{"nam":26,"img":"img/26.png"},
	{"nam":27,"img":"img/27.png"},
	{"nam":28,"img":"img/28.png"},
	{"nam":29,"img":"img/29.png"},
	{"nam":30,"img":"img/30.png"},
	{"nam":31,"img":"img/31.png"},
	{"nam":32,"img":"img/32.png"},
	{"nam":33,"img":"img/33.png"},
	{"nam":34,"img":"img/34.png"},
	{"nam":35,"img":"img/35.png"},
	{"nam":36,"img":"img/36.png"},
	{"nam":37,"img":"img/37.png"},
	{"nam":38,"img":"img/38.png"},
	{"nam":39,"img":"img/39.png"},
	{"nam":40,"img":"img/40.png"},
	{"nam":41,"img":"img/41.png"},
	{"nam":42,"img":"img/42.png"},
	{"nam":43,"img":"img/43.png"},
	{"nam":44,"img":"img/44.png"}
];

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


Glob = {
	countX: 9,
	countY: 5,
	togglCard: [],
	endScore: 1
}

window.onload = function(){
	Glob.rectangleW = Math.round(window.innerWidth/Glob.countX);
	Glob.rectangleH = Math.round(window.innerHeight/Glob.countY);

	shuffle(Cards);
	Onload.showGrid();
	Onload.showFirstCol();
}

Onuser = {
	clickRectangle: function(id){
		if(Glob.close){
			return;
		}

		if(document.getElementById(id).style.display == "none"){
			return;
		}

		if(document.getElementById(id).parentNode.style.background == "rgb(242, 242, 242)"){
			Glob.togglCard.push(id);
			document.getElementById(id).parentNode.style.background = "rgb(182, 238, 255)";
		}else{
			Glob.togglCard.splice(Glob.togglCard.indexOf(id), 1);
			document.getElementById(id).parentNode.style.background = "rgb(242, 242, 242)";
			return;
		}

		if(Glob.togglCard.length == 2){
			if(!this.checkRelation(Glob.togglCard[0], Glob.togglCard[1])){
				document.getElementById(Glob.togglCard[0]).parentNode.style.background = "rgb(242, 242, 242)";
				document.getElementById(Glob.togglCard[1]).parentNode.style.background = "rgb(242, 242, 242)";
				Glob.togglCard = [];
			}
		}
	},
	checkRelation: function(card1, card2){
		var
		delay = false,
		check1 = 0,
		check2 = 0,
		card3 = 0;
		if(card1 == 3 && card2 == 2 || card1 == 2 && card2 == 3){ // yasmine + sun = latino
			document.getElementById(16).style.display = "block";
			document.getElementById(16).parentNode.style.background = "rgb(182, 238, 255)";
			delay = 16;
		}
		if(card1 == 0 && card2 == 1 || card1 == 1 && card2 == 0){ // sword + body = blood
			var card3 = 42;
			document.getElementById(card3).style.display = "block";
			document.getElementById(card3).parentNode.style.background = "rgb(182, 238, 255)";
			delay = card3;
		}
		if(card1 == 4 && card2 == 6 || card1 == 6 && card2 == 4){ // deutsch + beyond earth = i'll be back
			var card3 = 34;
			document.getElementById(card3).style.display = "block";
			document.getElementById(card3).parentNode.style.background = "rgb(182, 238, 255)";
			delay = card3;
		}
		if(card1 == 3 && card2 == 6 || card1 == 6 && card2 == 3){ // yasmine + beyond earth = thesis
			var card3 = 29;
			document.getElementById(card3).style.display = "block";
			document.getElementById(card3).parentNode.style.background = "rgb(182, 238, 255)";
			delay = card3;
		}
		if(card1 == 30 && card2 == 5 || card1 == 5 && card2 == 30){ // the singing ringing tree+internet=smart
			var card3 = 28;
			document.getElementById(card3).style.display = "block";
			document.getElementById(card3).parentNode.style.background = "rgb(182, 238, 255)";
			delay = card3;
		}
		check1 = 30,
		check2 = 2,
		card3 = 31;
		if(card1 == check1 && card2 == check2 || card1 == check2 && card2 == check1){ // the singing ringing tree+sun=apple
			document.getElementById(card3).style.display = "block";
			document.getElementById(card3).parentNode.style.background = "rgb(182, 238, 255)";
			delay = card3;
		}
		check1 = 13,
		check2 = 5,
		card3 = 12;
		if(card1 == check1 && card2 == check2 || card1 == check2 && card2 == check1){ // banana+internet=If...
			document.getElementById(card3).style.display = "block";
			document.getElementById(card3).parentNode.style.background = "rgb(182, 238, 255)";
			delay = card3;
		}
		check1 = 16,
		check2 = 42,
		card3 = 7;
		if(card1 == check1 && card2 == check2 || card1 == check2 && card2 == check1){ // latino + blood = salsa
			document.getElementById(card3).style.display = "block";
			document.getElementById(card3).parentNode.style.background = "rgb(182, 238, 255)";
			delay = card3;
		}
		check1 = 16,
		check2 = 34,
		card3 = 19;
		if(card1 == check1 && card2 == check2 || card1 == check2 && card2 == check1){ // latino + I'll be back = tango
			document.getElementById(card3).style.display = "block";
			document.getElementById(card3).parentNode.style.background = "rgb(182, 238, 255)";
			delay = card3;
		}
		check1 = 0,
		check2 = 42,
		card3 = 14;
		if(card1 == check1 && card2 == check2 || card1 == check2 && card2 == check1){ // sword + blood = name of the wind
			document.getElementById(card3).style.display = "block";
			document.getElementById(card3).parentNode.style.background = "rgb(182, 238, 255)";
			delay = card3;
		}
		check1 = 29,
		check2 = 6,
		card3 = 35;
		if(card1 == check1 && card2 == check2 || card1 == check2 && card2 == check1){ // thesis + beyond earth = physics
			document.getElementById(card3).style.display = "block";
			document.getElementById(card3).parentNode.style.background = "rgb(182, 238, 255)";
			delay = card3;
		}
		check1 = 1,
		check2 = 34,
		card3 = 26;
		if(card1 == check1 && card2 == check2 || card1 == check2 && card2 == check1){ // body+I'll be back = skull
			document.getElementById(card3).style.display = "block";
			document.getElementById(card3).parentNode.style.background = "rgb(182, 238, 255)";
			delay = card3;
		}
		check1 = 2,
		check2 = 29,
		card3 = 36;
		if(card1 == check1 && card2 == check2 || card1 == check2 && card2 == check1){ // sun+thesis=apocalypse
			document.getElementById(card3).style.display = "block";
			document.getElementById(card3).parentNode.style.background = "rgb(182, 238, 255)";
			delay = card3;
		}
		check1 = 33,
		check2 = 28,
		card3 = 17;
		if(card1 == check1 && card2 == check2 || card1 == check2 && card2 == check1){ // Boreoeutheria+smart=rat
			document.getElementById(card3).style.display = "block";
			document.getElementById(card3).parentNode.style.background = "rgb(182, 238, 255)";
			delay = card3;
		}
		check1 = 2,
		check2 = 6,
		card3 = 20;
		if(card1 == check1 && card2 == check2 || card1 == check2 && card2 == check1){ // sun+beyond-earth=graveyard
			document.getElementById(card3).style.display = "block";
			document.getElementById(card3).parentNode.style.background = "rgb(182, 238, 255)";
			delay = card3;
		}
		check1 = 13,
		check2 = 28,
		card3 = 44;
		if(card1 == check1 && card2 == check2 || card1 == check2 && card2 == check1){ // banana+smart=smart banana
			document.getElementById(card3).style.display = "block";
			document.getElementById(card3).parentNode.style.background = "rgb(182, 238, 255)";
			delay = card3;
		}
		check1 = 19,
		check2 = 2,
		card3 = 8;
		if(card1 == check1 && card2 == check2 || card1 == check2 && card2 == check1){ // tango+sun=lea
			document.getElementById(card3).style.display = "block";
			document.getElementById(card3).parentNode.style.background = "rgb(182, 238, 255)";
			delay = card3;
		}
		check1 = 20,
		check2 = 19,
		card3 = 9;
		if(card1 == check1 && card2 == check2 || card1 == check2 && card2 == check1){ // graveyard+tango=vassili
			document.getElementById(card3).style.display = "block";
			document.getElementById(card3).parentNode.style.background = "rgb(182, 238, 255)";
			delay = card3;
		}
		check1 = 35,
		check2 = 42,
		card3 = 39;
		if(card1 == check1 && card2 == check2 || card1 == check2 && card2 == check1){ // physics+blood=portal
			document.getElementById(card3).style.display = "block";
			document.getElementById(card3).parentNode.style.background = "rgb(182, 238, 255)";
			delay = card3;
		}
		check1 = 0,
		check2 = 20,
		card3 = 38;
		if(card1 == check1 && card2 == check2 || card1 == check2 && card2 == check1){ // sword+graveyard=cross
			document.getElementById(card3).style.display = "block";
			document.getElementById(card3).parentNode.style.background = "rgb(182, 238, 255)";
			delay = card3;
		}
		check1 = 44,
		check2 = 31,
		card3 = 22;
		if(card1 == check1 && card2 == check2 || card1 == check2 && card2 == check1){ // smart banana+apple=smart fruits
			document.getElementById(card3).style.display = "block";
			document.getElementById(card3).parentNode.style.background = "rgb(182, 238, 255)";
			delay = card3;
		}
		check1 = 3,
		check2 = 9,
		card3 = 10;
		if(card1 == check1 && card2 == check2 || card1 == check2 && card2 == check1){ // yasmine+vassili=stupid game
			document.getElementById(card3).style.display = "block";
			document.getElementById(card3).parentNode.style.background = "rgb(182, 238, 255)";
			delay = card3;
		}
		check1 = 8,
		check2 = 19,
		card3 = 15;
		if(card1 == check1 && card2 == check2 || card1 == check2 && card2 == check1){ // lea+tango=marriage
			document.getElementById(card3).style.display = "block";
			document.getElementById(card3).parentNode.style.background = "rgb(182, 238, 255)";
			delay = card3;
		}
		check1 = 12,
		check2 = 38,
		card3 = 43;
		if(card1 == check1 && card2 == check2 || card1 == check2 && card2 == check1){ // If...+cross=false
			document.getElementById(card3).style.display = "block";
			document.getElementById(card3).parentNode.style.background = "rgb(182, 238, 255)";
			delay = card3;
		}
		check1 = 43,
		check2 = 16,
		card3 = 37;
		if(card1 == check1 && card2 == check2 || card1 == check2 && card2 == check1){ // false+latino=caucasian
			document.getElementById(card3).style.display = "block";
			document.getElementById(card3).parentNode.style.background = "rgb(182, 238, 255)";
			delay = card3;
		}
		check1 = 8,
		check2 = 16,
		card3 = 23;
		if(card1 == check1 && card2 == check2 || card1 == check2 && card2 == check1){ // lea+latino=beijinhos
			document.getElementById(card3).style.display = "block";
			document.getElementById(card3).parentNode.style.background = "rgb(182, 238, 255)";
			delay = card3;
		}
		check1 = 22,
		check2 = 12,
		card3 = 25;
		if(card1 == check1 && card2 == check2 || card1 == check2 && card2 == check1){ // smart fruits+If...= smart sexy fruits
			document.getElementById(card3).style.display = "block";
			document.getElementById(card3).parentNode.style.background = "rgb(182, 238, 255)";
			delay = card3;
		}
		check1 = 19,
		check2 = 35,
		card3 = 11;
		if(card1 == check1 && card2 == check2 || card1 == check2 && card2 == check1){ // tango+physics=lidia
			document.getElementById(card3).style.display = "block";
			document.getElementById(card3).parentNode.style.background = "rgb(182, 238, 255)";
			delay = card3;
		}
		check1 = 10,
		check2 = 32,
		card3 = 18;
		if(card1 == check1 && card2 == check2 || card1 == check2 && card2 == check1){ // stupid game+mountains=place hacking
			document.getElementById(card3).style.display = "block";
			document.getElementById(card3).parentNode.style.background = "rgb(182, 238, 255)";
			delay = card3;
		}
		check1 = 43,
		check2 = 36,
		card3 = 41;
		if(card1 == check1 && card2 == check2 || card1 == check2 && card2 == check1){ // false+apocalypse=eden garden
			document.getElementById(card3).style.display = "block";
			document.getElementById(card3).parentNode.style.background = "rgb(182, 238, 255)";
			delay = card3;
		}
		check1 = 37,
		check2 = 38,
		card3 = 21;
		if(card1 == check1 && card2 == check2 || card1 == check2 && card2 == check1){ // caucasian+cross=la croix
			document.getElementById(card3).style.display = "block";
			document.getElementById(card3).parentNode.style.background = "rgb(182, 238, 255)";
			delay = card3;
		}
		check1 = 28,
		check2 = 21,
		card3 = 40;
		if(card1 == check1 && card2 == check2 || card1 == check2 && card2 == check1){ // smart+la croix=biology
			document.getElementById(card3).style.display = "block";
			document.getElementById(card3).parentNode.style.background = "rgb(182, 238, 255)";
			delay = card3;
		}
		check1 = 25,
		check2 = 16,
		card3 = 27;
		if(card1 == check1 && card2 == check2 || card1 == check2 && card2 == check1){ // smart sexy fruits+latino=super smart sexy fruits
			document.getElementById(card3).style.display = "block";
			document.getElementById(card3).parentNode.style.background = "rgb(182, 238, 255)";
			delay = card3;
		}
		check1 = 10,
		check2 = 11,
		card3 = 24;
		if(card1 == check1 && card2 == check2 || card1 == check2 && card2 == check1){ // stupid game+lidia=
			document.getElementById(card3).style.display = "block";
			document.getElementById(card3).parentNode.style.background = "rgb(182, 238, 255)";
			delay = card3;
			this.endScore();
		}
		check1 = 20,
		check2 = 18,
		card3 = 24;
		if(card1 == check1 && card2 == check2 || card1 == check2 && card2 == check1){ // graveyard+place hacking=
			document.getElementById(card3).style.display = "block";
			document.getElementById(card3).parentNode.style.background = "rgb(182, 238, 255)";
			delay = card3;
			this.endScore();
		}
		check1 = 31,
		check2 = 41,
		card3 = 24;
		if(card1 == check1 && card2 == check2 || card1 == check2 && card2 == check1){ // apple+eden garden=
			document.getElementById(card3).style.display = "block";
			document.getElementById(card3).parentNode.style.background = "rgb(182, 238, 255)";
			delay = card3;
			this.endScore();
		}
		check1 = 40,
		check2 = 1,
		card3 = 24;
		if(card1 == check1 && card2 == check2 || card1 == check2 && card2 == check1){ // biology+body=
			document.getElementById(card3).style.display = "block";
			document.getElementById(card3).parentNode.style.background = "rgb(182, 238, 255)";
			delay = card3;
			this.endScore();
		}
		check1 = 23,
		check2 = 41,
		card3 = 24;
		if(card1 == check1 && card2 == check2 || card1 == check2 && card2 == check1){ // beijinhos+eden garden=
			document.getElementById(card3).style.display = "block";
			document.getElementById(card3).parentNode.style.background = "rgb(182, 238, 255)";
			delay = card3;
			this.endScore();
		}
		check1 = 27,
		check2 = 23,
		card3 = 24;
		if(card1 == check1 && card2 == check2 || card1 == check2 && card2 == check1){ // super smart sexy fruits+beijinhos=
			document.getElementById(card3).style.display = "block";
			document.getElementById(card3).parentNode.style.background = "rgb(182, 238, 255)";
			delay = card3;
			this.endScore();
		}


		if(delay){
			Glob.togglCard = [];
			Glob.close = 1;
			setTimeout(function(){
				Glob.close = 0;
				document.getElementById(delay).parentNode.style.background = "rgb(242, 242, 242)";
			  document.getElementById(card1).parentNode.style.background = "rgb(242, 242, 242)";
				document.getElementById(card2).parentNode.style.background = "rgb(242, 242, 242)";
			}, 1000);
			return true;
		}else{
			return false;
		}
	},
	endScore: function(){
		// 1 out of 5
		if(Glob.endScore == 6){
			document.getElementById("end-score").innerHTML = "win!";
		}else{
			document.getElementById("end-score").innerHTML = Glob.endScore+" out of 6";
			Glob.endScore++;
		}
	}
}

Onload = {
	showGrid: function(){
		var
		html = "",
		img = "",
		a = "",
		xPos = 0,
		yPos = 0,
		index = 0;
		for(var i = 0; i<Glob.countY; i++){
			for(var j = 0; j<Glob.countX; j++){
				if(Cards[index]){
					a = "<a target='_blank' href="+Cards[index].img+">full resolution</a>";
					img = "<img id='"+Cards[index].nam+"' style='max-width: "+Glob.rectangleW+"px; max-height: "+(Glob.rectangleH-0)+"px; display: none' src='"+Cards[index].img+"'>";
					if(Cards[index].nam == 24){
						a += "<div id='end-score'></div>";
					}
				}
				html += "<div onclick='Onuser.clickRectangle("+Cards[index].nam+")' class='rectangle' style='width: "+Glob.rectangleW+"px; height:"+Glob.rectangleH+"px; left:"+xPos+"px; top:"+yPos+"px; background: rgb(242, 242, 242);'>"+img+a+"</div>";
				xPos += Glob.rectangleW;
				index++;
			}
			xPos = 0;
			yPos += Glob.rectangleH;
		}
		document.getElementById("wrapper").innerHTML = html;
	},
	showFirstCol: function(){
		var show = [0, 1, 2, 3, 4, 5, 6, 30, 32, 33, 13],
		len = show.length;
		for(var i = 0; i<len; i++){
			document.getElementById(show[i]).style.display = "block";
		}
	}
}
