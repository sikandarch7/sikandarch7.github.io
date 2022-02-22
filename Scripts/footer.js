$(function (){
//once all the elements have loaded in
var foot = $("footer"); //footer element
var winH = $(window).height(); //window height
var docH = $(document.body).height();
var footH = parseFloat(foot.height())+parseFloat(foot.css("padding-top")); //footer height
function footPos(){
	if ( docH <= $(window).height()) { //if window is bigger than page content
		$("body").css("height", winH); //set body height to window height
		foot.css("position", "fixed"); //move footer to bottom of page
		foot.css("bottom", "0");
	}
	else {
		foot.css("position", "static"); //move footer to normal positioning
	}
}

footPos();
$(window).resize(function(){
	winH = $(window).height();
	$("body").css("height", winH);
	footPos();
}); //on window resize check footer positioning


});
