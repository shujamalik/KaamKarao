(function($){

	$('.form-checkbox').click(function() {
		
		if( $(this).is(':checked')) {
			$("#terms_conditions").hide();
		} else {
			
			$("#terms_conditions").show();
		}
	});
})(jQuery);