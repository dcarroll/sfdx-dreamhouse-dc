({
	previousPage : function(component, event) {
        var myEvent = $A.get("e.c:PropertyPageChange");
        myEvent.setParams({ "direction": "previous"});
        myEvent.fire();
	},
	nextPage : function(component, event) {
        var myEvent = $A.get("e.c:PropertyPageChange");
        myEvent.setParams({ "direction": "next"});
        myEvent.fire();
	}
})