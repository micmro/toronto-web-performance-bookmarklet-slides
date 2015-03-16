(function(){
	var resources = performance.getEntriesByType("resource");
	console.table(resources.map(function(resource){
	    return {
		    "name" : resource.name,
		    "total" : Math.round(resource.duration) + "ms"
	    }
	}));
})();