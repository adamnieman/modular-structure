function mod1 (sb) {
	
	function INIT () {
		setupButton ()
	}
	
	function setupButton () {
		var b = document.createElement("BUTTON")
		b.innerHTML = "Click me!"
		sb.addEvent(b, "click", notifyOfClick)
		document.getElementsByTagName("body")[0].appendChild(b)
	}
	
	function notifyOfClick () {
		
		sb.notify({ 
			type : "button-clicked",
			data: null
		});
	}
	
	function DESTROY () {
		
	}
	
	return { 
        init : INIT,
        destroy : DESTROY
    }; 
}