({
    getRandomNumber : function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

	getTopLeads : function(component, helper) {
        // Simulate call to get scored leads
		var leads = [];
        leads.push({name: "Lisa Taylor", address: "154 Valentine st, Newton MA", phone: "617-896-5214", score: 0});
        leads.push({name: "John Wang", address: "256 Chesnut st, Wellesley MA", phone: "781-526-5211", score: 0});
        leads.push({name: "Alicia Lambert", address: "52 Walnut st, Boston MA", phone: "617-255-5326", score: 0});
        leads.push({name: "Alberto Martinez", address: "125 Appleton st, Boston MA", phone: "617-854-5266", score: 0});
        leads.push({name: "Myriam Aupont", address: "32 Main st, Cambridge MA", phone: "617-5221-5214", score: 0});
        component.set("v.waiting", true);
		window.setTimeout($A.getCallback(function() {
            component.set("v.waiting", false);
            if (component.isValid()) {
                for (var i=0; i<leads.length; i=i+1) {
                    leads[i].score = helper.getRandomNumber(5, 100);
                }
                leads.sort(function(a, b){
                    return a.score<b.score;
                });
                component.set("v.leads", leads);
            }
        }), 300);
    }
})