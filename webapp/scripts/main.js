require(['jquery','scripts/models/model1','scripts/views/view1'], function($, m1, v1){

	$(function(){

		$('body').prepend("<p>jQuery " + $().jquery + " loaded.</p>")
		v1.elm = '#w1';
		v1.render(m1);
		//console.log(v1);

	});

});