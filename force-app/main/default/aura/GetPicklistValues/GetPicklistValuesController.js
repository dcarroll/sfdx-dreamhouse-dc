({
	init: function(component, event, helper) {
		var action = component.get("c.getPicklistValues");
		action.setParams({
			"objectName" : component.get("v.sobject"),
			"fieldName" : component.get("v.picklistfield")
		});
		action.setCallback(this, function(a) {
            component.set("v.values", a.getReturnValue());
    	});
    	$A.enqueueAction(action);
	}
})