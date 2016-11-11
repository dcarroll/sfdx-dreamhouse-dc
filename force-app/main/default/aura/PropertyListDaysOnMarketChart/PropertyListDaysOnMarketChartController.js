({
	doInit : function(component) {
        var action = component.get("c.getAvailableProperties");
    	action.setCallback(this, function(a) {
            var result = a.getReturnValue();
            var chartModel = [];
            for (var i=0; i<result.length; i=i+1) {
                var property = result[i],
                    color;
                if (property.Date_Listed__c && !property.Date_Agreement__c) {
                	var dateListed = new Date(property.Date_Listed__c);
                    var daysOnMarket = Math.round((new Date() - dateListed) / (24 * 60 * 60 * 1000));
                    if (daysOnMarket>45) {
                        color="red";
                    } else if (daysOnMarket>30) {
                        color="orange";
                    } else {
                        color="green";
                    }
                	chartModel.push({
                        id: property.Id,
                        address: property.Address__c,
                        city: property.City__c,
                        dateListed: property.Date_Listed__c,
                        daysOnMarket: daysOnMarket,
                        color: color
                    });
                }
            }
            var maxDaysOnMarket = 0;
            chartModel.forEach(function(house) {
                if (house.daysOnMarket > maxDaysOnMarket) {
                    maxDaysOnMarket = house.daysOnMarket;
                }
            });
            component.set("v.chartModel", chartModel);
            component.set("v.properties", result);
            component.set("v.maxDaysOnMarket", maxDaysOnMarket);
    	});
    	$A.enqueueAction(action);
	},

    barClickHandler : function(component, event) {
        var myEvent = $A.get("e.ltng:selectSObject");
        myEvent.setParams({"recordId": event.target.dataset.id, channel: "Properties"});
        myEvent.fire();
    },

    navigateToRecord : function(component, event) {
	    var myEvent = $A.get("e.force:navigateToSObject");
        myEvent.setParams({"recordId": event.target.dataset.id, slideDevName: "detail"});
	    myEvent.fire();
    }

})