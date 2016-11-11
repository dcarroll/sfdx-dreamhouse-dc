({
    onRecordSelect : function(component, event, helper) {
        component.set("v.recordId", event.getParam("recordId"));
		helper.getTopLeads(component, helper);
    },

    onPriceChange : function(component, event, helper) {
		helper.getTopLeads(component, helper);
    }

})