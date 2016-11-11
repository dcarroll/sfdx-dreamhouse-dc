({
	calculateDaysOnMarket : function(component) {
    	var property = component.get("v.property");
        var daysOnMarket = Math.floor((new Date() - new Date(property.Date_Listed__c)) / (24 * 60 * 60 * 1000));
        var color = 'green';
        if (daysOnMarket > 59) {
            color = 'red';
        } else if (daysOnMarket > 29) {
            color = 'orange';
        }
        component.set("v.color", color);
        component.set("v.daysOnMarket", daysOnMarket);
        component.set("v.formattedDateListed", new Date(property.Date_Listed__c).toLocaleString('en-US', {month: 'short', year: 'numeric', day: 'numeric'}));
	}
})