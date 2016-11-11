({
    searchKeyChange: function(component) {
        var searchKeyEl = component.find("searchKey").getElement();
        var myEvent = $A.get("e.c:PropertySearchKeyChange");
        myEvent.setParams({"searchKey": searchKeyEl.value });
        myEvent.fire();
    },
    clearText: function(component) {
        component.set("v.searchKey", "");
        var myEvent = $A.get("e.c:PropertySearchKeyChange");
        myEvent.setParams({"searchKey": "" });
        myEvent.fire();
    }
})