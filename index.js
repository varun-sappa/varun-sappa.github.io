document.getElementById('dropdownMenuButton2').addEventListener('click',()=>{
	const element = document.getElementById("test");
    // element.classList.remove("show");
		if(element.classList.contains("show")){
		element.classList.remove("show");
	}else{
		element.classList.add("show");
	}

});


const abc=document.getElementById('drop');
abc.addEventListener('click',()=>{
	const element = document.getElementById("test2");
//   element.classList.remove("dropdown-item-test");
if(element.classList.contains("dropdown-item-test")){
	element.classList.remove("dropdown-item-test");
}else{
	element.classList.add("dropdown-item-test");
}
});





const lmn=document.getElementById('drop2');
lmn.addEventListener('click',()=>{
	const element = document.getElementById("test4");
//   element.classList.remove("dropdown-item-test");
 if(element.classList.contains("dropdown-item-test2")){
	element.classList.remove("dropdown-item-test2");
 }else{
	element.classList.add("dropdown-item-test2");
        }
});





document.getElementById('dropdownMenuButton3').addEventListener('click',()=>{
	const element = document.getElementById("test3");
    // element.classList.remove("show");
		if(element.classList.contains("show")){
		element.classList.remove("show");
	}else{
		element.classList.add("show");
	}

});





document.getElementById('dropdownMenuButton4').addEventListener('click',()=>{
	const element = document.getElementById("test4");
    // element.classList.remove("show");
		if(element.classList.contains("show")){
		element.classList.remove("show");
	}else{
		element.classList.add("show");
	}

});





document.getElementById('dropdownMenuButton5').addEventListener('click',()=>{
	const element = document.getElementById("test5");
    // element.classList.remove("show");
		if(element.classList.contains("show")){
		element.classList.remove("show");
	}else{
		element.classList.add("show");
	}

});





// });
//apprearance
// $("input.variation").on("click", function () {
// 	if ($(this).val() > 3) {
// 		$("body").css("background", "#111");
// 		$("footer").attr("class", "dark");
// 	} else {
// 		$("body").css("background", "#f9f9f9");
// 		$("footer").attr("class", "");
// 	}
// });


// toggle list vs card view
// $(".option__button").on("click", function () {
// 	$(".option__button").removeClass("selected");
// 	$(this).addClass("selected");
// 	if ($(this).hasClass("option--grid")) {
// 		$(".results-section").attr("class", "results-section results--grid");
// 	} else if ($(this).hasClass("option--list")) {
// 		$(".results-section").attr("class", "results-section results--list");
// 	}
// });



