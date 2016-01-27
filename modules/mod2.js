function mod2 (sb) {
	
	function INIT () {
		
		sb.listen({
			listenFor: ["button-clicked"],
			moduleID: this.moduleID,
			moduleFunction: "greet"
		})
	}
	
	function GREET () {
		console.log(sb.greet)
	}
	
	function DESTROY () {
		sb.unlisten(this.moduleID)
		
	}
	
	return { 
        init : INIT,
        greet: GREET,
        destroy : DESTROY
    }; 
}