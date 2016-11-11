({
    doInit: function(component, event, helper) {
		var action = component.get("c.findById");
        action.setParams({
            "propertyId": component.get("v.recordId")
        });
        // Register the callback function
        action.setCallback(this, function(response) {
            component.set("v.property", response.returnValue);
            helper.addMarker(component);
        });
        // Invoke the service
        $A.enqueueAction(action);
    },

    jsLoaded: function(component, event) {
        //component.rerender();
    }

})