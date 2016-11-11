({
    

    onStepChange : function(component, event) {
        var property = component.get("v.property");
        if (property) {
            property.Status__c = event.getParam("value");
            component.find("propertyService").saveRecord();
        }
    },
    
    recordUpdated : function(component, event, helper) {
		var changeType = event.getParams().changeType;
        if (changeType === "CHANGED") { 
            var service = component.find("propertyService");
            service.reloadRecord();
        }
    }

 })