function hideEverything(){
	$("#heroImg").css("display", "none");
	$("#myAbout").css("display", "none")
	$("#mySkills").css("display", "none");
	$("#myWork").css("display", "none");

}

$("#myName").click(function(){
	hideEverything();
	$("#heroImg").css("display", "block");
})

$("#about").click(function(){
	hideEverything();
	$("#myAbout").css("display", "block");
})

$("#about2").click(function(){
	hideEverything();
	$("#myAbout").css("display", "block");
})

$("#skills").click(function(){
	hideEverything();
	$("#mySkills").css("display", "block");
})

$("#skills2").click(function(){
	hideEverything();
	$("#mySkills").css("display", "block");
})

$("#work").click(function(){
	hideEverything();
	$("#myWork").css("display", "block");
})

$("#work2").click(function(){
	hideEverything();
	$("#myWork").css("display", "block");
})