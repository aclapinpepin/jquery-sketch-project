var numtiles = 0;

var createDivSquare = function (number) {
    for (var i = 0; i < number; i++) {
        $("#wrapper").append("<p><div class = 'row'></div></p>");
        }
	var rowstring = "";
	for (var j = 0; j < number; j++) {
		rowstring = rowstring + "<div class = 'block'></div>"
    }
	$(".row").append(rowstring);
};

var remakeBoard = function (tiles) {
    $("#wrapper").empty();
    var squarelength = (800 / tiles) + "px"
    createDivSquare(tiles);
    $(".block").css("height", squarelength);
    $(".block").css("width", squarelength);
    $(".row").css("height", squarelength);
    $(".block").hover(function () {      
        $(this).css("background-color", "grey");
    });
};


var resizeMe = function () {
    num = prompt("How many tiles per side do you want the new board to be?");
    remakeBoard(num);
};


$(document).ready(function () {
    remakeBoard(16);
    document.getElementById("btn1").onclick = function () {
        resizeMe()
    };

    $(".block").hover(

    function () {
      
        $(this).css("background-color", "grey");

    }
    /*COMMENTED OUT RETURN TO BLACK, function() {
    $( this ).css( "background-color", "black");
  }*/
);

});
