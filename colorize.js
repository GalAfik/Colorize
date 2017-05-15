$(window).keypress(function (e) {
  if (e.keyCode === 0 || e.keyCode === 32) {
    e.preventDefault();
    $("#div1").css("background-color", "rgb(" +
    	Math.round(Math.random()*255) + "," +
    	Math.round(Math.random()*255) + "," +
    	Math.round(Math.random()*255) +")"
    	);
    $("#div2").css("background-color", "rgb(" +
    	Math.round(Math.random()*255) + "," +
    	Math.round(Math.random()*255) + "," +
    	Math.round(Math.random()*255) +")"
    	);
    $("#div3").css("background-color", "rgb(" +
    	Math.round(Math.random()*255) + "," +
    	Math.round(Math.random()*255) + "," +
    	Math.round(Math.random()*255) +")"
    	);
    $("#div4").css("background-color", "rgb(" +
    	Math.round(Math.random()*255) + "," +
    	Math.round(Math.random()*255) + "," +
    	Math.round(Math.random()*255) +")"
    	);
    $("#div5").css("background-color", "rgb(" +
    	Math.round(Math.random()*255) + "," +
    	Math.round(Math.random()*255) + "," +
    	Math.round(Math.random()*255) +")"
    	);
  }
});