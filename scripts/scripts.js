var derpLists = $(".derp-list__derp").toArray();

derpLists.forEach(function(item, next){
	var $currentList = $(item);
	var derpListChildren = $currentList.children().toArray();
	var interval = window.setInterval(changeImage, 1400);
	var counter = 0;

	function changeImage () {
		var $currentChild = $(derpListChildren[counter]);
		$currentChild.css("opacity", "1");

		counter = counter + 1;
		
		if (counter == derpListChildren.length) {
			counter = 0;
		}

		var $nextChild = $(derpListChildren[counter]);
		$nextChild.css("opacity", "1");
		$currentChild.css("opacity", "0");
	}	

});

