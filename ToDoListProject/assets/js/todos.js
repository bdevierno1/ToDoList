//chech of specific todos by clicking
//when a li us clicked inside the ul run this code
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on X to deleted // TODO:
$("ul").on("click","span", function(event){
	$(this).parent().fadeOut(500,function(){
		remove();
	});
	event.stopPropagation();
});
// if user keys in the enter key append a new item to the list
$("input[type = 'text']").keypress(function(event){
	if(event.which === 13){
		var toDo = $(this).val();
		// set the input to be an empty string
		$(this).val()
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + toDo + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type = 'text']").fadeToggle();
});
