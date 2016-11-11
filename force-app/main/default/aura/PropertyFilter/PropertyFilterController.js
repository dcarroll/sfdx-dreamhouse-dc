({
    searchKeyChange: function(component, event, helper) {
        helper.firePropertyFilterChangeEvent(component);
    },

    minPriceInput: function(component, event) {
        component.set("v.minPrice", event.currentTarget.value);
    },

    minPriceChange: function(component, event, helper) {
        helper.firePropertyFilterChangeEvent(component);
    },

    maxPriceInput: function(component, event) {
        component.set("v.maxPrice", event.currentTarget.value);
    },

    maxPriceChange: function(component, event, helper) {
        helper.firePropertyFilterChangeEvent(component);
    },

    reset: function(component, event, helper) {
        component.set("v.minPrice", 0);
        component.set("v.maxPrice", 1500000);
        component.set("v.searchKey", "");
        helper.firePropertyFilterChangeEvent(component);
    }
})