(function(){
	//make sure marks don't exist already
	performance.clearMarks("startTask");
	performance.clearMarks("endTask");
	performance.clearMeasures("TaskTotal");

	//set start mark
	performance.mark("startTask");

	setTimeout(function(){
		performance.mark("endTask");

		//measure elapsed time
		performance.measure("TaskTotal", "startTask", "endTask");

		//output duration
		alert("total: " + performance.getEntriesByName("TaskTotal")[0].duration + "ms");
	}, 500);
})();