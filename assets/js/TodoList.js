//check off specific todos by clicking
//adds the click listener to the ul and will be applied to the li inside the ul
$("ul").on("click", "li", function(){
	//uses the completed class to handle strike through
	$(this).toggleClass("completed");
});


//deleting the x from the todo and the actual li 
$("ul").on("click", "span",function(event){ //event is used to stop bubbling through the parent elements
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//creating new todos
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grab the text from the input
		var todoText = $(this).val();

		//clear todo text
		$(this).val("");
		//creat a new li and add to ul
		$('ul').append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>");

	}
})

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})




