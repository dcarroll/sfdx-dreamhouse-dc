({
    doInit: function(component, event, helper) {
        helper.getProperties(component);
    },

    filterChange: function(component, event, helper) {
        component.set("v.searchKey", event.getParam("searchKey"));
        component.set("v.minPrice", event.getParam("minPrice"));
        component.set("v.maxPrice", event.getParam("maxPrice"));
        helper.getProperties(component);
	},

    pageChange: function(component, event, helper) {
		var page = component.get("v.page") || 1;
        var direction = event.getParam("direction");
        page = direction === "previous" ? (page - 1) : (page + 1);
        helper.getProperties(component, page);
	}

})