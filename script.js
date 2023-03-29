
let popa = Math.floor((Math.random()*20)+1);
let rocka = Math.floor((Math.random()*20)+1);
let rapa = Math.floor((Math.random()*20)+1);

document.getElementById("pop").innerHTML = popa;
document.getElementById("rock").innerHTML = rocka;
document.getElementById("rap").innerHTML = rapa;

if(popa>rocka && popa>rapa){
	document.getElementById("genmost").innerHTML = "Pop: "+popa;
}
else if(rocka>popa && rocka>rapa){
	document.getElementById("genmost").innerHTML = "Rock: "+rocka;
}
else{
	document.getElementById("genmost").innerHTML = "Rap: "+rapa;
}

let time = Math.floor((popa+rocka+rapa)*(Math.random()+1)+60);
document.getElementById("gentime").innerHTML = "It takes "+time+" minutes";




let ran = Math.floor((Math.random()*24)+1)+1;

switch(ran){
	case 1:
		document.getElementById("genname").innerHTML = "A";
		break;
	case 2:
		document.getElementById("genname").innerHTML = "B";
		break;
	case 3:
		document.getElementById("genname").innerHTML = "C";
		break;
	case 4:
		document.getElementById("genname").innerHTML = "D";
		break;
	case 5:
		document.getElementById("genname").innerHTML = "E";
		break;
	case 6:
		document.getElementById("genname").innerHTML = "F";
		break;
	case 7:
		document.getElementById("genname").innerHTML = "G";
		break;
	case 8:
		document.getElementById("genname").innerHTML = "H";
		break;
	case 9:
		document.getElementById("genname").innerHTML = "I";
		break;
	case 10:
		document.getElementById("genname").innerHTML = "J";
		break;
	case 11:
		document.getElementById("genname").innerHTML = "K";
		break;
	case 12:
		document.getElementById("genname").innerHTML = "L";
		break;
	case 13:
		document.getElementById("genname").innerHTML = "M";
		break;
	case 14:
		document.getElementById("genname").innerHTML = "N";
		break;
	case 15:
		document.getElementById("genname").innerHTML = "0";
		break;
	case 16:
		document.getElementById("genname").innerHTML = "P";
		break;
	case 17:
		document.getElementById("genname").innerHTML = "Q";
		break;
	case 18:
		document.getElementById("genname").innerHTML = "R";
		break;
	case 19:
		document.getElementById("genname").innerHTML = "S";
		break;
	case 20:
		document.getElementById("genname").innerHTML = "T";
		break;
	case 21:
		document.getElementById("genname").innerHTML = "U";
		break;
	case 22:
		document.getElementById("genname").innerHTML = "V";
		break;
	case 23:
		document.getElementById("genname").innerHTML = "W";
		break;
	case 24:
		document.getElementById("genname").innerHTML = "X";
		break
	case 25:
		document.getElementById("genname").innerHTML = "Y";
		break;
	default:
		document.getElementById("genname").innerHTML = "Z";
		break;

}