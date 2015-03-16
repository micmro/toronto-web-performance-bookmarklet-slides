(function(){
	var fullNetwork = performance.timing.responseEnd - performance.timing.navigationStart;
	var connectionTime = performance.timing.responseStart - performance.timing.navigationStart;

	alert("fullNetwork: " + fullNetwork + "ms\nconnectionTime: " + connectionTime + "ms");
})();