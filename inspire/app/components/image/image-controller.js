(function(){
	var ic = this;
	var imageService = new ImageService();
	
	imageService.getImage(function(res){
		$('#body').css({ background: 'url(' + res.large_url + ')', color: 'black', 'background-size': 'cover', 'position': 'absolute'
		})
	})
	//Your ImageService is a global constructor function what can you do here if you new it up?
	
}())
