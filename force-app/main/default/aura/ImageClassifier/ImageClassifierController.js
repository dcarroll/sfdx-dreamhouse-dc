({
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
    
    onRemoveTagBtnClick: function(component, event) {
        console.log(event.currentTarget);
        var index = event.currentTarget.name;
        var tags = component.get("v.tags");
        tags.splice(index, 1);
        component.set("v.tags", tags);
    },
    
    onImageLoad: function(component, event) {
        component.set("v.waiting", true);
        window.setTimeout($A.getCallback(function() {
            component.set("v.waiting", false);
            if (component.isValid()) {
                var tags = ["Colonial", "Front Yard"];
                component.set("v.tags", tags);
            }
		}), 2000);
    } 

})