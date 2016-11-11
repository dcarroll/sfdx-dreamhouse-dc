({
    onInit: function(component) {

    },

    onDragOver: function(component, event) {
        event.preventDefault();
    },

    onDrop: function(component, event) {
        
        event.stopPropagation();
        event.preventDefault();
        event.dataTransfer.dropEffect = 'copy';

        var file = event.dataTransfer.files[0];
        if (file.type.match(/(image.*)/)) {
            var reader = new FileReader();
            reader.onloadend = function(e) {
                var dataURL = e.target.result;
                component.set("v.pictureURL", dataURL);
                
                //helper.upload(component, file, dataURL.match(/,(.*)$/)[1]);
            };
            component.set("v.tags", []);
            reader.readAsDataURL(file);
        }

    },
    
    removeTag: function(component, event) {
        console.log("removetag");
        var index = event.currentTarget.dataset.index;
        console.log(index);
        var tags = component.get("v.tags");
        tags.splice(index, 1);
        component.set("v.tags", tags);
    },
    
    imgLoadedHandler: function(component, event) {
        console.log("onload");
        var scanner = component.find('scanner');
        console.log(scanner);
        window.setTimeout(
            $A.getCallback(function() {
                if (component.isValid()) {
        			$A.util.addClass(scanner, 'on');
                    window.setTimeout(
                        $A.getCallback(function() {
                            $A.util.removeClass(scanner, 'on');
							window.setTimeout(
                                $A.getCallback(function() {
                                    if (component.isValid()) {
                                        var tags = ["Colonial", "Two car garage", "Driveway", "Front Yard"];
                                        component.set("v.tags", tags);
                                    }
                                }), 3200
		                    );
                        }), 3200
                    );
                }
            }), 750
		);
    } 

})