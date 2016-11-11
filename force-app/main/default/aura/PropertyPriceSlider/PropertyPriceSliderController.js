({
	doInit : function(component) {
        var slider = component.find("slider").getElement();
        noUiSlider.create(slider, {
            start: [300000, 1500000],
            tooltips: [ true, true ],
            connect: true,
            step: 50000,
            range: {
                'min': 300000,
                'max': 1500000
            },
            format: {
                  to: function ( value ) {
                    return Math.round(value/1000);
                  },
                  from: function ( value ) {
                    return value;
                  }
                }
        });

        slider.noUiSlider.on('change', function() {
            var minMax =  slider.noUiSlider.get();
            var myEvent = $A.get("e.c:PropertyPriceSelectionChange");
            myEvent.setParams({ "min": minMax[0]*1000, "max": minMax[1]*1000});
            myEvent.fire();
        });

	}
})