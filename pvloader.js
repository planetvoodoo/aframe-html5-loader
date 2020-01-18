document.addEventListener('DOMContentLoaded', function() {
    
  var scene = document.querySelector('a-scene');
	var pvloader = document.querySelector('#pvloader');
  var model = document.querySelector('#your-model');
	
	// HTML5 LOADER
	window.onload = function() {
		
    // ADD VALUE TO BAR ONCE SCENE IS LOADED
		scene.addEventListener('loaded', function() {
			pvloader.value += 50;
		});

    // ADD VALUE TO BAR ONCE A MODEL IS LOADED
		model.addEventListener('model-loaded', function() {
			pvloader.value += 50;
		});
		
		function start() {
			loading.style.opacity = '0';
			loading.style.display = 'none';
		}

    // TIMER TO CHECK IF VALUE IS 100% EVERY 1 SECOND
		var checkStatus = setInterval(myTimer, 1000);
		
		function myTimer() {
			if (pvloader.value >= 100){
				clearInterval(checkStatus);
				start();
			}
		}

	}
