var list = document.getElementsByClassName("buttonStyle");
for (var i = 0; i < list.length; i++) {
		list[i].style.background= 'rgb(' + (Math.floor(Math.random() * 256)) + ',' +
					 (Math.floor(Math.random() * 256)) + ',' +
					 (Math.floor(Math.random() * 256)) + ')';

}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
var i= getRandomInt(6);
var str =list[i].style.background;
var n1 = str.indexOf("(");
var n = str.indexOf(")");
var RGB = str.slice(n1, n+1);
document.querySelector("#s1").innerHTML= RGB;


for (var i = 0; i < list.length; i++) {
	list[i].addEventListener("click",function(){

		if (str == this.style.background) {
			for (var i = 0; i < list.length; i++) {
				list[i].style.background=str;
				document.querySelector(".D1").style.background=str;
				document.querySelector("#result").innerHTML="Correct";
			}

		}
		else{
			this.style.background= "#201F20";
			document.querySelector("#result").innerHTML="Try Again";
		}
	})
}

document.querySelector("#new").addEventListener("click",function(){
	location.reload();
})
document.querySelector("#hard").addEventListener("click",function(){
	location.reload();
})

document.querySelector("#easy").addEventListener("click",function(){
	location.reload();
})