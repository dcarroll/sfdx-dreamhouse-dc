({
	previousPage : function(component) {
        var myEvent = $A.get("e.c:PropertyPageChange");
        myEvent.setParams({ "direction": "previous"});
        myEvent.fire();
	},
	nextPage : function(component) {
        var myEvent = $A.get("e.c:PropertyPageChange");
        myEvent.setParams({ "direction": "next"});
        myEvent.fire();
	}
})