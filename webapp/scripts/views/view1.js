/** /
var View1 = function($){
	
	var tpl = '';

	this.elm = 'body';
	this.render = function(){
		// if it was not inside the module, jQuery could be available and accessible 
		// within this scope. The function would not need the $ arg
		$(this.elm).empty().append('<p>Widget View 1</p>');
	}
	
	return {
		render: this.render,
		el: this.elm
	};	// has to return object 
};
/**/

// simple no dependencies, later add jQuery
define(['jquery'], function($){

	var View = (function(){

		var tpl = '';
		this.elm = 'body';
		this.render = function(model){
			$(this.elm).empty().append('<h3>Widget '+model.name+'</h3>');
			console.log('View 1 is rendering the widget');
		}
		
		return {
			render: this.render,
			el: this.elm
		};	

	}());

	return View;  // module needs to return object

});