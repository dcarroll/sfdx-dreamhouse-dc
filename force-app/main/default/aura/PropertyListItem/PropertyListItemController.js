({
	navigateToDetailsView : function(component) {
		var property = component.get("v.property");
        var event = $A.get("e.force:navigateToSObject");
        event.setParams({
            "recordId": property.Id
        });
        event.fire();
	}
})