require.config({
	// application init
	deps:['scripts/main'],	// webapp/scripts/main.js
	baseUrl: "webapp",
	paths: {
		jquery: "lib/jquery/jquery-2.0.0.min"	// don't include *.js otherwise it is absolute
	}

})