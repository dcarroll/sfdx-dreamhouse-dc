({
	getProperties : function(component, page) {
        console.log(typeof component.get("v.minPrice"));
        console.log(component.get("v.maxPrice"));
        var action = component.get("c.findAll");
        var pageSize = component.get("v.pageSize");
		action.setParams({
      		"searchKey": component.get("v.searchKey"),
      		"minPrice": component.get("v.minPrice"),
      		"maxPrice": component.get("v.maxPrice"),
            "pageSize": pageSize,
            "pageNumber": page || 1
    	});
    	action.setCallback(this, function(a) {
            var result = a.getReturnValue();
            component.set("v.properties", result.properties);
            component.set("v.page", result.page);
            component.set("v.total", result.total);
            component.set("v.pages", Math.ceil(result.total/pageSize));
    	});
    	$A.enqueueAction(action);
	}
})