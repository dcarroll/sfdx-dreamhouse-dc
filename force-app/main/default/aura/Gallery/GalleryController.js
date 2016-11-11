({
    onInit: function(component) {
		component.set("v.pictures", []);
    },

    onDragOver: function(component, event) {
        event.preventDefault();
    },

    onDrop: function(component, event) {

        event.stopPropagation();
        event.preventDefault();
        event.dataTransfer.dropEffect = 'copy';

        var files = event.dataTransfer.files;

        for (var i=0; i<files.length; i=i+1) {
            var file = files[i];
            if (file.type.match(/(image.*)/)) {
                var reader = new FileReader();
                reader.onloadend = function(e) {
                    var dataURL = e.target.result;
                    var pictures = component.get("v.pictures");
                    pictures.push(dataURL);
                    component.set("v.pictures", pictures);
                    //helper.upload(component, file, dataURL.match(/,(.*)$/)[1]);
                };
                reader.readAsDataURL(file);
            }
        }

    }

})